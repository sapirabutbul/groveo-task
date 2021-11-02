import React from "react";
import { connect } from "react-redux";
import { addPad, removePad } from "../redux/actions";

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playOn: false,
      padClass: "PadBox",
    };
    const { src, id } = this.props.padInfo;
    this.audio = new Audio(this.props.padInfo.src);
    this.audio.loop = true;
    this.audio.id = this.props.padInfo.id;
  }
  // on click event for each pad - controling which audio will be added to the arrays of audios that are playing
  //also changing class name to change the style
  handleAudio = (e) => {
    if (this.state.playOn) {
      this.setState({ playOn: false, padClass: "PadBox" });
      this.audio.pause();
      this.audio.currentTime = 0;
      this.props.removePad(this.audio);
    } else if (!this.state.playOn) {
      this.setState({ playOn: true, padClass: "padBoxOn" });
      if (this.props.playModeOn) {
        if (this.props.audiosPlaying.length) {
          setInterval(() => {
            if (this.props.audiosPlaying[0].currentTime === 0) {
              //preventing duoble audios
              let checkingDouble = this.props.audiosPlaying.find((element) => {
                return element === this.audio;
              });
              if (!checkingDouble) {
                this.props.addPad(this.audio);
              }
            }
          }, 0);
        } else {
          this.props.addPad(this.audio);
        }
      } else {
        this.props.addPad(this.audio);
      }
    }
  };
  render() {
    const { id, icon } = this.props.padInfo;
    return (
      <>
        <div id={id} className={this.state.padClass}>
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
    playModeOn: state.playModeOn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPad: (e) => dispatch(addPad(e)),
    removePad: (e) => dispatch(removePad(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pad);
