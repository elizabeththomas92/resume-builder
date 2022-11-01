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

  function addEducation() {
    let temp = [...educationDetails];
    temp.push(defaultEducation);
    console.log("temp", temp, defaultEducation);
    setEducationDetails(temp);
  }

  function removeEducation(index: number) {
    let educationArray = [...educationDetails];
    educationArray[index] = defaultEducation;

    educationArray.splice(index, 1);
    setEducationDetails(educationArray);
  }

  function onHandleInputChange(key: string, value: string, index: number) {
    const educationDetailsArray: any = [...educationDetails];

    educationDetailsArray[index][key] = value;
    console.log("here", educationDetailsArray[index][key], index);
    setEducationDetails(educationDetailsArray);
  }
  return (
    <div className="flex flex-col p-3">
      <h1 className=" uppercase">Education</h1>
      <div>
        <div>
          {educationDetails.map((education: any, index) => (
            <div key={`education-${index}`}>
              <div className="group">
                {/* <h1
                  contentEditable="true"
                  className="font-medium text-xl outline-none"
                  onInput={(e: any) =>
                    onHandleInputChange(
                      "degree",
                      e.currentTarget.textContent,
                      index
                    )
                  }
                  suppressContentEditableWarning={true}
                >
                  {" "}
                  {education.degree}
                </h1> */}
                <span className='tooltip-text bg-blue-100 p-3 -mt-16 -ml-6 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50"'>
                  <Delete size={12} onClick={() => removeEducation(index)} />
                </span>
              </div>
              {/* <h1
                contentEditable="true"
                className="font-medium  outline-none"
                onChange={(e: any) =>
                  onHandleInputChange(
                    "university",
                    e.currentTarget.textContent,
                    index
                  )
                }
              >
                {education.university}
              </h1> */}
              {/* Date */}
              <div className="flex gap-1">
                {/* from Date */}
                <input
                  id={`fromYear-${index}`}
                  placeholder="yyyy"
                  type="text"
                  className="w-[44px]  border-b-2 border-dashed"
                  maxLength={4}
                  value={education.fromYear}
                  onChange={(e: any) =>
                    onHandleInputChange("fromYear", e.target.value, index)
                  }
                ></input>
                <span className="mx-2">-</span>
                {/* To Date */}
                <input
                  placeholder="yyyy"
                  id={`toYear-${index}`}
                  type="text"
                  className="w-[44px]  border-b-2 border-dashed"
                  maxLength={4}
                  value={education.toYear}
                  onChange={(e: any) =>
                    onHandleInputChange("toYear", e.target.value, index)
                  }
                ></input>
                <label>
                  <input type="checkbox" name="html" value="html" /> Present
                </label>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={addEducation}
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
