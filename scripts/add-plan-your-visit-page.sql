-- ==============================================================================
-- Add Plan Your Visit Page
-- ==============================================================================
-- This script inserts the 'Plan Your Visit' page into the `pages` table.
-- To use this script, copy and paste its contents into the Supabase SQL Editor
-- and run it.
-- ==============================================================================

INSERT INTO public.pages (slug, title, subtitle, template_name, accent_color, content_blocks)
VALUES (
  'plan-your-visit',
  'Plan Your Visit',
  'We can''t wait to meet you.',
  'TemplateA', -- Or specify another template like TemplateB or TemplateC
  '#22c55e',   -- A welcoming green color for this page
  '[
    {
      "type": "text_block",
      "title": "Join Us This Sunday",
      "content": "Our church meets every Sunday at 10am at 600 Jarman Rd. Chesapeake, Virginia. We would love for you to be our guest."
    },
    {
      "type": "cta_block",
      "title": "General Registration",
      "content": "Let us know you''re coming! Fill out our general registration form to help us prepare for your visit.",
      "button_text": "Register Now",
      "button_href": "https://lifepointhamptonroads.churchcenter.com/people/forms/498266"
    },
    {
      "type": "cta_block",
      "title": "Register Your Kids for Kidspoint",
      "content": "Have kids? Pre-register them for our Kidspoint ministry to make your Sunday morning check-in smooth and easy.",
      "button_text": "Register Kids",
      "button_href": "https://lifepoint-church-hampton-roads-412972.churchcenter.com/people/forms/482940"
    }
  ]'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  template_name = EXCLUDED.template_name,
  accent_color = EXCLUDED.accent_color,
  content_blocks = EXCLUDED.content_blocks;
