import React from 'react';
import './VideoItem.css';
class VideoItem extends React.Component {
    
    render() { 
        return ( 
        <div onClick={()=>this.props.onVideoSelect(this.props.video)}  className="item video-item"> 
            <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url}/> 
            <div className="content">
                <div className="header">
                    {this.props.video.snippet.title}
                </div>
            </div>       
        </div> 
        );
    }
};
 
export default VideoItem;