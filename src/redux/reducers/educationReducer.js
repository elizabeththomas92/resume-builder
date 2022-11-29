const initialState = {
  degree: "",
  university: "",
  fromYear: "",
  toYear: "",
};

export const educationReducer = (state = [initialState], action) => {
  switch (action.type) {
    case "ADD_EDUCATION":
    case "UPDATE_EDUCATION":
      console.log("state", state);
      let educationDetailsArray = [...state];

      educationDetailsArray[action.payload.index][action.payload.key] =
        action.payload.value;
      return educationDetailsArray;

    case "REMOVE_EDUCATION":
      let educationArray = [...state];
      educationArray.splice(action.payload.index, 1);
      return educationArray;
    default:
      return state;
  }
};
