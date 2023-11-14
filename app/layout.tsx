import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://linkedin.com/in/santana-jay"),
    title: "Seek Visual Artist",
    description:
    "Passionate Designer and Software Engineer, currently at pursuing a degree in Computer Science. Focused on immersive experiences.",
    generator: "Next.js",
    applicationName: "Jay Santana Portfolio",
    keywords: [
        "Jay Santana",
        "Jay",
        "Santana",
        "Santana Jay",
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "nextjs",
        "next.js",
        "next js",
        "next developer",
        "next engineer",
        "python",
        "python developer",
        "python engineer",
        "django",
        "django developer",
        "django engineer",
        "javascript",
        "javascript developer",
        "javascript engineer",
        "typescript",
        "typescript developer",
        "typescript engineer",
        "sql",
        "sql developer",
        "sql engineer",
        "backend",
        "react",
        "reactjs",
        "react.js",
        "react js",
        "react developer",
        "react engineer",
        "react portfolio",
        "frontend developer",
        "frontend engineer",
        "backend developer",
        "backend engineer",
        "fullstack",
        "fullstack developer",
        "fullstack engineer",
        "fullstack developer portfolio",
        "fullstack engineer portfolio",
        "frontend developer portfolio",
        "frontend engineer portfolio",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "technology",
        "technology portfolio",
        "technology developer portfolio",
        "technology engineer portfolio",
        "technology developer",
        "technology engineer",
        "U.S.",
        "USA",
        "United States",
        "United States of America",
        "America",
        "American",
        "software",
        "software developer",
        "software engineer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Jay Santana - Software Developer",
        description:
      "Passionate Software Engineer, focused on immersive experiences.",
        url: "https://linkedin.com/in/santana-jay",
        siteName: "LinkedIn",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Jay Santana - Software Developer",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jay Santana - Software Developer",
        description:
      "Passionate Software Engineer focused on immersive experiences.",
        creator: "trujay",
        creatorId: "0000000001",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
