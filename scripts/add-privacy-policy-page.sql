-- ==============================================================================
-- Add Privacy Policy Page
-- ==============================================================================
-- This script inserts a standard 'Privacy Policy' page into the `pages` table.
-- To use this script, copy and paste its contents into the Supabase SQL Editor
-- and run it.
-- ==============================================================================

INSERT INTO public.pages (slug, title, subtitle, template_name, accent_color, content_blocks)
VALUES (
  'privacy-policy',
  'Privacy Policy',
  'Your privacy is important to us.',
  'TemplateC', -- Using a simple template for this content
  '#64748b',   -- A neutral slate color
  '[
    {
      "type": "text_block",
      "title": "Introduction",
      "content": "Welcome to Lifepoint Church Hampton Roads. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."
    },
    {
      "type": "text_block",
      "title": "Information Collection",
      "content": "We may collect personal information from you such as your name, email address, and phone number when you fill out a form, register for an event, or otherwise interact with our site. We also collect non-personal information, such as browser type and operating system, to improve our website."
    },
    {
      "type": "text_block",
      "title": "Use of Your Information",
      "content": "We use the information we collect to operate our church, including to communicate with you, to provide you with services or information you have requested, and to improve our website and services. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information."
    },
    {
      "type": "text_block",
      "title": "Security of Your Information",
      "content": "We use a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential."
    },
    {
      "type": "text_block",
      "title": "Contact Us",
      "content": "If you have any questions about this Privacy Policy, please contact us at <a href=\"mailto:info@lifepointhamptonroads.org\" class=\"underline hover:text-primary\">info@lifepointhamptonroads.org</a>."
    }
  ]'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  template_name = EXCLUDED.template_name,
  accent_color = EXCLUDED.accent_color,
  content_blocks = EXCLUDED.content_blocks;
