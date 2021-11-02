export const PLAY_LOOP = "PLAY_LOOP";
export const STOP_LOOP = "STOP_LOOP";
export const ADD_AUDIO = "ADD_AUDIO";
export const REMOVE_AUDIO = "REMOVE_AUDIO";

export const playLoop = (value) => {
  return {
    type: PLAY_LOOP,
    payload: value,
  };
};
export const stopLoop = (value) => {
  return {
    type: STOP_LOOP,
    payload: value,
  };
};
export const addPad = (value) => {
  // console.log("value in action", value);
  return {
    type: ADD_AUDIO,
    payload: value,
  };
};
export const removePad = (value) => {
  // console.log("value in action removePad", value);
  return {
    type: REMOVE_AUDIO,
    payload: value,
  };
};
