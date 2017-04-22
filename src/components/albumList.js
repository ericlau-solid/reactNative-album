import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './albumDetail';

const requestUrl = 'http://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
