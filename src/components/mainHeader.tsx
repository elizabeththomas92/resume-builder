import React from "react";

function MainHeader() {
  return (
    <div className="border border-blue-400 border h-[200px] ">
      <div className="p-4">
        <h1
          contentEditable="true"
          className=" font-medium text-4xl outline-none"
        >
          Jane Doe
        </h1>
        <h2
          contentEditable="true"
          className="mt-2 font-medium text-2xl outline-none"
        >
          Profession Title
        </h2>
        <h3
          contentEditable="true"
          className="mt-3 font-medium text-xl outline-none"
        >
          Short summary about yourself
        </h3>
      </div>
    </div>
  );
}

export default MainHeader;
