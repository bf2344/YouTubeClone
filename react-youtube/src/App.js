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
    API.searchYouTube("NBA Finals")
    .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] }))
    .catch(err => console.log(err));
}

render () {

  return (
    <Container>
        <Row>
          <Col>
            <SearchBar />
        </Col>
      </Row>
      
      <Row>
        <Col md="8">
          <VideoDetail selectedVideo={this.state.selectedVideo} />

        </Col>
        <Col md="4">
          <VideoList>
           {this.state.videos.map(video => (
              <VideoListItem video={video} />
           ))}
          </VideoList>
        </Col>
      </Row>
    </Container>
      
    
  );

}
}


export default App;
