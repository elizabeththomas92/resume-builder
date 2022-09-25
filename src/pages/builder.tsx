import React from "react";
import Resume from "../components/resume";
import LeftSideBar from "../layouts/LeftSideBar";
import MainLayout from "../layouts/MainLayout";

function Builder() {
  return (
    <MainLayout>
      <LeftSideBar />
      <Resume />
    </MainLayout>
  );
}

export default Builder;
