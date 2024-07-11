import Image from "next/image";
import { SparklesCore } from "./components/ui/sparkles";
import { FlipWords } from "./components/ui/flip-words";
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <div className="relative bg-[#05171b] min-h-screen">
      <SparklesCore
        className="absolute inset-0 z-0"
        background="#05171b"
        particleColor="#0d3740"
        particleDensity={120}
        speed={4}
        minSize={1}
        maxSize={3}
      />
      <div className="flex flex-col min-h-screen md:flex-row items-center md:items-center md:p-28  gap-8 text-2xl z-10 relative">
        <div className="flex items-center justify-center md:mt-0 mt-16 md:w-[300px] w-[200px] md:h-[300px] h-[200px]">
          <Image
            className="rounded-full"
            src={"/images/my-photo.png"}
            alt="my-photo"
            height={300}
            width={300}
          />
        </div>
        <div className="flex flex-col text-2xl items-center font-semibold md:items-start gap-3 text-neutral-200">
          <div className="flex items-center text-md md:text-md text-neutral-400">
            HI, I'am ILHAM
          </div>
          <div className="flex text-[#2a606c] items-center text-sm md:text-md ">
            Frontend Developer
          </div>
          <div className="flex flex-row bg-[#134f5c] bg-opacity-30 p-4 rounded-md cursor-pointer justify-center gap-4 text-white">
            <a
              href="https://www.instagram.com/_ilhammdd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/ollhamm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/ilham.kusmayadi.5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/ilham-kusmayadi-0744a727a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="text-xl md:text-4xl md:text-start text-center md:mt-8 mt-16 mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Build
            <FlipWords words={words} /> <br />
            websites with JavaScript
          </div>
        </div>
      </div>
    </div>
  );
}
