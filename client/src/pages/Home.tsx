import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Authority } from "@/components/sections/Authority";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Authority />
        <Process />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
