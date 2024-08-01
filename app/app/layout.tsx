import { PropsWithChildren } from "react";

// UI
import { Navbar } from "@/components/navbar";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pb-32">{children}</section>
    </>
  );
}
