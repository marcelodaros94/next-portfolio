import React, { ReactNode } from "react";
import { Inter } from 'next/font/google'
import './globals.css'
import { ContentProvider } from './context/ContentContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marcelo Da Ros | Web Developer',
  description: 'Over 7 years as a Fullstack artist. Yes, passionate about UX, Marketing, and Leadership too. Are you ready to transform your brand?',
  keyword: 'marcelo, da ros, web, react, frontend, peru, latam, portfolio, php, javascript, developer, fullstack, freelance, full, time'
}

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContentProvider>
          {children}
        </ContentProvider>
      </body>
    </html>
  )
}
