import "./globals.css";

export const metadata = {
  title: "Resep Gerak — Movement is Medicine",
  description:
    "Portal edukasi gerak pertama di Indonesia yang dikembangkan oleh sports medicine expert. Resep Gerak menyediakan panduan gerak berbasis bukti untuk berbagai kondisi medis dan olahraga.",
  keywords: [
    "sports medicine",
    "movement",
    "exercise",
    "rehabilitation",
    "Indonesia",
    "resep gerak",
  ],
  openGraph: {
    title: "Resep Gerak — Movement is Medicine",
    description:
      "Portal edukasi gerak pertama di Indonesia. Panduan gerak berbasis bukti untuk kondisi medis dan olahraga.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full antialiased">
      <head>
        {/* Google Fonts — loaded via link tags to avoid Tailwind v4 @import ordering issues */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lexend:wght@400;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
