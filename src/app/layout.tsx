import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { MantineProvider, ColorSchemeScript, AppShell, AppShellHeader, AppShellMain, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { Header } from "@/components/Header/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "@/components/Footer/Footer";
const pixelify_sans = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudySaga",
  description: "Learning made fun",
};

const theme = createTheme({
  autoContrast: true,
  primaryColor: "yellow",
  fontFamily: pixelify_sans.style.fontFamily,

  headings: {
    fontFamily: pixelify_sans.style.fontFamily,
  },
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <MantineProvider defaultColorScheme="light" theme={theme} withGlobalClasses>
            <AppShell header={{ height: 60 }}>
              <AppShellHeader>
                <Header></Header>
              </AppShellHeader>
              <AppShellMain>{children}</AppShellMain>
              <Footer></Footer>
            </AppShell>
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
