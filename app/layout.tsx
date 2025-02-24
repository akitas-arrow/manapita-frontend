import AuthProvider from "./components/AuthProvider";
import ConfigureAmplifyClientSide from "./components/ConfigureAmplifyClientSide";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ConfigureAmplifyClientSide />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
