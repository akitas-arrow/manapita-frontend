import AuthProvider from "./components/AuthProvider";
import ConfigureAmplifyClientSide from "./components/ConfigureAmplifyClientSide";
import StoreProvider from "./components/StoreProvider";
import "@/app/globals.css";
import { Kosugi_Maru, Zen_Maru_Gothic } from "next/font/google";

const kosugiMaru = Kosugi_Maru({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={kosugiMaru.className}>
      <body>
        <ConfigureAmplifyClientSide />
        <AuthProvider>
          <StoreProvider>{children}</StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
