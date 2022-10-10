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
        {/* Date */}
        <div className="flex gap-1">
          {/* from Date */}
          <input
            type="text"
            placeholder="mm"
            maxLength={2}
            className="w-[44px]  border-b-2 border-dashed"
          ></input>
          <span>/</span>
          <input
            placeholder="yyyy"
            type="text"
            className="w-[44px]  border-b-2 border-dashed"
            maxLength={4}
          ></input>
          <span className="mx-2">-</span>
          {/* To Date */}
          <input
            type="text"
            placeholder="mm"
            maxLength={2}
            className="w-[44px]  border-b-2 border-dashed"
          ></input>
          <span>/</span>
          <input
            placeholder="yyyy"
            type="text"
            className="w-[44px]  border-b-2 border-dashed"
            maxLength={4}
          ></input>
          <label>
            <input type="checkbox" name="html" value="html" /> Present
          </label>
        </div>
        {/* Work Achievements */}
        <div></div>
      </div>
    </div>
  );
}

export default Experience;
