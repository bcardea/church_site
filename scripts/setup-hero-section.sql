-- ==============================================================================
-- Setup Home Page Hero Section
-- ==============================================================================
-- This script creates a new table `hero_content` to manage the content of the
-- home page hero section dynamically. It also inserts the initial content.
-- To use this script, copy and paste its contents into the Supabase SQL Editor
-- and run it.
-- ==============================================================================

-- 1. Create the hero_content table
CREATE TABLE IF NOT EXISTS public.hero_content (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  image_url TEXT,
  cta_text TEXT,
  cta_url TEXT,
  is_active BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Insert the initial hero content
-- This will only insert if the table is empty to avoid duplicate content.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.hero_content) THEN
    INSERT INTO public.hero_content (title, subtitle, image_url, cta_text, cta_url)
    VALUES (
      'Time to Rise & Shine',
      'Larry Brey',
      '/images/outreach/outreach-3.jpg', -- Placeholder image, please update in Supabase
      'Watch Sermon',
      'https://www.youtube.com/watch?v=your-sermon-id' -- Placeholder link, please update
    );
  END IF;
END $$;

-- 3. Ensure RLS is enabled and set up policies
-- This is a reminder to enable Row Level Security (RLS) on the new table
-- and create a policy that allows public read access.
--
-- Example Policy (run this in Supabase SQL editor after enabling RLS):
-- CREATE POLICY "Public read access for active hero" 
-- ON public.hero_content FOR SELECT
-- USING (is_active = true);
