
import type { Metadata } from "next";
import "./globals.css";
import Windows95FrameOuter from "@/components/Windows95FrameOuter";
import SparkleCursor from "@/components/SparkleCursor";
import StarField from "@/components/StarField";


export const  metadata: Metadata = {
  metadataBase: new URL('https://jinnyseo.design'),
  title: "Jinny Eunji Seo | Portfolio",
  description: "I'm a problem-solving creative who digs beyond the surface to uncover the problem worth solving. From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.",
  openGraph: {
    title: "Jinny Eunji Seo | Portfolio",
    description: "I'm a problem-solving creative who digs beyond the surface to uncover the problem worth solving. From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.",
    url: 'https://jinnyseo.design/',
    siteName: "Jinny Seo",
    images: [
      {
        url: 'https://jinnyseo.design/social-preview.png', // <-- 🔥 this is your new thumbnail
        width: 1200,
        height: 630,
        alt: 'Portfolio preview image for Jinny Eunji Seo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jinny Eunji Seo | Portfolio",
    description: "I'm a problem-solving creative who digs beyond the surface to uncover the problem worth solving. From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.",
    images: ['https://jinnyseo.design/social-preview.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={`antialiased `}>
          <div className="gradient-backdrop" aria-hidden="true" />
          <StarField />
          <SparkleCursor />
          {children}

      </body>
    </html>
  );
}

