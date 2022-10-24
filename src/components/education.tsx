import React from "react";

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

  return (
    <div className="flex flex-col p-3">
      <h1 className=" uppercase">Education</h1>
      <div>
        <div>
          {educationDetails.map((education: any) => (
            <>
              <h1
                contentEditable="true"
                className="font-medium text-xl outline-none"
              >
                {education.degree}
              </h1>
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
