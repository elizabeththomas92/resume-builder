import Resume from "../components/resume";
import LeftSideBar from "../layouts/LeftSideBar";
import MainLayout from "../layouts/MainLayout";

function Builder() {
  return (
    <div>
      <MainLayout>
        <LeftSideBar />
        <Resume />
      </MainLayout>
    </div>
  );
}

export default Builder;
