-- ==============================================================================
-- Add Youth Page
-- ==============================================================================
-- This script inserts the 'Youth' page into the `pages` table.
-- To use this script, copy and paste its contents into the Supabase SQL Editor
-- and run it.
-- ==============================================================================

INSERT INTO public.pages (slug, title, template_name, accent_color, content_blocks)
VALUES (
  'youth',
  'Youth',
  'TemplateA', -- Or specify another template like TemplateB or TemplateC
  '#f59e0b',   -- A vibrant amber/orange color for the youth theme
  '[
    {
      "type": "text_block",
      "title": null,
      "content": "Youth are the now generation. Lifepoint Youth exists so that middle and high schoolers would know God, find freedom, discover purpose, and make a difference within a life-giving community. Have any questions? Feel free to reach out to us and a member of our team will be in touch."
    },
    {
      "type": "text_block",
      "title": "Youth Group",
      "content": "Join other middle and high school students every Thursday evening at 7pm for Youth Group! Youth Group is a gathering of students that connect for powerful worship, a life-giving message, and community. Meet new friends and grow your faith at this week''s Youth Group. There’s no need to pre-register, just show up and be a part of this incredible night!"
    },
    {
      "type": "cta_block",
      "title": "Register Your Student",
      "content": "Get your student connected with our Youth community by registering them today. This helps us stay in touch and keep you updated on everything happening at Lifepoint Youth.",
      "button_text": "Register Now",
      "button_href": "https://lifepointhamptonroads.churchcenter.com/people/forms/799405"
    }
  ]'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  template_name = EXCLUDED.template_name,
  accent_color = EXCLUDED.accent_color,
  content_blocks = EXCLUDED.content_blocks;
