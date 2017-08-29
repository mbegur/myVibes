import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pageClick = this.pageClick.bind(this);
    this.clearField = this.clearField.bind(this);
  }

  pageClick(e) {
    // e.preventDefault;
    this.setState({
      searchParams: ""
    });
  }

  clearField(e) {
    e.currentTarget.value = "";
    setTimeout(this.pageClick, 100);
  }

  handleSubmit(e) {
    e.preventDefault;
    this.state = {
      searchParams:  ""
    };
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  searchedSongs() {
    let songsSearched = [];
    const { songs } = this.props;
    if (this.state.searchParams) {
      songs.forEach(song => {
        if (song.title.toString().toLowerCase().includes(this.state.searchParams.toString().toLowerCase())
          || song.user.username.toString().toLowerCase().includes(this.state.searchParams.toString().toLowerCase())) {
          songsSearched.push(song);
        }
      });
    }
    if (this.state.searchParams === "") {
      return [];
    }
    if (songsSearched && this.state.searchParams !== "") {
      let mappedResults = songsSearched.slice(0,10).map((song, idx) => {
        return ( <li onClick={() => {
          this.setState({searchParams: ""});
          }} className="search-results" key={idx}>
          <Link to={`/songs/${song.id}`} onClick={this.handleSubmit}>
            <img className="search-image" height='30' width='30'src={song.image_file_name} alt="search-photo" />
          </Link>
          <Link to={`/songs/${song.id}`} onClick={this.handleSubmit}> { song.title }</Link>
          { song.user.username }
        </li>);
      });
      return mappedResults;
    } else {
      return false;
    }
  }

  parseResults() {
    if (this.searchedSongs().length === 0) {
      return (
        <div></div>
      );
    } else {
      return (
        <div className="results">
          <ul>{this.searchedSongs()}</ul>
        </div>
      );
    }
  }

  render(){
      return (
        <div className="search-container">
          <div className="outer">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search"
                className="search-form"
                onChange={this.update('searchParams')}
                value={this.searchParams}
                onBlur={this.clearField}>
              </input>
            </div>
          </div>
          <div>
            {this.parseResults()}
          </div>
        </div>
      );
  }

}

export default SearchBar;
