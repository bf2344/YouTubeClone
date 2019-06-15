import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import API from './utils/API';
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import { VideoList, VideoListItem } from './components/VideoList'

class App extends Component {
state = {
  videos: [],
  selectedVideo: null

}

componentDidMount () {
  //call the youtube API 
  this.searchYouTube("Avengers EndGame")
}

searchYouTube = term => {
  API.searchYouTube(term)
  // our .then/.catch below capture the return value from the API call above 
  .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] }))
  .catch(err => console.log(err));
  
}

  onVideoSelect = (selectedVideo) => {
      this.setState({ selectedVideo });
  }

render () {

  return (
    <Container>
        <Row>
          <Col>
            <SearchBar searchYouTube={this.searchYouTube} />
        </Col>
      </Row>
      
      <Row>
        <Col md="8">

          <VideoDetail selectedVideo={this.state.selectedVideo} />

        </Col>
        <Col md="4">
          <VideoList>
           {this.state.videos.map(video => (
              <VideoListItem video={video} 
              key={video.id.videoId} 
              selectedVideo={this.state.selectedVideo}
              onVideoSelect={this.onVideoSelect}
              />
           ))}
          </VideoList>
        </Col>
      </Row>
    </Container>
      
    
  );

}
}


export default App;
