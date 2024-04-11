import LandingBar from "@/components/LandingBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-my_bg_image h-screen w-screen bg-no-repeat bg-cover">
      <LandingBar />
      <div className="absolute right-0 bottom-0 ">
        <Image src="/logo 3.png" alt="bg-image" width={600} height={500} />
      </div>
      <div className="flex px-[60px] py-0 items-center gap-[163px] self-stretch pt-[220px]">
        <div className="flex flex-col items-start gap-[30px]">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex w-[607px] h-[335px] flex-col justify-center items-start">
              <p className="self-stretch font-[Inter] text-[26px] text-lightSecondary not-italic font-bold leading-[140%] uppercase">
                AI Skill Based Screening Solution
              </p>
              <h1 className="flex-shrink-0 self-stretch font-[Inter] text-[70px] not-italic font-extrabold leading-[normal] bg-clip-text text-primary">
                Right Talent with the Right Skill
              </h1>
              <p className="self-stretch font-[Inter] text-[18px] not-italic font-medium leading-[140%] text-placeholder">
                With Solenize, finding the best talent have never been easier.
                Our Al software helps you to assess candidates through
                assessments, providing a data driven evaluation with 5x more
                accuracy.
              </p>
            </div>
            <Link
              href="/assessment"
              className="flex px-[40px] py-[15px] justify-center items-center gap-[10px] rounded-[60px] bg-[#06F6EE] hover:bg-[#201D30] hover:text-primary transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
