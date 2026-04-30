import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galal Mohamed — Front-End Developer (React & Next.js)" },
      {
        name: "description",
        content:
          "Portfolio of Galal Mohamed, a Front-End Developer building modern, fast, and elegant web experiences with React and Next.js.",
      },
      { property: "og:title", content: "Galal Mohamed — Front-End Developer" },
      {
        property: "og:description",
        content: "Modern portfolio showcasing React & Next.js projects, skills, and contact.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
