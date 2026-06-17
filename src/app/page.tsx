import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Collection } from "@/components/sections/Collection";
import { Materials } from "@/components/sections/Materials";
import { Editorial } from "@/components/sections/Editorial";
import { Closing } from "@/components/sections/Closing";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Manifesto />
      <Collection />
      <Materials />
      <Editorial />
      <Closing />
      <Footer />
    </main>
  );
}
