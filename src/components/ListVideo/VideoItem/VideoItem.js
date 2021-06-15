import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {


  render () {
    const { content, onVideoSelected } = this.props;
    const { snippet } = content;
    return (
      <div
        className="item video-item" 
        onClick={() => onVideoSelected(content)}
      >
        <img className="ui small image" alt={snippet.title} src={snippet.thumbnails.default.url} />
        <div className="content">
          <div className="header">
            <h5>{snippet.title}</h5>
          </div>
        </div>
      </div>
    );  
  }
}

export default VideoItem;
