import React from "react";

function MainLayout(props: any) {
  return <div className="flex justify-center gap-5">{props.children}</div>;
}

export default MainLayout;
