import React from "react";
import { Edit } from "@styled-icons/boxicons-solid/Edit";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { useSelector, useDispatch } from "react-redux";

function MainHeader() {
  // Redux

  const dispatch = useDispatch();
  const introductionDetails = useSelector(
    (state: any) => state.introductionReducer
  );

  // Functions
  function onHandleInputChange(key: string, value: string) {
    dispatch({
      type: "UPDATE_INTRODUCTION",
      payload: {
        data: introductionDetails,
        key: key,
        value: value,
      },
    });
  }

  return (
    <div className="border border-blue-400 h-[200px] flex justify-between p-3">
      <div className="p-4 flex flex-col">
        <div>
          <input
            type="text"
            className="font-medium p-1 text-4xl outline-none focus:bg-blue-100 focus:rounded-md px-1"
            placeholder="Full Name"
            key={`fullName`}
            value={introductionDetails.name}
            onChange={(e: any) => onHandleInputChange("name", e.target.value)}
          />
          <input
            type="text"
            className="mt-2 font-medium text-2xl outline-none focus:bg-blue-100 focus:rounded-md px-1"
            placeholder="Professional Title"
            key={"title"}
            value={introductionDetails.title}
            onChange={(e: any) => onHandleInputChange("title", e.target.value)}
          />
        </div>
        <input
          type="text"
          className="mt-3 flex flex-col font-medium text-base outline-none focus:bg-blue-100 focus:rounded-md px-1"
          placeholder="Short summary about yourself"
          key={"summary"}
          value={introductionDetails.summary}
          onChange={(e: any) => onHandleInputChange("summary", e.target.value)}
        />
      </div>
      <div>
        <div>
          <LinkedinSquare size={12} />
          <input
            type="text"
            className="border-b-2 border-dashed font-medium outline-none focus:bg-blue-100 focus:rounded-md px-1"
            placeholder="github link"
            key={"github"}
            value={introductionDetails.github}
            onChange={(e: any) => onHandleInputChange("github", e.target.value)}
          />
        </div>
        <div>
          {" "}
          <LinkedinSquare size={12} />
          <input
            type="text"
            className="border-b-2 border-dashed font-medium outline-none focus:bg-blue-100 focus:rounded-md px-1"
            placeholder="linkedin link"
            key={"linkedin"}
            value={introductionDetails.linkedin}
            onChange={(e: any) =>
              onHandleInputChange("linkedin", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
