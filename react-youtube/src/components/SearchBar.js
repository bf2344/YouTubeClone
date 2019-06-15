import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, FormGroup, Label, Input } from "reactstrap"

const FormWrapper = styled(FormGroup)`
    position: relative;
    span {
        color: red;
        font-size: 24px;
        font-weight: 700;
        position: absolute;
        right: 10px;
        top: -2px;
        :hover {
            color: darkred;
            cursor: pointer;
        }
    }
`

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
            <Form onSubmit={event => event.preventDefault()}>
            <FormWrapper>
              <Label for="youtubeSearch" hidden>Search Bar</Label>
              <Input type="text" 
              name="youtubeSearch" 
              id="youtubeSearch" 
              placeholder="Search Here" 
              value={this.state.term}
              onChange={this.handleInputChange}
              />
              <span onClick={() => this.setState({ term: "" })}>x</span>
            </FormWrapper>   
            </Form>
             )
    }
}



export default SearchBar