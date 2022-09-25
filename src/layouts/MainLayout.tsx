import React from "react";

function MainLayout(props: any) {
  return <div className="flex gap-5">{props.children}</div>;
}

export default MainLayout;
