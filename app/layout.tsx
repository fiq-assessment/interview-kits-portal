import './globals.css';
import AuthProvider from './components/AuthProvider';

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
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

