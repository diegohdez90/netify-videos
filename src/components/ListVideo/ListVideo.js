import React from 'react';
import VideoItem from './VideoItem/VideoItem';

class ListVideo extends React.Component {


  render () {
    const { items, onVideoSelectEvent, videoSelected} = this.props;
    const columnLength = (!videoSelected) ? 'sixteen' : 'four';
    return (
      <div className={`${columnLength} wide column`}>
        <div className="ui relaxed divided list">
          {
            items.map((item) => {
              const id = ("videoId" in item.id) 
                ? item.id.videoId : (
                  ("channelId" in item.id) 
                    ? item.id.channelId : item.id.playlistId
                );
              return (
                <VideoItem
                  key={id}
                  onVideoSelected={onVideoSelectEvent}
                  content={item} />
              )
            })
          }
        </div>
      </div>
    );
  }

}

export default ListVideo;
