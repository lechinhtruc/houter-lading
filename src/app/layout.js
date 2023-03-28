import "./globals.css";

export const metadata = {
  title: "Houter - House Hunter UI Design",
  description: "House Hunter UI Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
