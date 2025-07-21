-- ==============================================================================
-- Add Join the Team Page
-- ==============================================================================
-- This script inserts the 'Join the Team' page into the `pages` table.
-- To use this script, copy and paste its contents into the Supabase SQL Editor
-- and run it.
-- ==============================================================================

INSERT INTO public.pages (slug, title, subtitle, template_name, accent_color, content_blocks)
VALUES (
  'join-the-team',
  'Join the Team',
  'Discover your purpose.',
  'TemplateA', -- Or specify another template like TemplateB or TemplateC
  '#8b5cf6',   -- An inspiring violet color for the team theme
  '[
    {
      "type": "text_block",
      "title": null,
      "content": "If you are looking to get connected or figure out your next step, Join the Team is for you! This is a time for people interested in joining the Dream Team to have their questions answered, discover more about themselves, and take a next step in pursuit of their God-given purpose. To sign up for our next Join the Team stop by the Next Steps Environment on Sunday."
    },
    {
      "type": "text_block",
      "title": "Dream Team Opportunities",
      "content": "<ul class=\"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside\"><li>Set Up</li><li>Parking</li><li>Greeters</li><li>Ushers</li><li>Security</li><li>First Time Guest Experience</li><li>Growth Track</li><li>Baptism</li><li>Kidspoint (Childcare)</li><li>Youth</li><li>Tear Down</li></ul>"
    },
    {
      "type": "cta_block",
      "title": "Ready to Join the Dream Team?",
      "content": "Sign up today and a member of our team will be in touch to help you find your place.",
      "button_text": "Register Now",
      "button_href": "https://lifepointhamptonroads.churchcenter.com/people/forms/441937"
    }
  ]'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  template_name = EXCLUDED.template_name,
  accent_color = EXCLUDED.accent_color,
  content_blocks = EXCLUDED.content_blocks;
