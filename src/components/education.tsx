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

  function removeEducation(index: number) {
    console.log("index", index);
    let educationArray = [...educationDetails];
    educationArray.splice(index, 1);

    setEducationDetails(educationArray);
  }

  function onHandleInputChange(key: string, value: string) {
  setEducationDetails([...educationDetails, [key]:value]);
  }

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
                  onChange={(e: any) =>
                    onHandleInputChange("degree", e.target.value)
                  }
                >
                  {" "}
                  {education.degree}
                </h1>
                <span className='tooltip-text bg-blue-100 p-3 -mt-16 -ml-6 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50"'>
                  <Delete size={12} onClick={() => removeEducation(index)} />
                </span>
              </div>
              <h1
                contentEditable="true"
                className="font-medium  outline-none"
                onChange={(e: any) =>
                  onHandleInputChange("university", e.target.value)
                }
              >
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
                  onChange={(e: any) =>
                    onHandleInputChange("fromYear", e.target.value)
                  }
                ></input>
                <span className="mx-2">-</span>
                {/* To Date */}
                <input
                  placeholder="yyyy"
                  type="text"
                  className="w-[44px]  border-b-2 border-dashed"
                  maxLength={4}
                  onChange={(e: any) =>
                    onHandleInputChange("toYear", e.target.value)
                  }
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
