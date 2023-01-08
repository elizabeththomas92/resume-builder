export const resumeReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_DOWNLOAD":
      return action.payload;
    default:
      return state;
  }
};
