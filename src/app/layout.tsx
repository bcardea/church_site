import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Lifepoint Hampton Roads',
  description: 'Lifepoint Hampton Roads - A place to grow in faith and community',
  metadataBase: new URL('https://lifepointhr.com'),
  openGraph: {
    title: 'Lifepoint Hampton Roads',
    description: 'Lifepoint Hampton Roads - A place to grow in faith and community',
    url: 'https://lifepointhr.com',
    siteName: 'Lifepoint Hampton Roads',
    images: [
      {
        url: 'https://qgpyljnhjvoaatxsyygy.supabase.co/storage/v1/object/public/images/LIFEPOINTPREVIEW.jpg',
        width: 1200,
        height: 630,
        alt: 'Lifepoint Hampton Roads - 600 Jarman Rd, Chesapeake, VA - Sundays at 10AM',
      },
      {
        url: 'https://qgpyljnhjvoaatxsyygy.supabase.co/storage/v1/object/public/images/Lifepoint%20Preview%20(1080%20x%201080%20px).jpg',
        width: 1080,
        height: 1080,
        alt: 'Lifepoint Hampton Roads',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifepoint Hampton Roads',
    description: 'Lifepoint Hampton Roads - A place to grow in faith and community',
    images: ['https://qgpyljnhjvoaatxsyygy.supabase.co/storage/v1/object/public/images/LIFEPOINTPREVIEW.jpg'],
  },
  icons: {
    icon: 'https://qgpyljnhjvoaatxsyygy.supabase.co/storage/v1/object/public/images/lifepoint%20favicon.png',
    apple: 'https://qgpyljnhjvoaatxsyygy.supabase.co/storage/v1/object/public/images/lifepoint%20ios%20icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
