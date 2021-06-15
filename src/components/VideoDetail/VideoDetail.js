import React from 'react';

const VideoDetail = ({video}) => {
  const { snippet } = video;
  const embed = !("videoId" in video.id) ? null : (
    <div className="ui embed">
      <iframe title={snippet.title} src={`https://www.youtube.com/embed/${video.id.videoId}`} />
    </div>
    );
  return (
    <div className="twelve wide column">
      {embed}
      <div className="ui segment">
        <h4 className="ui header">{snippet.title}</h4>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
