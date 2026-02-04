import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "成果で測る、AI駆動型システム開発 | PrimaMateria",
  description:
    "価値創出を工数ではなく成果で測る開発へ。生成AIを活用した次世代のシステム開発。React/Next.js × Python × C#で高品質な成果物を最適な期間で提供します。",
  openGraph: {
    title: "成果で測る、AI駆動型システム開発 | PrimaMateria",
    description:
      "価値創出を工数ではなく成果で測る開発へ。生成AIを活用した次世代のシステム開発。React/Next.js × Python × C#で高品質な成果物を最適な期間で提供します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
