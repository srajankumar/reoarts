import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex justify-center flex-col">
      <h1 className="text-secondary text-6xl md:text-8xl font-extrabold">
        REO ARTS
      </h1>
      <div className="pt-3 md:w-3/4 text-white">
        Discover an exquisite collection featuring the stunning artistic
        creations by srajan, capturing the essence of creativity and passion in
        every piece.
      </div>
      <Button variant="secondary" className="rounded-full w-fit px-10 mt-5">
        Contact
      </Button>
    </div>
  );
};

export default Hero;
