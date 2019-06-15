import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from "reactstrap"

class SearchBar extends Component {
    state = {
        term: ""
    }

    handleInputChange = event => {
        // update state of term 
        this.setState({ term: event.target.value });
        // run a YouTube search based on this term 
        this.props.searchYouTube(event.target.value);
    }

    render () {

        return (
            <Form onSubmit={}>
            <FormGroup>
              <Label for="youtubeSearch" hidden>Search Bar</Label>
              <Input type="text" 
              name="youtubeSearch" 
              id="youtubeSearch" 
              placeholder="Search Here" 
              value={this.state.term}
              onChange={this.handleInputChange}
              />
            </FormGroup>   
            </Form>
             )
    }
}



export default SearchBar