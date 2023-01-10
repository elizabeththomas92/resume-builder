import React, { useRef } from "react";
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";
import { useSelector, useDispatch } from "react-redux";

interface IEducation {
  degree: string;
  university: string;
  fromYear: string;
  toYear: string;
}

function Education() {
  // Redux

  const dispatch = useDispatch();
  const educationDetails = useSelector((state: any) => state.educationReducer);
  // Functions

  function addEducation() {
    dispatch({
      type: "ADD_EDUCATION",
      payload: educationDetails,
    });
  }

  function removeEducation(index: number) {
    dispatch({
      type: "REMOVE_EDUCATION",
      payload: { data: educationDetails, index: index },
    });
  }

  function onHandleInputChange(key: string, value: string, index: number) {
    dispatch({
      type: "UPDATE_EDUCATION",
      payload: { data: educationDetails, index: index, key: key, value: value },
    });
  }
  return (
    <div className="flex flex-col p-3">
      <h1 className="font-bold uppercase">Education</h1>
      <div>
        <div>
          {educationDetails.map((education: any, index: number) => (
            <div className="mt-3">
              <div className="group">
                <input
                  type="text"
                  className="border-b-2 border-dashed font-medium w-full outline-none focus:bg-blue-100 focus:rounded-md px-1"
                  placeholder={"DEGREE"}
                  key={`degree-${index}`}
                  value={education.degree}
                  onChange={(e: any) =>
                    onHandleInputChange("degree", e.target.value, index)
                  }
                ></input>
                <span className='tooltip-text bg-blue-100 p-3 -mt-16 -ml-6 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50"'>
                  <Delete size={12} onClick={() => removeEducation(index)} />
                </span>
              </div>
              <input
                type="text"
                className="border-b-2 border-dashed font-medium w-full outline-none focus:bg-blue-100 focus:rounded-md px-1"
                placeholder={"UNIVERSITY"}
                key={`university-${index}`}
                value={education.university}
                onChange={(e: any) =>
                  onHandleInputChange("university", e.target.value, index)
                }
              ></input>
              {/* Date */}
              <div className="flex gap-1">
                {/* from Date */}
                <input
                  placeholder="yyyy"
                  type="text"
                  className="w-[50px] border-b-2 border-dashed focus:bg-blue-100 focus:rounded-md px-1 focus:outline-none"
                  maxLength={4}
                  onChange={(e: any) =>
                    onHandleInputChange("fromYear", e.target.value, index)
                  }
                ></input>
                <span className="mx-2">-</span>
                {/* To Date */}
                <input
                  placeholder="yyyy"
                  type="text"
                  className="w-[50px] border-b-2 border-dashed focus:bg-blue-100 focus:rounded-md px-1 focus:outline-none"
                  maxLength={4}
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
