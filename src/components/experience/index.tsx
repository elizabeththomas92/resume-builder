import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Achievement from "./achievement";
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";

const defaultAchievement = "List responsibility here";

const defaultExperience = {
  title: "",
  company: "",
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

  // const [experiences, setExperiences] = React.useState([defaultExperience]);

  // Redux

  const dispatch = useDispatch();
  const experiences = useSelector((state: any) => state.experienceReducer);

  // Functions
  function addExperience() {
    dispatch({
      type: "ADD_EXPERIENCE",
      payload: experiences,
    });
  }

  function removeExperience(index: number) {
    dispatch({
      type: "REMOVE_EXPERIENCE",
      payload: { data: experiences, index: index },
    });
  }
  function onHandleInputChange(key: string, value: string, index: number) {
    dispatch({
      type: "UPDATE_EXPERIENCE",
      payload: {
        data: experiences,
        index: index,
        key: key,
        value: value,
      },
    });
  }

  return (
    <div className="flex flex-col p-3">
      <h1 className="font-bold uppercase">Experience</h1>
      {experiences?.map((experience: any, index: number) => (
        <div>
          <div className="group">
            {/* <h1
              contentEditable="true"
              className="font-medium text-xl outline-none"
            >
              {experience.title}
            </h1> */}
            <input
              type="text"
              className="font-medium text-xl outline-none focus:bg-blue-100 focus:rounded-md focus:px-1"
              placeholder={"Title/Position"}
              key={`title-${index}`}
              value={experience.title}
              onChange={(e: any) =>
                onHandleInputChange("title", e.target.value, index)
              }
            ></input>
            <span className='tooltip-text bg-blue-100 p-3 -mt-16 -ml-6 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50"'>
              <Delete size={12} onClick={() => removeExperience(index)} />
            </span>
          </div>
          {/* <h1 contentEditable="true" className="font-medium  outline-none">
            {experience.company}
          </h1> */}
          <input
            type="text"
            className="font-medium outline-none focus:bg-blue-100 focus:rounded-md focus:px-1"
            placeholder={"Company Name"}
            key={`company-${index}`}
            value={experience.company}
            onChange={(e: any) =>
              onHandleInputChange("company", e.target.value, index)
            }
          ></input>
          {/* Date */}
          <div className="flex gap-1">
            {/* from Date */}
            <input
              type="text"
              placeholder="mm"
              maxLength={2}
              className="w-[44px]  border-b-2 border-dashed focus:outline-none focus:bg-blue-100 focus:rounded-md focus:px-1"
            ></input>
            <span>/</span>
            <input
              placeholder="yyyy"
              type="text"
              className="w-[44px]  border-b-2 border-dashed focus:outline-none focus:bg-blue-100 focus:rounded-md focus:px-1"
              maxLength={4}
            ></input>
            <span className="mx-2">-</span>
            {/* To Date */}
            <input
              type="text"
              placeholder="mm"
              maxLength={2}
              className="w-[44px]  border-b-2 border-dashed focus:outline-none focus:bg-blue-100 focus:rounded-md focus:px-1"
            ></input>
            <span>/</span>
            <input
              placeholder="yyyy"
              type="text"
              className="w-[44px]  border-b-2 border-dashed focus:outline-none focus:bg-blue-100 focus:rounded-md focus:px-1"
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
          onClick={addExperience}
          className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-500 uppercase last:mr-0 mr-1"
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
}

export default Experience;
