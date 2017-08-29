import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { requestAllSongs } from '../../actions/song_actions';
import { selectAllSongs } from '../../reducers/selectors';

const mapStateToProps = state => ({
  songs: selectAllSongs(state)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
