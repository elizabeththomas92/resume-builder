const initialState = {
  name: "",
  title: "",
  fromYear: "",
  summary: "",
  github: "",
  linkedin: "",
};

export const introductionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INTRODUCTION":
      let introductionDetails = { ...state };

      introductionDetails[action.payload.key] = action.payload.value;
      console.log("introductionDetails", introductionDetails);
      return introductionDetails;

    default:
      return state;
  }
};
