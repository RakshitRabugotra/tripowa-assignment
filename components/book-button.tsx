import { LocalPlace } from "@/config/constants";
import { Button } from "@nextui-org/button";
import { ChevronRight } from "./icons";

const BookButton: React.FC<LocalPlace> = ({ price }) => {
  return (
    <section className="fixed bg-background/90 inset-0 top-auto inline-flex items-center px-5 py-3 font-montserrat backdrop-blur-sm">
      <div className="basis-1/3">
        <p className="text-foreground font-bold text-sm">Price</p>
        <p className="text-success text-2xl font-bold">
          {"$" + price.toFixed(2)}
        </p>
      </div>
      <Button
        className="bg-primary grow font-medium py-6 rounded-2xl text-white text-base"
        variant="shadow"
        endContent={<ChevronRight />}
      >
        Book Now
      </Button>
    </section>
  );
};
export default BookButton;
