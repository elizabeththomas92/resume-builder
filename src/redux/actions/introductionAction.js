export const addIntroduction = (introduction) => {
  return {
    type: "ADD_INTRODUCTION",
    payload: introduction,
  };
};

export const updateIntroduction = (introduction) => {
  return {
    type: "UPDATE_INTRODUCTION",
    payload: introduction,
  };
};
