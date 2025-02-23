import { Header } from "@/app/components/Header";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="container md mx-auto px-4 py-8 min-h-[calc(100dvh-80px)]">
        {children}
      </div>
    </>
  );
}
