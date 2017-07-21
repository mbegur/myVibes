import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SongForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: '', description: '', image: '',
      image_url: 'http://images.clipartpanda.com/musical-notes-symbols-tattoos-2597.jpg',
      track: '', user_id: this.props.id};
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
    this.setState({loading: true});
    formData.append("song[title]", this.state.title);
    formData.append("song[description]", this.state.description);
    formData.append("song[user_id]", this.state.user_id);
    formData.append("song[image]", this.state.image || this.state.image_url);
    if (this.state.track_url) {
      formData.append("song[track]", this.state.track_url);
    } else{
      formData.append("song[track]", this.state.track);
    }

    if (this.props.type === "upload") {
      this.props.createSong(formData)
      .then(this.setState({loading: true}))
      .fail(this.setState({loading: false}))
      .then(data => {
        this.props.history.push(`/song/${data.song.id}`);
      }).then(() => {
        this.props.closeModal();
      });
    } else {
      this.props.updateSong(this.state.id, formData)
      .then(this.setState({loading: true}))
      .then(data => {
        this.props.history.push(`/song/${data.song.id}`);
      }).then(() => {
        this.props.closeModal();
      });
    }
  }

  render(){
    let songWords;
    let imageWords;
    let buttonWords;
    if (this.props.type === "upload") {
      imageWords = "Choose Album Art";
      songWords = "Choose Song";
      buttonWords = "Upload Song!";
    } else if (this.props.type === "edit") {
      imageWords = "Edit Album Art (optional)";
      songWords = "Edit Song File (optional)";
      buttonWords = "Edit Song!";
    }
    let Loading;
    if (this.state.loading === true) {
      Loading = <div className="loader">Loading...</div>;
    }

    return(
      <section className='song-form-container'>
        {this.renderErrors()}
        { Loading }
        <form className="song-form">
          <div className='song-form-left'>
            <img src={this.state.image_url}
               alt="album-art" />
            <br />
            <p>{ imageWords }</p>
            <input type="file" disabled={this.state.loading} onChange={this.updateImage}/>
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
              className="song-description"
              cols="40" rows="5"></textarea>
              <hr />
            <p>{ songWords }</p> <input disabled={this.state.loading} className="file-button"
            type="file" onChange={this.updateTrack}/>
            <hr />
            <button disabled={this.state.loading}
                    onClick={this.handleSubmit}>{buttonWords}</button>
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(SongForm);
