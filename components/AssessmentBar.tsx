"use client";

import React, { useState } from "react";
import CreateAssessmentModal from "./Modals/CreateAssessmentModal";

export const AssessmentBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-8 py-4 w-full min-w-[1440px] min-h-[68px] bg-slate-400">
      <div className="flex w-[639px] items-center gap-4">
        <div className="inline-flex items-center justify-center gap-3 px-4 py-3  flex-[0_0_auto] bg-primary hover:bg-primary-button hover:text-primary transition-colors duration-300 rounded-md">
          <div className="w-auto h-auto font-medium text-base text-center tracking-normal leading-none ">
            <button onClick={openModal}>Create Assessment</button>
            <CreateAssessmentModal
              onOpen={openModal}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          </div>
        </div>
        <p className="flex-1 h-5 font-normal text-transparent text-sm ">
          <span className="text-[#fefefede]">Explore our marketplace of</span>
          <span className="text-[#07f5ec]"> ready-made templates</span>
        </p>
      </div>
      <div className="inline-flex gap-5 flex-[0_0_auto] items-center ">
        <div className="flex w-auto justify-center gap-2 p-3 self-stretch bg-light-secondary rounded-lg border border-solid border-primary items-center ">
          <div className="w-fit font-normal text-primary-button text-sm whitespace-nowrap">
            Choose your role
          </div>
        </div>
      </div>
    </div>
  );
};
