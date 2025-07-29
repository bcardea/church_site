-- =============================================================================
-- Update Plan Your Visit CTA on I'm New page
-- =============================================================================
-- This script updates the hero CTA link for the page with slug 'im-new'.
-- To use this script, copy and paste its contents into the Supabase SQL Editor
-- and run it.
-- =============================================================================

UPDATE public.pages
SET cta_href = 'https://lifepointhamptonroads.churchcenter.com/people/forms/498266'
WHERE slug = 'im-new';
