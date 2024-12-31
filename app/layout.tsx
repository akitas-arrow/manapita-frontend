import AuthProvider from "./components/AuthProvider";
import ConfigureAmplifyClientSide from "./components/ConfigureAmplifyClientSide";
import StoreProvider from "./components/StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ConfigureAmplifyClientSide />
        <AuthProvider>
          <StoreProvider>{children}</StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
