import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galal Mohamed — Front-End Developer (React & Next.js)" },
      {
        name: "description",
        content:
          "Portfolio of Galal Mohamed, a Front-End Developer building modern, fast, and elegant web experiences with React and Next.js. Available in English & Arabic.",
      },
      { property: "og:title", content: "Galal Mohamed — Front-End Developer" },
      {
        property: "og:description",
        content: "Modern bilingual portfolio showcasing React & Next.js projects, services, and CV.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
