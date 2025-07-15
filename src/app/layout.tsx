import './globals.css';

import FlyonuiScript from '../components/FlyonuiScript';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="shadcn" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI Video Generator - Create Stunning Videos with AI</title>
      </head>
      <body className="min-h-screen">
        {children}
      </body>
      <FlyonuiScript />
    </html>
  );
}