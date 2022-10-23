import React from "react";
import Achievement from "./achievement";
const defaultAchievement = "List responsibility here";

const defaultExperience = {
  title: "Title/Position",
  company: "Company Name",
  date: {
    startDay: "",
    startMonth: "",
    endDay: "",
    endMonth: "",
    isCurrent: false,
  },
  achievements: [defaultAchievement],
};
function Experience() {
  // States

  const [experiences, setExperiences] = React.useState([defaultExperience]);

  return (
    <div className="flex flex-col p-3">
      <h1 className=" uppercase">Experience</h1>
      {experiences.map((experience) => (
        <div>
          <h1
            contentEditable="true"
            className="font-medium text-xl outline-none"
          >
            {experience.title}
          </h1>
          <h1 contentEditable="true" className="font-medium  outline-none">
            {experience.company}
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
          <Achievement data={experience.achievements} />
        </div>
      ))}

      <div>
        <button
          onClick={() => setExperiences([...experiences, defaultExperience])}
          className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-500 uppercase last:mr-0 mr-1"
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
}

export default Experience;
