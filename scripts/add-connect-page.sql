-- ==============================================================================
-- Add Connect Page
-- ==============================================================================
-- This script inserts the 'Connect' page into the `pages` table.
-- To use this script, copy and paste its contents into the Supabase SQL Editor
-- and run it.
-- ==============================================================================

INSERT INTO public.pages (slug, title, subtitle, template_name, accent_color, content_blocks)
VALUES (
  'connect',
  'Connect',
  'Let''s Connect',
  'TemplateA', -- Or specify another template like TemplateB or TemplateC
  '#ec4899',   -- A friendly pink color for the connect theme
  '[
    {
      "type": "text_block",
      "title": "There are a few ways to connect with us:",
      "content": "<ul class=\"list-disc list-inside space-y-2\"><li>Fill out our Connect Form.</li><li>Email us at <a href=\"mailto:info@lifepointhamptonroads.org\" class=\"underline hover:text-primary\">info@lifepointhamptonroads.org</a>.</li><li>Sign up for the next Meet the Pastors!</li></ul>"
    },
    {
      "type": "cta_block",
      "title": "Ready to Connect?",
      "content": "Fill out our Connect Form and a member of our team will be in touch with you shortly.",
      "button_text": "Fill Out Form",
      "button_href": "https://lifepointhamptonroads.churchcenter.com/people/forms/415858"
    }
  ]'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  template_name = EXCLUDED.template_name,
  accent_color = EXCLUDED.accent_color,
  content_blocks = EXCLUDED.content_blocks;
