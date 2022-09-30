import React from "react";
import MainHeader from "./mainHeader";
import Skills from "./skills";

function Resume() {
  return (
    <div className="border border-black w-[55em] h-[100em] m-10">
      <MainHeader />
      <Skills />
    </div>
  );
}

export default Resume;