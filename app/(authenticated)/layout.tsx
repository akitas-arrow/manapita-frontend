import { Header } from "@/app/components/Header";
import { Kosugi_Maru } from "next/font/google";

const kosugiMaru = Kosugi_Maru({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div
        className={`container md mx-auto px-4 py-8 min-h-[calc(100dvh-80px)] ${kosugiMaru.className}`}
      >
        {children}
      </div>
    </>
  );
}
