const initialState = {
  degree: "",
  university: "",
  fromYear: "",
  toYear: "",
};

export const educationReducer = (state = [initialState], action) => {
  switch (action.type) {
    case "ADD_EDUCATION":
      return [...state, action.payload];
    case "UPDATE_EDUCATION":
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
