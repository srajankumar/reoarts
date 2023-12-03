import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="min-h-screen md:p-5 p-3 flex justify-center flex-col">
      <h1 className="text-secondary text-6xl md:text-8xl font-extrabold">
        REO ARTS
      </h1>
      <div className="pt-3 md:w-3/4 text-white">
        Explore an exquisite collection featuring stunning artistic creations,
        capturing the essence of creativity and passion in every piece.
      </div>
      <Link href="#contact">
        <Button
          variant="secondary"
          className="rounded-full w-fit px-10 font-bold mt-5"
        >
          Contact
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
