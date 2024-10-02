import { Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

import "aos/dist/aos.css";
import { ToastProvider } from "@/contexts/toast-context";

const sortsMillGoudi = Sorts_Mill_Goudy({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sortsMillGoudi.className}>
      <body className={`bg-white w-full font-mono`}>
        <ToastProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
