import React from "react";

const defaultAchievement = "List responsibility here";

function Achievement(props: { data: string[] }) {
  // States

  const [achievements, setAchievements] = React.useState(props.data);

  return (
    <div className="flex flex-col p-3">
      <div>
        <div className="font-semibold">Achievements</div>
        <div>
          {achievements?.map((achievement) => (
            <li
              contentEditable="true"
              className="text-base outline-none focus:bg-blue-100 focus:rounded-md px-1"
            >
              {achievement}
            </li>
          ))}
        </div>
        <button
          onClick={() => setAchievements([...achievements, defaultAchievement])}
          className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-500 uppercase last:mr-0 mr-1"
        >
          + Add Achievement
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default Achievement;
