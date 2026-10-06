import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function PagePending() {
  return (
    <div role="status" aria-live="polite" className="fixed inset-x-0 top-0 z-[90] h-1 overflow-hidden bg-primary/20">
      <div className="h-full w-1/3 animate-pulse bg-primary" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPendingComponent: PagePending,
    defaultPendingMs: 300,
  });

  return router;
};
