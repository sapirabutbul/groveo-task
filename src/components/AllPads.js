import React from "react";
import Pad from "./Pad";
import { connect } from "react-redux";
import { playLoop, stopLoop } from "../redux/actions";

class AllPads extends React.Component {
  constructor() {
    super();
    this.state = {
      play: false,
      playButton: "PLAY",
    };
  }
  // componentDidUpdate() {
  //   console.log(
  //     "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
  //     this.props.audiosPlaying
  //   );
  // }
  handlePlay = () => {
    if (!this.state.play) {
      this.setState({ playButton: "STOP" });
      this.setState({ play: true });
      this.props.playLoop();
      // this.playTheLoop();
    } else {
      this.setState({ playButton: "PLAY" });
      this.setState({ play: false });
      this.props.stopLoop();
    }
  };

  // playTheLoop = () => {
  //   this.props.audiosPlaying.map((element) => {
  //     console.log("array in audiosplaying map", this.props.audiosPlaying);

  //     console.log("element in audiosplaying map", element);
  //     element.play();
  //   });
  // };

  render() {
    // console.log("this.props.audiosPlaying", this.props.audiosPlaying);
    const { playButton } = this.state;

    // this.props.audiosPlaying.map((element) => {
    //   console.log("array in audiosplaying map", this.props.audiosPlaying);

    //   console.log("element in audiosplaying map", element);
    //   element.play();
    // });
    {
      this.props.audiosPlaying.map((element) => {
        console.log("array in audiosplaying map", this.props.audiosPlaying);

        // console.log("element in audiosplaying map", element);
        element.play();
      });
    }

    return (
      <div className="container">
        <div className="buttonDiv">
          <button className="playButton" onClick={this.handlePlay}>
            {playButton}
          </button>
        </div>
        <div className="allPadsDiv">
          {this.props.audioFiles.map((element, index) => {
            // console.log("element", element);
            return <Pad key={index} padInfo={element} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    audiosPlaying: state.audiosPlaying,
    audioFiles: state.audioFiles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playLoop: () => dispatch(playLoop()),
    stopLoop: () => dispatch(stopLoop()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllPads);
