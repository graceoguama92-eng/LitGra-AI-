import "./globals.css";

export const metadata = {
  title: "LitGra AI",
  description: "AI creative studio for images, video and voice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}