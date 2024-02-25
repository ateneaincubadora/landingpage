import AboutUs from "@/components/sections/about-us";
import Incubated from "@/components/sections/incubated";
import Mentors from "@/components/sections/mentors";
import Contact from "@/components/sections/contact";
import Ehance from "@/components/sections/ehance";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Ehance />
      <Incubated />
      <Mentors />
      <Contact />
    </main>
  );
}
