import "./globals.css";
import SmoothScrollProvider from "./smooth-scroll-provider";
import { Abhaya_Libre } from "next/font/google";

export const metadata = {
  title: "InfinitumSystem",
};

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // choose the weights you need
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={abhaya.className}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
