import React from "react";

function Experience() {
  // States
  const [skills, setSkills] = React.useState(["New skill"]);
  return (
    <div className="flex flex-col p-3">
      <h1 className=" uppercase">Experience</h1>
      <div>
        <button
          onClick={() => setSkills([...skills, "New Skill"])}
          className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-500 bg-blue-300 uppercase last:mr-0 mr-1"
        >
          + Add skill
        </button>
        {skills.map((skill, index) => (
          <div
            id={`skill-${index}`}
            contentEditable={true}
            className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-500 bg-blue-300 last:mr-0 mr-1"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
