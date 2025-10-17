import './globals.css';

export const metadata = {
  title: 'Interview Kits Portal',
  description: 'Choose your interview exercise',
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

