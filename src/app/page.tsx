import DownloadResumeButton from "@/components/DownloadResumeButton";
import AboutMe from "@/components/Sections/about-me/Aboutme";
import Banner from "@/components/Sections/banner/Banner";
import Skills from "@/components/Sections/Skills";

export default function Home() {
  return (
    <div className=" bg-transparent">
      <Banner />
      <AboutMe />
      <Skills />
    </div>
  );
}
