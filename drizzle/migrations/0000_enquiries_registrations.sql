CREATE TABLE public.contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) <= 255),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 30),
  message text NOT NULL CHECK (char_length(message) BETWEEN 5 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_enquiries TO anon, authenticated;
GRANT SELECT, DELETE ON public.contact_enquiries TO authenticated;
GRANT ALL ON public.contact_enquiries TO service_role;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit enquiry" ON public.contact_enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins read enquiries" ON public.contact_enquiries FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete enquiries" ON public.contact_enquiries FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.training_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) <= 255),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 30),
  program text NOT NULL CHECK (char_length(program) <= 120),
  notes text CHECK (notes IS NULL OR char_length(notes) <= 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.training_registrations TO anon, authenticated;
GRANT SELECT, DELETE ON public.training_registrations TO authenticated;
GRANT ALL ON public.training_registrations TO service_role;
ALTER TABLE public.training_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can register" ON public.training_registrations FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins read registrations" ON public.training_registrations FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete registrations" ON public.training_registrations FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));