import "./globals.css";
import SmoothScrollProvider from "./smooth-scroll-provider";

export const metadata = {
  title: "Smooth Scroll App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
