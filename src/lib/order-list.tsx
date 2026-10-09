import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { CatalogueItem } from "@/data/catalogue";

export type OrderLine = { name: string; price: string; img: string; qty: number };

const STORAGE_KEY = "chef-store-order";

function numeric(price: string) {
  return Number(String(price).replace(/[^\d]/g, "")) || 0;
}

function load(): OrderLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) => line && typeof line.name === "string" && typeof line.price === "string",
    ) as OrderLine[];
  } catch {
    return [];
  }
}

type OrderValue = {
  lines: OrderLine[];
  count: number;
  total: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  has: (name: string) => boolean;
  add: (item: CatalogueItem) => void;
  remove: (name: string) => void;
  clear: () => void;
  message: string;
};

const OrderContext = createContext<OrderValue | null>(null);

export function OrderListProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<OrderLine[]>([]);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  // Read the saved list only after hydration, so server and client markup match.
  useEffect(() => {
    setLines(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage unavailable — the list simply won't persist */
    }
  }, [lines, ready]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const add = useCallback((item: CatalogueItem) => {
    setLines((current) => {
      const existing = current.find((line) => line.name === item.name);
      if (existing) {
        return current.map((line) =>
          line.name === item.name ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [...current, { name: item.name, price: item.price, img: item.img, qty: 1 }];
    });
  }, []);

  const remove = useCallback((name: string) => {
    setLines((current) => current.filter((line) => line.name !== name));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<OrderValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.qty, 0);
    const sum = lines.reduce((acc, line) => acc + numeric(line.price) * line.qty, 0);
    const message = lines.length
      ? [
          "Hello Chef Store, I'd like to order:",
          ...lines.map(
            (line, i) => `${i + 1}. ${line.name}${line.price ? ` (${line.price})` : ""}${line.qty > 1 ? ` x${line.qty}` : ""}`,
          ),
          sum ? `Estimated total: ₦${sum.toLocaleString("en-NG")}` : "",
        ]
          .filter(Boolean)
          .join("\n")
      : "Hello Chef Store, I'd like to place an order.";

    return {
      lines,
      count,
      total: sum ? `₦${sum.toLocaleString("en-NG")}` : "",
      open,
      setOpen,
      has: (name: string) => lines.some((line) => line.name === name),
      add,
      remove,
      clear,
      message,
    };
  }, [lines, open, add, remove, clear]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrderList() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrderList must be used inside OrderListProvider");
  return context;
}
