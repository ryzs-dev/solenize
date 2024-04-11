import React from "react";

interface Props {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const CreateAssessmentModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-start bg-white border-primary border rounded-lg fixed z-10 inset-0 overflow-y-auto max-w-[627px] max-h-[80%] h-fit my-auto mx-auto p-6 text-primary-button">
            <header className="flex flex-col items-start pb-4 self-stretch w-full flex-[0_0_auto] bg-transparent">
              <h2 className="w-fit font-semibold text-slate-800 text-xl whitespace-nowrap">
                Create Assessment
              </h2>
            </header>
            <div className="flex flex-col items-start gap-3 pt-0 pb-6 self-stretch w-full flex-[0_0_auto] overflow-scroll">
              <div className="self-stretch w-full flex flex-col items-start ">
                <p className="w-fit font-normal text-slate-500 text-sm whitespace-nowrap">
                  Let&apos;s hear about you
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 self-stretch w-full">
              <div className="flex flex-col w-full items-start gap-1">
                <label className="w-fit font-semibold text-slate-600 text-sm">
                  Role <span className="text-[#e53e3e]">*</span>
                </label>
                <input
                  type="text"
                  className="flex rounded-md border border-solid border-slate-300 text-sm py-2 px-2 w-full"
                  placeholder="E.g. Community Manager"
                  required
                />
              </div>
              <div className="flex flex-col w-full items-start gap-1">
                <label className="w-fit font-semibold text-slate-600 text-sm">
                  Summarised Job Scope <span className="text-[#e53e3e]">*</span>
                </label>
                <textarea
                  className="flex rounded-md border border-solid border-slate-300 text-sm py-2 px-2 w-full min-h-24"
                  required
                />
              </div>
              <div className="flex flex-col w-full items-start gap-1">
                <label className="w-fit font-semibold text-slate-600 text-sm">
                  Technical Skill <span className="text-[#e53e3e]">*</span>
                </label>
                <input
                  type="text"
                  className="flex rounded-md border border-solid border-slate-300 text-sm py-2 px-2 w-full"
                  placeholder="E.g. Token Standard"
                  required
                />
              </div>
              <div className="flex flex-col w-full items-start gap-1">
                <label className="w-fit font-semibold text-slate-600 text-sm">
                  Personality & Cognitive Skills{" "}
                  <span className="text-[#e53e3e]">*</span>
                </label>
                <input
                  type="text"
                  className="flex rounded-md border border-solid border-slate-300 text-sm py-2 px-2 w-full"
                  required
                />
              </div>
              <div className="flex flex-col w-full items-start gap-1">
                <label className="w-fit font-semibold text-slate-600 text-sm">
                  Question Format
                  <span className="text-[#e53e3e]">*</span>
                </label>
                <div className="flex rounded-md border border-solid border-slate-300 text-sm p-2 w-full gap-3">
                  <input id="MCQ" type="checkbox" required />
                  <label
                    htmlFor="MCQ"
                    className="text-sm text-slate-400 font-medium"
                  >
                    Multiple Choice Questions
                  </label>
                </div>
                <div className="flex rounded-md border border-solid border-slate-300 text-sm p-2 w-full gap-3">
                  <input id="OT" type="checkbox" />
                  <label
                    htmlFor="OT"
                    className="text-sm text-slate-400 font-medium"
                  >
                    Open Text
                  </label>
                </div>
                <div className="flex rounded-md border border-solid border-slate-300 text-sm p-2 w-full gap-3">
                  <input id="WCI" type="checkbox" />
                  <label
                    htmlFor="WCI"
                    className="text-sm text-slate-400 font-medium "
                  >
                    Whiteboard Coding Interview
                  </label>
                </div>
              </div>
              <div className="flex flex-col w-full items-start gap-1">
                <label className="w-fit font-semibold text-slate-600 text-sm">
                  Others
                </label>
                <input
                  type="text"
                  className="flex rounded-md border border-solid border-slate-300 text-sm py-2 px-2 w-full"
                />
              </div>
              <div className="flex justify-between w-full">
                <button
                  className="w-fit font-semibold text-white text-base text-center bg-slate-300 rounded-md py-2 px-8"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className="w-fit font-semibold text-primary-button text-base text-center bg-primary rounded-md py-2 px-8"
                  onClick={onClose}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAssessmentModal;
