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
  // on click event makes play mode on/off
  handlePlay = () => {
    if (!this.state.play) {
      this.setState({ playButton: "STOP" });
      this.setState({ play: true });
      this.props.playLoop();
    } else if (this.state.play) {
      this.setState({ playButton: "PLAY" });
      this.setState({ play: false });
      this.props.stopLoop();
    }
  };
  render() {
    const { playButton, play } = this.state;
    //checking if play mode is on
    if (play) {
      this.props.audiosPlaying.map((element) => {
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
