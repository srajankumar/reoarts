import About from "@/components/About";
import { Arts } from "@/components/Arts";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="max-w-6xl">
      <Hero />
      {/* <About /> */}
      <Arts />
    </main>
  );
}
