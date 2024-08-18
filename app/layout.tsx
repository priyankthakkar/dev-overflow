import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";
import "./globals.css";
// eslint-disable-next-line camelcase
import { ThemeProvider } from "@/context/ThemeProvider";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description: "Ask and answer programming related questions",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          formActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <ThemeProvider>
        <html lang="en">
          <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <header>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            <main>{children}</main>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
