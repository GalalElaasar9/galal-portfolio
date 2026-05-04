import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { I18nProvider } from "@/lib/i18n";

export default function Index() {
  return (
    <I18nProvider>
      <main className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Skills />
        <Contact />
        <Footer />
        <Toaster />
      </main>
    </I18nProvider>
  );
}
