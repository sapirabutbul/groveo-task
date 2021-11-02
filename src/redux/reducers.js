import { PLAY_LOOP, STOP_LOOP, ADD_AUDIO, REMOVE_AUDIO } from "./actions";
import audioFiles from "../audioFiles";
const initalState = {
  audioFiles: audioFiles,
  audiosPlaying: [],
};
export const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case PLAY_LOOP:
      return { ...state };
    case STOP_LOOP:
      state.audiosPlaying.map((element) => {
        console.log("mapppp", element);
        element.pause();
      });
      return { ...state };
    case REMOVE_AUDIO:
      state.audiosPlaying.map((element, i) => {
        if (action.payload === element) {
          state.audiosPlaying.splice(i, 1);
          console.log("lllllllllllllgggggggggggggg", state.audiosPlaying);
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
        // state.audiosPlaying.every((element) => {
        //   if (element !== action.payload) {
        //     console.log("element !==action.payload");
        //     state.audiosPlaying.push(action.payload);
        //     return {
        //       ...state,
        //       audiosPlaying: [...state.audiosPlaying],
        //     };
        //   } else {
        //     console.log(
        //       "chekcfdfddsdffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        //     );
        //     return { ...state, audiosPlaying: [...state.audiosPlaying] };
        //   }
        // });
      } else {
        console.log("rrrrrrrrrrrrrrrrrr");
        return {
          ...state,
          audiosPlaying: [...state.audiosPlaying, action.payload],
        };
      }
    // console.log("log in reducer", action.payload);
    // if (state.audiosPlaying.length) {
    //   // console.log("startttttttt");
    //   state.audiosPlaying.map((element) => {
    //     if (action.payload === element) {
    //       console.log(
    //         "aaaaaaaaaaaaaaaaaa yesss element equal",
    //         action.payload
    //       );
    //       return { ...state };
    //     } else if (action.payload !== element) {
    //       console.log(
    //         "bbbbbbbbbbbbbbbbb  nnooooo element nottttttt",
    //         action.payload
    //       );
    //       state.audiosPlaying.push(action.payload);
    //       return {
    //         ...state,
    //         audiosPlaying: [...state.audiosPlaying],
    //       };
    //     }
    //   });
    // } else {
    //   console.log("first audio added", action.payload);
    //   return {
    //     ...state,
    //     audiosPlaying: [...state.audiosPlaying, action.payload],
    //   };
    // }

    default:
      return { ...state };
  }
};

// import { PLAY_LOOP, STOP_LOOP, ADD_AUDIO, REMOVE_AUDIO } from "./actions";
// import audioFiles from "../audioFiles";
// const initalState = {
//   audioFiles: audioFiles,
//   audiosPlaying: [],
// };
// export const reducer = (state = initalState, action = {}) => {
//   switch (action.type) {
//     case PLAY_LOOP:
//       return { ...state };
//     case STOP_LOOP:
//       state.audiosPlaying.map((element) => {
//         console.log("mapppp", element);
//         element.pause();
//       });
//       return { ...state };
//     case REMOVE_AUDIO:
//       state.audiosPlaying.map((element, i) => {
//         if (action.payload === element) {
//           state.audiosPlaying.splice(i, 1);
//           console.log("lllllllllllllgggggggggggggg", state.audiosPlaying);
//         }
//       });
//       return { ...state, audiosPlaying: [...state.audiosPlaying] };
//     case ADD_AUDIO:
//       // console.log("log in reducer", action.payload);
//       if (state.audiosPlaying.length) {
//         // console.log("startttttttt");
//         state.audiosPlaying.map((element) => {
//           if (action.payload === element) {
//             console.log(
//               "aaaaaaaaaaaaaaaaaa yesss element equal",
//               action.payload
//             );
//             return { ...state };
//           } else if (action.payload !== element) {
//             console.log(
//               "bbbbbbbbbbbbbbbbb  nnooooo element nottttttt",
//               action.payload
//             );
//             state.audiosPlaying.push(action.payload);
//             return {
//               ...state,
//               audiosPlaying: [...state.audiosPlaying],
//             };
//           }
//         });
//       } else {
//         console.log("first audio added", action.payload);
//         return {
//           ...state,
//           audiosPlaying: [...state.audiosPlaying, action.payload],
//         };
//       }

//     default:
//       return { ...state };
//   }
// };

// // state.audiosPlaying.every((element) => {
// //   if (action.payload === element) {
// //     console.log("aaaaaaaaaaaaaaaaaa element equal", action.payload);
// //     return { ...state };
// //   } else {
// //     console.log("bbbbbbbbbbbbbbbbb element nottttttt", action.payload);
// //     return {
// //       ...state,
// //       audiosPlaying: [...state.audiosPlaying, action.payload],
// //     };
// //   }
// // });
