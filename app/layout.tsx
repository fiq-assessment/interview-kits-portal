import './globals.css';

export const metadata = {
  title: 'FulfillmentIQ | Technical Interview Portal',
  description: 'Technical interview challenges for Frontend, Backend, and Full-Stack developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

