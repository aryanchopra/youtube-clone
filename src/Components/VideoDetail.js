import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Select Video to Watch!</div>
    }
    return <div>{video.snippet.title}</div>
}

export default VideoDetail;