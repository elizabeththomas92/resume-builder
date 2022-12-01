export const addExperience = (experience) => {
  return {
    type: "ADD_EDUCATION",
    payload: experience,
  };
};

export const updateExperience = (experience) => {
  return {
    type: "UPDATE_EXPERIENCE",
    payload: experience,
  };
};

export const removeExperience = (experience) => {
  return {
    type: "REMOVE_EDUCATION",
    payload: experience,
  };
};
