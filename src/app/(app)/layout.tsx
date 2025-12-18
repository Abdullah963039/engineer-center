import { Footer } from "@/features/landing/components/footer";
import { Header } from "@/features/landing/components/header";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
