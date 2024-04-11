import { AssessmentBar } from "@/components/AssessmentBar";
import { DCard } from "@/components/DCard";
import Navbar from "@/components/Navbar";
import React from "react";

const assessment = () => {
  return (
    <main>
      <Navbar />
      <AssessmentBar />
    </main>
    // <DCard
    //   jobTitle="Blockchain Developer Assessment"
    //   difficulty="3/5"
    //   usage={2000}
    //   duration={45}
    //   skill1="web 3"
    //   skill2="web 3"
    //   skill3="web 3"
    //   skill4="web 3"
    //   skill5="web 3"
    //   skill6="web 3"
    // />
  );
};

export default assessment;
