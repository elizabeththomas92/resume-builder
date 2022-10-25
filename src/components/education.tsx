import React from "react";
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";

const defaultEducation = {
  degree: "DEGREE",
  university: "University",
  fromYear: "",
  toYear: "",
};

function Education() {
  // States

  const [educationDetails, setEducationDetails] = React.useState([
    defaultEducation,
  ]);

  // Functions

  function removeEducation(index: number) {}

  return (
    <div className="flex flex-col p-3">
      <h1 className=" uppercase">Education</h1>
      <div>
        <div>
          {educationDetails.map((education: any, index) => (
            <>
              <div className="group">
                <h1
                  contentEditable="true"
                  className="font-medium text-xl outline-none"
                >
                  {" "}
                  {education.degree}
                </h1>
                <span className='tooltip-text bg-blue-100 p-3 -mt-16 -ml-6 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50"'>
                  <Delete size={12} onClick={() => removeEducation(index)} />
                </span>
              </div>
              <h1 contentEditable="true" className="font-medium  outline-none">
                {education.university}
              </h1>
              {/* Date */}
              <div className="flex gap-1">
                {/* from Date */}
                <input
                  placeholder="yyyy"
                  type="text"
                  className="w-[44px]  border-b-2 border-dashed"
                  maxLength={4}
                ></input>
                <span className="mx-2">-</span>
                {/* To Date */}
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
            </>
          ))}
        </div>
        <button
          onClick={() =>
            setEducationDetails([...educationDetails, defaultEducation])
          }
          className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-500 uppercase last:mr-0 mr-1"
        >
          + Add Education
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default Education;
