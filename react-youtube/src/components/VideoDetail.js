import React from 'react'

// pullimng props.selectedVideo off into the placeholders name 
const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) return <h2>Loading Spinner Goes Here</h2>;

    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`
    const title = selectedVideo.snippet.title
    const description = selectedVideo.snippet.description
    return (
        <section>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
            </div> 
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    )
}

export default VideoDetail