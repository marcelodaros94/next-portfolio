import React, { ReactNode } from "react";
import { Inter } from 'next/font/google'
import './globals.css'
import { ContentProvider } from './context/ContentContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marcelo Da Ros | Web Developer & Digital Project Consultant',
  description: 'With over 7 years of experience as a Fullstack artist, I am passionate about UX, Marketing, and Leadership. I also offer digital project consulting to help you review your projects and avoid scams. Ready to transform your brand? Con más de 7 años de experiencia como Fullstack artist, me apasiona la UX, el Marketing y el Liderazgo. También ofrezco consultoría en proyectos digitales para ayudarte a revisar tus proyectos y evitar estafas. ¿Listo para transformar tu marca?',
  keyword: 'marcelo, da ros, web, react, frontend, peru, latam, portfolio, php, javascript, developer, fullstack, freelance, full-time, consulting, advisory, project review, scam prevention, desarrollador, proyectos digitales, consultoría, revisión de proyectos, prevención de estafas'
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
