import React from 'react'

const VideoList = props => {
    return (
        <ul>{props.children}</ul>
    )
}

const VideoListItem = ({ video }) => {
    return (
       <li>
           <img src={video.snippet.thumbnails.medium.url} />
       </li>
    )
}

export { VideoList, VideoListItem };