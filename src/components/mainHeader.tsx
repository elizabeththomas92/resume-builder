import React from "react";
import { Edit } from "@styled-icons/boxicons-solid/Edit";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

function MainHeader() {
  const [profileImage, setProfileImage] = React.useState("");

  function onHandleImageChange(e: any) {
    console.log("here", e.target.files);
  }

  return (
    <div className="border border-blue-400 h-[200px] flex justify-between p-3">
      <div className="p-4">
        <h1
          contentEditable="true"
          className="font-medium text-4xl outline-none focus:bg-blue-100 focus:rounded-md px-1"
        >
          Jane Doe
        </h1>
        <h2
          contentEditable="true"
          className="mt-2 font-medium text-2xl outline-none focus:bg-blue-100 focus:rounded-md px-1"
        >
          Profession Title
        </h2>
        <h3
          contentEditable="true"
          className="mt-3 font-medium text-xl outline-none focus:bg-blue-100 focus:rounded-md px-1"
        >
          Short summary about yourself
        </h3>
      </div>
      <div className="relative">
        <div>
          <LinkedinSquare size={12} />
        </div>
        <div>
          {" "}
          <LinkedinSquare size={12} />
        </div>
        <div>
          {" "}
          <LinkedinSquare size={12} />
        </div>
        {/* <img
          className="w-40 h-40 rounded-full border border-blue-100"
          src={profileImage || "defaultProfile.jpeg"}
          alt="Rounded avatar"
        />
        <span className="top-2 left-28 absolute  w-3.5 h-3.5">
          <label htmlFor="profile-upload">
            <Edit size={16} />
          </label>
          <input
            type="file"
            id="profile-upload"
            className="opacity-0"
            onChange={onHandleImageChange}
          />
        </span> */}
      </div>
    </div>
  );
}

export default MainHeader;
