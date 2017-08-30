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
    setTimeout(this.pageClick, 200);
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
      let mappedResults = songsSearched.slice(0,6).map((song, idx) => {
        return (<Link to={`/songs/${song.id}`} onClick={this.handleSubmit}>
          <li onClick={() => {
          this.setState({searchParams: ""});
          }} className="search-results" key={idx}>
            <div className='overall-search-item'>
              <div className='search-image'>
                <img className="search-image" height='40' width='40'src={song.image_file_name} alt="search-photo" />
              </div>
              <div className='search-info'>
                <span>{ song.title }</span>
                <span className='search-username'>{ song.user.username }</span>
              </div>
            
            </div>
          
          </li>
      </Link>);
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
