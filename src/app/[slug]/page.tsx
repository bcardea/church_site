import { createClient } from '@/lib/supabase/server';
import { TemplateA } from '@/components/templates/template-a';
import { TemplateB } from '@/components/templates/template-b';
import { TemplateC } from '@/components/templates/template-c';
import { notFound } from 'next/navigation';

import { FaqBlock } from '@/components/content-blocks/faq-block';
import { CtaBlock } from '@/components/content-blocks/cta-block';
import { TextBlock } from '@/components/content-blocks/text-block';
import { BeliefList } from '@/components/content-blocks/belief-list';
import { QuoteBlock } from '@/components/content-blocks/quote-block';
import { ProfileList } from '@/components/content-blocks/profile-list';
import { DetailList } from '@/components/content-blocks/detail-list';
import { LogoBlock } from '@/components/content-blocks/logo-block';
import { NumberedListBlock } from '@/components/content-blocks/numbered-list-block';
import { ImageGalleryBlock } from '@/components/content-blocks/image-gallery-block';

// Define types for our content blocks
interface FaqBlockData {
  type: 'faq';
  title: string;
  questions: { question: string; answer: string }[];
}

interface CtaBlockData {
  type: 'cta_block';
  title: string;
  content: string;
  button_text: string;
  button_href: string;
}

interface TextBlockData {
  type: 'text_block';
  title?: string | null;
  content: string;
}

interface Belief {
  belief: string;
  description: string;
  scriptures: string;
}

interface BeliefListData {
  type: 'belief_list';
  title: string;
  beliefs: Belief[];
}

interface QuoteBlockData {
  type: 'quote_block';
  content: string;
  attribution?: string | null;
}

interface Profile {
  name: string;
  credentials: string[];
}

interface ProfileListData {
  type: 'profile_list';
  title: string;
  profiles: Profile[];
}

interface DetailItem {
  term: string;
  description: string;
}

interface DetailListData {
  type: 'detail_list';
  title: string;
  items: DetailItem[];
}

interface LogoBlockData {
  type: 'logo_block';
  imageUrl: string;
  altText: string;
}

interface NumberedListData {
  type: 'numbered_list';
  title: string;
  items: string[];
}

interface ImageGalleryBlockData {
  type: 'image_gallery';
  images: { src: string; alt: string }[];
}

type ContentBlock = FaqBlockData | CtaBlockData | TextBlockData | BeliefListData | QuoteBlockData | ProfileListData | DetailListData | LogoBlockData | NumberedListData | ImageGalleryBlockData;

// Define the type for our page data
interface PageData {
  id: number;
  slug: string;
  template_name: string;
  accent_color?: string | null; // Add accent_color for page-specific theming
  title: string;
  subtitle?: string | null;
  description?: string | null;
  hero_image_url?: string | null;
  cta_text?: string | null;
  cta_href?: string | null;
  sub_nav_items?: { label: string; href: string }[] | null;
  content_blocks?: ContentBlock[] | null;
}

async function getPageData(slug: string): Promise<PageData | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    return null;
  }
  return data;
}

// A helper function to render the correct component for each block
function renderContentBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'faq':
      return <FaqBlock key={index} {...block} />;
    case 'cta_block':
      return <CtaBlock key={index} {...block} />;
    case 'text_block':
      return <TextBlock key={index} {...block} />;
    case 'belief_list':
      return <BeliefList key={index} {...block} />;
    case 'quote_block':
      return <QuoteBlock key={index} {...block} />;
    case 'profile_list':
      return <ProfileList key={index} {...block} />;
    case 'detail_list':
      return <DetailList key={index} {...block} />;
    case 'logo_block':
      return <LogoBlock key={index} {...block} />;
    case 'numbered_list':
      return <NumberedListBlock key={index} {...block} />;
    case 'image_gallery':
      return <ImageGalleryBlock key={index} {...block as ImageGalleryBlockData} />;
    default:
      return null;
  }
}



export async function generateStaticParams() {
  const supabase = createClient();
  const { data: pages } = await supabase.from('pages').select('slug');
  return pages?.map(({ slug }) => ({ slug })) || [];
}

// Component to dynamically select and render the correct template
function PageTemplate({ data }: { data: PageData }) {
  const { 
    template_name, 
    content_blocks, 
    accent_color, 
    sub_nav_items, 
    hero_image_url,
    title,
    subtitle,
    description,
    cta_text,
    cta_href
  } = data;

  const pageStyle = accent_color ? { '--page-accent-color': accent_color } as React.CSSProperties : {};

  const PageContent = () => (
    <>
      {content_blocks && content_blocks.map((block, index) => renderContentBlock(block, index))}
    </>
  );

  const renderTemplate = () => {
    const templateProps = {
      title,
      subtitle: subtitle || undefined,
      description: description || undefined,
      ctaText: cta_text || undefined,
      ctaHref: cta_href || undefined,
      heroImage: hero_image_url || undefined,
      subNavItems: sub_nav_items || [],
      children: <PageContent />,
    };

    switch (template_name) {
      case 'TemplateA':
        return <TemplateA {...templateProps} />;
      case 'TemplateB':
        return <TemplateB {...templateProps} />;
      case 'TemplateC':
      default:
        return <TemplateC {...templateProps} />;
    }
  };

  return (
    <div style={pageStyle}>
      {renderTemplate()}
    </div>
  );
}

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  if (params.slug === 'favicon.ico') {
    return notFound();
  }

  const pageData = await getPageData(params.slug);

  if (!pageData) {
    return notFound();
  }

  return <PageTemplate data={pageData} />;
}

export const revalidate = 60; // Revalidate every 60 seconds
