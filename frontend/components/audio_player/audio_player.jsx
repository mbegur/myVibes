import React from 'react';
import ReactDOM from 'react-dom';
import Audio from 'react-audioplayer';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.renderAudioPlayer = this.renderAudioPlayer.bind(this);
    this.remountCount = 0;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentSong !== this.props.currentSong) {
      if (this.audioComponent) {
        ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-pause'));
      }

      this.remountCount = (this.remountCount + 1) % 5;
    }
  }

  renderAudioPlayer() {
    const audioStyles = {
      width: `${screen.width}px`,
      position: 'fixed',
      bottom: '0',
      backgroundColor: 'black',
      opacity: '0.95',
      zIndex: '100'
    };

    return (
        <Audio
          key={this.remountCount}
          style={audioStyles}
          autoPlay={true}
          playlist={this.props.playlist}
          ref={audioComponent => {this.audioComponent = audioComponent;}}
        />
    );
  }

  render() {
    if (this.props.currentSong) {
      return this.renderAudioPlayer();
    }
    else {
      return (<span></span>);
    }
  }
}

export default AudioPlayer;
