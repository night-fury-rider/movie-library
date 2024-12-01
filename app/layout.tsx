import { ibmFont } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Movie Library",
  description: "Modern web app to explore a curated movie collection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmFont.className}`}>{children}</body>
    </html>
  );
}
