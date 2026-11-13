import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import WhatsAppChatBot from '@/components/WhatsAppChatBot';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#14130F' },
  ],
};

export const metadata: Metadata = {
  title: 'Praveen Kumar S. — Senior Frontend Engineer & Web Architect',
  description:
    'Senior Frontend Engineer & Web Architect portfolio. Systems engineered for precision, speed, and human scale.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-verm selection:text-paper">
        {children}
        <WhatsAppChatBot />
      </body>
    </html>
  );
}

