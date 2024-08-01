import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-between gap-4 min-h-screen pt-8 md:py-10"
      style={{
        background: `url('/images/bg.webp')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mt-14">
        <h1 className={title({ class: "text-white font-rab text-8xl" })}>
          Aspen&nbsp;
        </h1>
      </div>
      <div className="flex flex-col max-w-lg text-left p-10 w-full font-montserrat">
        <h2 className={subtitle({ class: "mt-4 text-xl text-white/80" })}>
          Plan your
        </h2>

        <h1 className={title({ class: "text-white font-medium mb-1" })}>
          Vacation
        </h1>
        <h1 className={title({ class: "text-white font-medium mb-2" })}>
          Luxurious
        </h1>

        <Button
          variant="shadow"
          color="primary"
          className="mt-4"
          size="lg"
          href="/app"
          as={Link}
        >
          Explore
        </Button>
      </div>
    </section>
  );
}
