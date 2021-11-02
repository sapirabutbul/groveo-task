import { PLAY_LOOP, STOP_LOOP, ADD_AUDIO, REMOVE_AUDIO } from "./actions";
import audioFiles from "../audioFiles";

const initalState = {
  playModeOn: false,
  audioFiles: audioFiles,
  audiosPlaying: [],
};

export const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case PLAY_LOOP:
      return { ...state, playModeOn: true };
    case STOP_LOOP:
      state.audiosPlaying.map((element) => {
        element.pause();
      });
      return { ...state, playModeOn: false };
    case REMOVE_AUDIO:
      state.audiosPlaying.map((element, i) => {
        if (action.payload === element) {
          state.audiosPlaying.splice(i, 1);
          return { ...state, audiosPlaying: [...state.audiosPlaying] };
        }
      });
      return { ...state, audiosPlaying: [...state.audiosPlaying] };
    case ADD_AUDIO:
      if (state.audiosPlaying.length) {
        state.audiosPlaying.push(action.payload);
        return {
          ...state,
          audiosPlaying: [...state.audiosPlaying],
        };
      } else {
        return {
          ...state,
          audiosPlaying: [...state.audiosPlaying, action.payload],
        };
      }
    default:
      return { ...state };
  }
};
