import { PropsWithChildren } from "react";

// UI
import { Navbar } from "@/components/navbar";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <section className="p-4 min-h-screen">{children}</section>
    </>
  );
}
