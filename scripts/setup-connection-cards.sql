-- ==============================================================================
-- Setup Home Page Connection Cards Section
-- ==============================================================================
-- This script creates a new table `connection_cards` to manage the content of the
-- "Discover more ways to connect" section dynamically. It also inserts the
-- initial content.
-- To use this script, copy and paste its contents into the Supabase SQL Editor
-- and run it.
-- ==============================================================================

-- 1. Create the connection_cards table
CREATE TABLE IF NOT EXISTS public.connection_cards (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  cta_url TEXT,
  is_active BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Insert the initial card content
-- This will only insert if the table is empty to avoid duplicate content.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.connection_cards) THEN
    INSERT INTO public.connection_cards (title, description, image_url, cta_url)
    VALUES
      (
        'Register for YTHX',
        'A camp where youth will deepen their relationship with God. July 8-11.',
        'https://ext.same-assets.com/1961196060/1795367905.webp',
        '/ythx'
      ),
      (
        'Worship Experiences',
        'Join us online or in person for our weekend services.',
        'https://ext.same-assets.com/3701992434/2469607390.webp',
        '/locations'
      ),
      (
        'Elevation Worship',
        'Experience uplifting worship music from Elevation Worship.',
        'https://ext.same-assets.com/272754724/2787392600.webp',
        'https://elevationworship.com'
      );
  END IF;
END $$;

-- 3. Enable RLS and create a read policy
-- This is a reminder to enable Row Level Security (RLS) on the new table
-- and create a policy that allows public read access.
--
-- Example Policy (run this in Supabase SQL editor after enabling RLS):
-- CREATE POLICY "Public read access for active connection cards" 
-- ON public.connection_cards FOR SELECT
-- USING (is_active = true);
