export const addEducation = (education) => {
  return {
    type: "ADD_EDUCATION",
    payload: education,
  };
};

export const updateEducation = (education) => {
  return {
    type: "UPDATE_EDUCATION",
    payload: education,
  };
};

export const removeEducation = (education) => {
  return {
    type: "REMOVE_EDUCATION",
    payload: education,
  };
};
