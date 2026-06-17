import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <main className="bg-background">
      <Navbar />

      <Hero />

      <section id="manifesto" />

      <section id="collection" />

      <section id="editorial" />

      <section id="lookbook" />

      <section id="about" />
    </main>
  );
}
