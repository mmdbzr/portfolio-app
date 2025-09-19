import AboutMe from "@/components/Sections/about-me/Aboutme";
import Banner from "@/components/Sections/banner/Banner";
import Experience from "@/components/Sections/experience/Experience";
import SelectedProject from "@/components/Sections/selected-projects/SelectedProject";
import Skills from "@/components/Sections/skills/Skills";

export default function Home() {
  return (
    <div className=" bg-transparent">
      <Banner />
      <AboutMe />
      <Skills />
      <Experience />
      <SelectedProject />
    </div>
  );
}
