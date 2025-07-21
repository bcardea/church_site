-- ==============================================================================
-- Add Baptism Page
-- ==============================================================================
-- This script inserts the 'Baptism' page into the `pages` table.
-- To use this script, copy and paste its contents into the Supabase SQL Editor
-- and run it.
-- ==============================================================================

INSERT INTO public.pages (slug, title, subtitle, template_name, accent_color, content_blocks)
VALUES (
  'baptism',
  'Baptism',
  'I have decided. An outward expression of an inward change.',
  'TemplateA', -- Or specify another template like TemplateB or TemplateC
  '#0ea5e9',   -- A calm, sky blue color for the baptism theme
  '[
    {
      "type": "text_block",
      "title": null,
      "content": "Following the example of Jesus, we practice full immersion water baptism, which symbolizes His death and resurrection. Being baptized publicly identifies us with Jesus, signifying that we have died to our own way of living and have been raised to life in Him. If you are interested in learning more, sign up and a member of our team will reach out to you."
    },
    {
      "type": "faq",
      "title": "Do you have questions about baptism?",
      "questions": [
        {
          "question": "Who should be water baptized?",
          "answer": "Those who have personally placed faith in Jesus Christ. (Romans 10:9-10)"
        },
        {
          "question": "When should I be water baptized?",
          "answer": "As soon as you decide to follow Jesus, baptism is the next step. There is no reason to delay. (Acts 8:12)"
        },
        {
          "question": "What is full-immersion water baptism?",
          "answer": "The Greek word from which we get the word baptism is ‘baptismo’, which literally means ‘to immerse.’ All water baptisms in scripture were by full immersion. Jesus was water baptized by being fully immersed in the water and rising out of it. (Matthew 3:16, Mark 1:10, Acts 8:38-39)"
        },
        {
          "question": "Who can perform baptisms?",
          "answer": "The Great Commission applies to all believers and teaches that we are to make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. In the same way that there is no required class to be baptized, there is no requirement to baptize someone other than to be a believer and follower. Jesus himself was baptized by John, showing the authority to baptize is given to all Christians. (Matthew 3:13-17, Matthew 28:18-20)"
        }
      ]
    }
  ]'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  template_name = EXCLUDED.template_name,
  accent_color = EXCLUDED.accent_color,
  content_blocks = EXCLUDED.content_blocks;
