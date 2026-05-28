import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TrustSection } from "@/components/TrustSection";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { RoofDivider } from "@/components/ui/RoofDivider";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <TrustSection />
        <Portfolio />
        <Process />
        <RoofDivider fill="#08200f" />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
