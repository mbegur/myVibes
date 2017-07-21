import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SongForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      image: '',
      image_url: 'http://images.clipartpanda.com/musical-notes-symbols-tattoos-2597.jpg',
      track: '',
      user_id: this.props.id};
    if (this.props.song) {
      this.state = this.props.song;
    }
    this.update = this.update.bind(this);
    this.setImage = this.setImage.bind(this);
    this.setTrack = this.setTrack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="upload-error" key={error}>{error}</li>);
        })
      );
    }
  }

  setImage(e) {
    const file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ image: file, image_url: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  setTrack(e) {
    const file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ track: file });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("song[title]", this.state.title);
    formData.append("song[description]", this.state.description);
    formData.append("song[user_id]", this.state.user_id);
    formData.append("song[image]", this.state.image || this.state.image_url);
    formData.append("song[track]", this.state.track);
    // if (this.state.track_url) {
    //   formData.append("song[track]", this.state.track_url);
    // } else{
    //   formData.append("song[track]", this.state.track);
    // }

      this.props.createSong(formData).then(data => {
        this.props.history.push(`/song/${data.song.id}`);
      });
      // .then(() => {
      //   this.props.closeModal();
      // });

  }

  render(){

    return(
      <section>
        {this.renderErrors()}
        <form className="overall">
          <div >
            <img src={this.state.image_url}
               alt="album-art" />
            <br />
            <p>Choose Cover Photo</p>
            <input type="file" onChange={this.setImage}/>
          </div>
          <div className='song-form-right'>
            <input
                  type="text"
                  value={this.state.title}
                  placeholder="Title"
                  onChange={this.update('title')}
                  className="song-input"
                />
              <hr />
            <textarea placeholder="Description"
              value={this.state.description}
              onChange={this.update('description')}
              cols="40" rows="5"></textarea>
              <hr />
            <p>Choose Song</p>
              <input type="file" onChange={this.setTrack}/>
            <hr />
            <button onClick={this.handleSubmit}>Upload</button>
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(SongForm);
