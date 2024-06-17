import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ModalProvider } from "@/providers/modal-provider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Telefonopiu Admin",
  description: "admin panel to manage telefonopiu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <ModalProvider />
          <Toaster />
          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
