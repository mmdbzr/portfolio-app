import DownloadResumeButton from "@/components/DownloadResumeButton";
import Aboutme from "@/components/Sections/Aboutme";
import Banner from "@/components/Sections/Banner";
import Skills from "@/components/Sections/Skills";

export default function Home() {
  return (
    <div className="pt-[100px] md:pt-[200px]">
      <Banner />
      <Aboutme />
      <Skills />
    </div>
  );
}
