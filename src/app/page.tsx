import Hero from "@/components/Hero";
import Image from "next/image";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/Contact";
import About from "@/components/About";



export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
