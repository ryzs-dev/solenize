import React from "react";

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
  skill6: string;
  jobTitle: string;
  difficulty: string;
  duration: number;
  usage: number;
}

export const DCard = ({
  skill6 = "Web 3",
  skill4 = "Web 3",
  usage = 2000,
  difficulty = "3/5",
  skill3 = "Web 3",
  skill2 = "Web 3",
  jobTitle = "Blockchain Developer Assessment",
  duration = 45,
  skill1 = "Web 3",
  skill5 = "Web 3",
}: Props) => {
  return (
    <div
      className={`flex flex-col w-[330px] items-center gap-[15px] p-[20px] relative bg-primary-button rounded-[10px] border border-solid border-primary shadow-[0px_4px_24px_#0b07341a] `}
    >
      <div className="flex flex-col w-[150px] h-[150px] items-center justify-center gap-[10px] relative">
        <div className="relative w-[150px] h-[150px] bg-[url(/image.png)] bg-cover bg-[50%_50%]" />
      </div>
      <div className="flex items-center justify-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative flex-1 mt-[-1.00px] font-h3-bold font-[number:var(--h3-bold-font-weight)] text-primary text-[length:var(--h3-bold-font-size)] text-center tracking-[var(--h3-bold-letter-spacing)] leading-[var(--h3-bold-line-height)] [font-style:var(--h3-bold-font-style)]">
          {jobTitle}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[6px] px-[5px] py-[20px] relative self-stretch w-full flex-[0_0_auto] rounded-[10px] border-[0.4px] border-solid border-[#ffffff80]">
        <div className="flex w-[280px] items-center justify-center grow relative flex-1">
          <div className="h-[19.5px] mt-[-0.83px] font-body-semibold font-[number:var(--body-semibold-font-weight)] text-[#07f5ec] text-[length:var(--body-semibold-font-size)] text-center tracking-[var(--body-semibold-letter-spacing)] leading-[var(--body-semibold-line-height)] whitespace-nowrap relative flex-1 [font-style:var(--body-semibold-font-style)]">
            Diffuculty
          </div>
          <div className="relative flex-1 self-stretch mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-primary text-[length:var(--body-regular-font-size)] text-center tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] whitespace-nowrap [font-style:var(--body-regular-font-style)]">
            {difficulty}
          </div>
        </div>
        <div className="flex w-[280px] items-center justify-center grow relative flex-1">
          <div className="h-[19.5px] mt-[-0.83px] font-body-semibold font-[number:var(--body-semibold-font-weight)] text-primary text-[length:var(--body-semibold-font-size)] text-center tracking-[var(--body-semibold-letter-spacing)] leading-[var(--body-semibold-line-height)] whitespace-nowrap relative flex-1 [font-style:var(--body-semibold-font-style)]">
            Duration
          </div>
          <div className="relative flex-1 self-stretch mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-primary text-[length:var(--body-regular-font-size)] text-center tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] whitespace-nowrap [font-style:var(--body-regular-font-style)]">
            {duration}
          </div>
        </div>
        <div className="flex w-[280px] items-center justify-center grow relative flex-1">
          <div className="h-[19.5px] mt-[-0.83px] font-body-semibold font-[number:var(--body-semibold-font-weight)] text-primary text-[length:var(--body-semibold-font-size)] text-center tracking-[var(--body-semibold-letter-spacing)] leading-[var(--body-semibold-line-height)] whitespace-nowrap relative flex-1 [font-style:var(--body-semibold-font-style)]">
            Usage
          </div>
          <div className="relative flex-1 self-stretch mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-primary text-[length:var(--body-regular-font-size)] text-center tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] whitespace-nowrap [font-style:var(--body-regular-font-style)]">
            {usage}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[6px] p-[20px] relative self-stretch w-full flex-[0_0_auto] rounded-[10px] border-[0.4px] border-solid border-[#ffffff80]">
        <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-base-bold font-[number:var(--base-bold-font-weight)] text-primary text-[length:var(--base-bold-font-size)] tracking-[var(--base-bold-letter-spacing)] leading-[var(--base-bold-line-height)] whitespace-nowrap [font-style:var(--base-bold-font-style)]">
            Skills Tested
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-[#ecffc5] rounded-[10px]">
              <div className="relative w-fit mt-[-1.00px] font-subtle-regular font-[number:var(--subtle-regular-font-weight)] text-primary-button text-[length:var(--subtle-regular-font-size)] tracking-[var(--subtle-regular-letter-spacing)] leading-[var(--subtle-regular-line-height)] whitespace-nowrap [font-style:var(--subtle-regular-font-style)]">
                {skill1}
              </div>
            </div>
            <div className="inline-flex items-center gap-[10px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-[#ecffc5] rounded-[10px]">
              <div className="relative w-fit mt-[-1.00px] font-subtle-regular font-[number:var(--subtle-regular-font-weight)] text-primary-button text-[length:var(--subtle-regular-font-size)] tracking-[var(--subtle-regular-letter-spacing)] leading-[var(--subtle-regular-line-height)] whitespace-nowrap [font-style:var(--subtle-regular-font-style)]">
                {skill2}
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-[#ecffc5] rounded-[10px]">
              <div className="relative w-fit mt-[-1.00px] font-subtle-regular font-[number:var(--subtle-regular-font-weight)] text-primary-button text-[length:var(--subtle-regular-font-size)] tracking-[var(--subtle-regular-letter-spacing)] leading-[var(--subtle-regular-line-height)] whitespace-nowrap [font-style:var(--subtle-regular-font-style)]">
                {skill3}
              </div>
            </div>
            <div className="inline-flex items-center gap-[10px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-[#ecffc5] rounded-[10px]">
              <div className="relative w-fit mt-[-1.00px] font-subtle-regular font-[number:var(--subtle-regular-font-weight)] text-primary-button text-[length:var(--subtle-regular-font-size)] tracking-[var(--subtle-regular-letter-spacing)] leading-[var(--subtle-regular-line-height)] whitespace-nowrap [font-style:var(--subtle-regular-font-style)]">
                {skill4}
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-[#ecffc5] rounded-[10px]">
              <div className="relative w-fit mt-[-1.00px] font-subtle-regular font-[number:var(--subtle-regular-font-weight)] text-primary-button text-[length:var(--subtle-regular-font-size)] tracking-[var(--subtle-regular-letter-spacing)] leading-[var(--subtle-regular-line-height)] whitespace-nowrap [font-style:var(--subtle-regular-font-style)]">
                {skill5}
              </div>
            </div>
            <div className="inline-flex items-center gap-[10px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-[#ecffc5] rounded-[10px]">
              <div className="relative w-fit mt-[-1.00px] font-subtle-regular font-[number:var(--subtle-regular-font-weight)] text-primary-button text-[length:var(--subtle-regular-font-size)] tracking-[var(--subtle-regular-letter-spacing)] leading-[var(--subtle-regular-line-height)] whitespace-nowrap [font-style:var(--subtle-regular-font-style)]">
                {skill6}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-subtle-regular font-[number:var(--subtle-regular-font-weight)] text-light-secondary text-[length:var(--subtle-regular-font-size)] text-center tracking-[var(--subtle-regular-letter-spacing)] leading-[var(--subtle-regular-line-height)] whitespace-nowrap [font-style:var(--subtle-regular-font-style)]">
          Created by User123
        </div>
      </div>
      <div className="absolute w-[6px] h-[20px] top-[20px] left-[304px] bg-[url(/vector.svg)] bg-[100%_100%]" />
    </div>
  );
};
