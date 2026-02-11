import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Productivity from "@/components/Productivity";
import About from "@/components/About";
import Features from "@/components/Features";
import WorkTogether from "@/components/WorkTogether";
import GitHubSync from "@/components/GitHubSync";
import MetaBrain from "@/components/MetaBrain";
import CTA from "@/components/CTA";
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
        {/* <GitHubSync /> */}
        {/* <MetaBrain /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
