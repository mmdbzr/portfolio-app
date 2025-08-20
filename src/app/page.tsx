import DownloadResumeButton from "@/components/DownloadResumeButton";
import Aboutme from "@/components/Sections/Aboutme";
import Banner from "@/components/Sections/Banner";

export default function Home() {
  return (
    <div className="pt-[100px] md:pt-[200px]">
      <Banner />
      <Aboutme />
    </div>
  );
}
