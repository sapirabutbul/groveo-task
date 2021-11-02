import React from "react";
import { connect } from "react-redux";
import { addPad, removePad } from "../redux/actions";

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playOn: false,
    };
    const { src, id } = this.props.padInfo;
    this.audio = new Audio(this.props.padInfo.src);

    this.audio.loop = true;
    this.audio.id = this.props.padInfo.id;
  }
  // componentDidUpdate() {
  //   console.log(
  //     "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
  //     this.props.audiosPlaying
  //   );
  // }

  handleAudio = (e) => {
    if (this.state.playOn) {
      console.log("this state play on yesssssssssssss");
      this.setState({ playOn: false });
      this.audio.pause();
      this.audio.currentTime = 0;
      // this.props.removePad(this.audio);
    } else if (!this.state.playOn) {
      console.log("this state play on nooooooooooo");

      this.setState({ playOn: true });
      // console.log("sssssssssssss", this.state.playOn);
      // this.audio.play();

      if (this.props.audiosPlaying.length) {
        setInterval(() => {
          if (this.props.audiosPlaying[0].currentTime === 0) {
            console.log("inside setintrvelllllllllllllll");
            this.props.addPad(this.audio);
          }
        }, 0);
        console.log("if statemnt", this.audio.duration);
        // this.props.audiosPlaying.map((element) => {
        //   if (element !== this.audio) {
        //     console.log("element !== this audio");

        //   }
        // });
      } else {
        console.log("else length");
        this.props.addPad(this.audio);
      }

      // if (this.props.audiosPlaying.length) {
      //     if (this.props.audiosPlaying[0].currentTime === 0) {
      //       console.log(
      //         "log in render pad component",
      //         this.props.audiosPlaying[0].currentTime
      //       );

      //       this.props.addPad(this.audio);

      //       // clearInterval(myInterval);
      //       // console.log("after clearInterval(myInterval);");
      //     } else {
      //       return null;
      //     }
      //   } else {
      //     console.log("lengthhhhhhhhhhhh");
      //     this.props.addPad(this.audio);
      //   }

      // this.props.addPad(this.audio);
      // console.log("duration", this.audio.duration);
    }
  };
  render() {
    // console.log("log in render pad component", this.props.audiosPlaying);
    // if (this.props.audiosPlaying.length) {
    //   if (this.props.audiosPlaying[0].currentTime === 0) {
    //     console.log(
    //       "log in render pad component",
    //       this.props.audiosPlaying[0].currentTime
    //     );
    //   }
    // }
    console.log("pad component props audios", this.props.audiosPlaying);
    const { id, icon } = this.props.padInfo;

    return (
      <>
        <div id={id} className="PadBox">
          <img
            onClick={this.handleAudio}
            alt="music icon"
            className="icons"
            src={icon}
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    audiosPlaying: state.audiosPlaying,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPad: (e) => dispatch(addPad(e)),
    removePad: (e) => dispatch(removePad(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pad);

// if (this.props.audiosPlaying.length) {
//   if (this.props.audiosPlaying[0].currentTime === 0) {
//     console.log(
//       "log in render pad component",
//       this.props.audiosPlaying[0].currentTime
//     );
//     this.props.addPad(this.audio);
//     console.log("afteradd pad");
//   } else {
//     console.log("checking if");
//   }
// } else {
//   this.props.addPad(this.audio);
// }

{
  /* <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/those-icons"
              title="Those Icons"
            >
              Those Icons
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div> */
}

// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       onPlay: false,
//     };
//   }
//   componentDidMount() {
//     console.log("pppp", this.props);
//     console.log("pppp", this.props.id);
//   }

//   handleAudio = (e) => {
//     console.log("event", e);
//     console.log("target", e.target);
//     console.log("target children", e.target.children);

//     console.log("target firsttt", e.firstchild);
//   };
//   render() {
//     return (
//       <>
//         <div
//           id={this.props.id}
//           style={{ border: "1px solid blue" }}
//           onClick={this.handleAudio}
//         >
//           <audio
//             style={{ border: "1px solid red" }}
//             src={this.props.padInfo.src}
//             // loop
//             // controls
//           />
//           <img
//             alt="music icon"
//             style={{ width: "60px" }}
//             src={this.props.padInfo.icon}
//           />
//         </div>
//       </>
//     );
//   }
// }

// export default App;

// {
//   /* <div>
//             Icons made by{" "}
//             <a
//               href="https://www.flaticon.com/authors/those-icons"
//               title="Those Icons"
//             >
//               Those Icons
//             </a>{" "}
//             from{" "}
//             <a href="https://www.flaticon.com/" title="Flaticon">
//               www.flaticon.com
//             </a>
//           </div> */
// }

// import React from "react";
// import { connect } from "react-redux";
// import { addPad, removePad } from "../redux/actions";

// class Pad extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       playOn: false,
//     };
//     const { src, id } = this.props.padInfo;
//     this.audio = new Audio(this.props.padInfo.src);

//     this.audio.loop = true;
//     this.audio.id = this.props.padInfo.id;
//   }
//   componentDidUpdate() {
//     console.log(
//       "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
//       this.props.audiosPlaying
//     );
//   }

//   handleAudio = (e) => {
//     if (this.state.playOn) {
//       console.log("this state play on yesssssssssssss");
//       this.setState({ playOn: false });
//       this.audio.pause();
//       this.audio.currentTime = 0;
//       // this.props.removePad(this.audio);
//     } else if (!this.state.playOn) {
//       console.log("this state play on nooooooooooo");

//       this.setState({ playOn: true });
//       // console.log("sssssssssssss", this.state.playOn);
//       // this.audio.play();
//       // let myInterval =
//       setInterval(() => {
//         if (this.props.audiosPlaying.length) {
//           if (this.props.audiosPlaying[0].currentTime === 0) {
//             console.log(
//               "log in render pad component",
//               this.props.audiosPlaying[0].currentTime
//             );

//             this.props.addPad(this.audio);

//             // clearInterval(myInterval);
//             // console.log("after clearInterval(myInterval);");
//           } else {
//             return null;
//           }
//         } else {
//           console.log("lengthhhhhhhhhhhh");
//           this.props.addPad(this.audio);
//         }
//       }, 0);

//       // this.props.addPad(this.audio);
//       // console.log("duration", this.audio.duration);
//     }
//   };
//   render() {
//     // console.log("log in render pad component", this.props.audiosPlaying);
//     // if (this.props.audiosPlaying.length) {
//     //   if (this.props.audiosPlaying[0].currentTime === 0) {
//     //     console.log(
//     //       "log in render pad component",
//     //       this.props.audiosPlaying[0].currentTime
//     //     );
//     //   }
//     // }
//     console.log("pad component props audios", this.props.audiosPlaying);
//     const { id, icon } = this.props.padInfo;

//     return (
//       <>
//         <div id={id} style={{ border: "1px solid blue" }}>
//           <img
//             onClick={this.handleAudio}
//             alt="music icon"
//             style={{ width: "60px" }}
//             src={icon}
//           />
//         </div>
//       </>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     audiosPlaying: state.audiosPlaying,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPad: (e) => dispatch(addPad(e)),
//     removePad: (e) => dispatch(removePad(e)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Pad);
