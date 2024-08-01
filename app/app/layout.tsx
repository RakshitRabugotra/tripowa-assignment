import { PropsWithChildren } from "react";
import { Providers } from "@/app/providers";

// UI
import { Navbar } from "@/components/navbar";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
      <Navbar />
      <section className="min-h-screen bg-default-50 pb-24">{children}</section>
    </Providers>
  );
}
