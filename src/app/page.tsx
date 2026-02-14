import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Productivity from "@/components/Productivity";
import About from "@/components/About";
import Features from "@/components/Features";
import WorkTogether from "@/components/WorkTogether";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import GitHubSync from "@/components/GitHubSync";
import MetaBrain from "@/components/MetaBrain";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <Productivity /> */}
        <About />
        {/* <Features /> */}
        {/* <WorkTogether /> */}
        <Approach />
        <Services />
        {/* <Impact /> */}
        <Projects />
        <Testimonials />
       
        {/* <GitHubSync /> */}
        {/* <MetaBrain /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
