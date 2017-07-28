import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SongForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.song.title || "",
      description: this.props.song.description || "",
      image: '',
      image_url: this.props.song.image_url || 'https://res.cloudinary.com/mbegur/image/upload/v1501176247/musicfile-512_ek2s9d.png',
      track: "",
      user_id: this.props.id};
    // if (this.props.song.title) {
    //   this.state = this.props.song;
    // }


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

  componentWillUnmount() {
    this.props.clearErrors(this.props.errors);
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

    if (this.props.type === "upload") {
      this.props.createSong(formData)
      .then(data => {
        this.props.history.push(`/songs/${data.song.id}`);
      }).then(() => {
        this.props.closeModal();
      });
    } else {
      this.props.updateSong(this.props.song.id, formData)
      .then(() => {
        this.props.closeModal();
      });
    }

    // .then(() => {
    //   this.props.closeModal();
    // })

      // this.props.createSong(formData).then(data => {
      //   this.props.history.push(`/songs/${data.song.id}`);
      // });
      // .then(() => {
      //   this.props.closeModal();
      // });

  }

  render(){
    let header;
    let submit;
    if (this.props.type === "upload") {
      header = "Upload a Song";
      submit = "Upload";
    } else {
      header = "Edit Song";
      submit = "Edit";
    }
    return(
      <div className="overall-upload-form">
        <h1 className="upload-header">{header}</h1>
        <br />
        {this.renderErrors()}
        <form className="upload-form-box">
          <div className="upload-photo-form">
            {this.state.image_url.length > 0 ? <img height="200" width="200" src={this.state.image_url}
               alt="album-art" /> : <div></div>}
            <br />
            <p>Choose Cover Art</p>
            <input className="auth-input" type="file" onChange={this.setImage}/>
          </div>
          <div className='upload-form-right'>
            <input
                  type="text"
                  value={this.state.title}
                  placeholder="Title"
                  onChange={this.update('title')}
                  className="auth-input"
                />
            <textarea placeholder="Description"
              value={this.state.description}
              onChange={this.update('description')}
              cols="50" rows="3"
              className="auth-input"></textarea>

            <p>Choose Song</p>
              <input className="upload-input" type="file" onChange={this.setTrack}/>
              <button className="upload-form-but" onClick={this.handleSubmit}>{submit}</button>
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(SongForm);
