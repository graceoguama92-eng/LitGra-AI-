import "./globals.css";

export const metadata = {
  title: "LitGra AI",
  description: "Create images, stories and videos with AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}