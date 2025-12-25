import type { Metadata } from "next";
import { Merriweather_Sans, Tomorrow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GridContainer from "@/components/ui/grid-container";
import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer/footer";
import { seo } from "@/mock-data/seo";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";


const heading = Tomorrow({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Merriweather_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
});
export const metadata: Metadata = seo;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body className={`${heading.variable} ${body.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <GridContainer className="justify-center items-start gap-y-2 font-heading grid-rows-[auto_1fr_auto]">
            
              <Analytics />
              <SpeedInsights />

              <div className="col-span-12">
                <Navbar />
              </div>
              <div className="w-full col-span-12 min-h-0">{children}</div>
              <Footer />
            </GridContainer>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
