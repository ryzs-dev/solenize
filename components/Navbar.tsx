import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[24px] py-[30px] relative bg-[#201d30] w-full min-w-[1440px] min-h-[104px]">
      <div className="inline-flex flex-col items-center justify-around gap-[10px] flex-[0_0_auto] h-auto">
        <Link href="/">
          <Image
            src="Solenize_Logo.svg"
            alt="solenize-logo"
            width="270"
            height="41"
            className="flex items-center"
          />
        </Link>
      </div>
      <div className="flex w-[820.71px] items-center justify-between relative">
        <div className="w-[379.28px] items-start gap-[17px] flex relative">
          <div className="items-center justify-center gap-[10px] p-[10px] flex-1 grow flex relative">
            <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#06f6eebf] text-[20px] text-center tracking-[0] leading-[normal]">
              Assessments
            </div>
          </div>
          <div className="items-center justify-center gap-[10px] p-[10px] flex-1 grow flex relative">
            <a
              className="relative w-[114px] mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] text-center tracking-[0] leading-[normal]"
              href="https://www.figma.com/proto/Te4F2qVzQusICyjWil2hgp/Web3-Canditech?page-id=8%3A94&amp;type=design&amp;node-id=208-1127&amp;viewport=-569%2C2038%2C0.61&amp;t=eTGqRwkuiXQkxzTL-1&amp;scaling=min-zoom&amp;mode=design"
              rel="noopener noreferrer"
              target="_blank"
            >
              Candidates
            </a>
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-[29px] relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-[10px] px-[10px] py-[8px] relative flex-[0_0_auto] bg-light-secondary rounded-[6px]">
            <div className="relative w-[180px] h-[20px] mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-primary-button text-[16px] text-center tracking-[0] leading-[normal]">
              Upgrade to Premium
            </div>
          </div>
          <div>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
