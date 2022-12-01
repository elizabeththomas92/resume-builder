const defaultAchievement = "List responsibility here";
const initialState = {
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

export const experienceReducer = (state = [initialState], action) => {
  switch (action.type) {
    case "ADD_EXPERIENCE":
      return [...state, action.payload];
    case "UPDATE_EXPERIENCE":
      let experienceDetailsArray = [...state];
      experienceDetailsArray[action.payload.index][action.payload.key] =
        action.payload.value;
      return experienceDetailsArray;

    case "REMOVE_EXPERIENCE":
      let experienceArray = [...state];

      experienceArray.splice(action.payload.index, 1);
      return experienceArray;
    default:
      return state;
  }
};
