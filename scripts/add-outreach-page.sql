-- ==============================================================================
-- Add Outreach Page
-- ==============================================================================
-- This script inserts the 'Outreach' page into the `pages` table.
-- To use this script, copy and paste its contents into the Supabase SQL Editor
-- and run it.
-- ==============================================================================

INSERT INTO public.pages (slug, title, subtitle, template_name, accent_color, content_blocks)
VALUES (
  'outreach',
  'Outreach',
  'You were made on purpose, for a purpose.',
  'TemplateA', -- Or specify another template like TemplateB or TemplateC
  '#14b8a6',   -- A hopeful teal color for the outreach theme
  '[
    {
      "type": "text_block",
      "title": "Serve Day",
      "content": "When it comes to meeting physical and spiritual needs, you are part of the solution. At Lifepoint Church, we are passionate about serving those in need and bringing hope to the broken. By participating in outreach, you can show the love of Jesus and make a difference in our community."
    },
    {
      "type": "image_gallery",
      "images": [
        { "src": "/images/serve-1.jpg", "alt": "Volunteers serving the community" },
        { "src": "/images/serve-2.jpg", "alt": "Community outreach event" },
        { "src": "/images/serve-3.jpg", "alt": "Team of volunteers smiling" }
      ]
    },
    {
      "type": "text_block",
      "title": "You Can Make a Difference",
      "content": "We want to make a difference in the Hampton Roads community. You can be a part of helping us spread the love of Jesus in our area. To find a SERVE event or learn more about our projects, download the SERVE app on your phone."
    },
    {
      "type": "cta_block",
      "title": "Download the SERVE App",
      "content": "Find local serve events and get involved right from your phone.",
      "button_text": "Learn More",
      "button_href": "/serve-app" 
    }
  ]'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  template_name = EXCLUDED.template_name,
  accent_color = EXCLUDED.accent_color,
  content_blocks = EXCLUDED.content_blocks;
