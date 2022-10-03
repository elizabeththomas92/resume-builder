import React from "react";

function Experience() {
  // States
  const [skills, setSkills] = React.useState(["New skill"]);
  return (
    <div className="flex flex-col p-3">
      <h1 className=" uppercase">Experience</h1>
      <div>
        <h1 contentEditable="true" className="font-medium text-xl outline-none">
          Title/Position
        </h1>
        <h1 contentEditable="true" className="font-medium  outline-none">
          Company Name
        </h1>
      </div>
    </div>
  );
}

export default Experience;
