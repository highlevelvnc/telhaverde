import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TrustSection } from "@/components/TrustSection";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <TrustSection />
        <Portfolio />
        <Process />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
