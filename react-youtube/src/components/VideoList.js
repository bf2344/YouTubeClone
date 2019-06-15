import React from 'react'
import styled from "styled-components"

const List = styled.ul`
    list-style: none;
    padding-left: 0;
`

const ListItem = styled.li`
    margin-bottom: 1em;
    img {
        border: ${props => props.active ? "5px solid orange" : "2px solid grey"};
        border-radius: 10px;
        cursor: pointer;
        :hover{
            border-color: blue;
        }
    }
`

const VideoList = props => {
    return (
        <List>{props.children}</List>
    )
}

const VideoListItem = ({ video, selectedVideo }) => {
    return (
       <ListItem active={video === selectedVideo}>
           <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
       </ListItem>
    )
}

export { VideoList, VideoListItem };