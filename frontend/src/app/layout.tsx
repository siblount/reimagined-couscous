import BottomNav from '@/app/components/BottomNav'
import LoadingSpinner from '@/app/components/LoadingSpinner';
import Header from '@/app/components/Header'
import CreatePostButton from '@/app/components/CreatePostButton'
import './globals.css'
import { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Suspense } from 'react';
import { AuthProvider } from './contexts/AuthContext';

export const metadata: Metadata = {
  title: 'Giveaholic',
  description: 'Description of your app',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Giveaholic',
  },
  icons: {
    icon: '/icon-192x192.png',
    apple: '/icon-192x192.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-orange-50 text-orange-900 overflow-hidden">
        <AuthProvider>
          <div id="splash-screen" className="fixed inset-0 z-50 flex items-center justify-center bg-orange-500 transition-opacity duration-500">
            <h1 className="text-4xl font-bold text-white">GiveApp</h1>
          </div>
          <div id="__next" className="opacity-0 transition-opacity duration-500">
            <div className="flex flex-col h-screen">
              <Header /> {/* Add the Header component here */}
              <main className="flex-grow overflow-auto p-4 pb-20">
                <Suspense fallback={<LoadingSpinner />}>
                  {children}
                </Suspense>
              </main>
              <CreatePostButton />
              <BottomNav />
            </div>
          </div>
        </AuthProvider>
        <Script src="/splash-screen.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}