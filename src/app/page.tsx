import DownloadResumeButton from "@/components/DownloadResumeButton";
import AnimatedText from "../components/shared/AnimatedText";

export default function Home() {
  return (
    <div className="">
      <div>
        <div className="mt-[100px] px-4 md:px-40">
          <h1 className="text-6xl md:text-7xl font-Anton">
            <span className="text-primary">FRONTEND</span>
            <br />
            <span className="text-secondary ml-4">DEVELOPER</span>
          </h1>
          <h2 className="tetx-lg text-gray-700 mt-6 max-w-[550px]">
            Hi! I’m <span className="text-secondary">Mohammad Bozorgmehr</span>.
            A dedicated Frontend Developer with 2+ years of experience creating
            fast, scalable, and user-friendly web applications.
          </h2>
          <DownloadResumeButton />
        </div>
        <div></div>
      </div>
    </div>
  );
}
