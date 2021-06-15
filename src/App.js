import React, { useState, useEffect } from 'react';
import AppContainer from './containers/AppContainer/AppContainer';
import SearchContainer from './containers/SearchContainer/SearchContainer';
import SearchBar from './components/SearchBar/SearchBar';

import ListVideo from './components/ListVideo/ListVideo';
import VideoDetail from './components/VideoDetail/VideoDetail';
import useVideos from './hooks/useVideos';

const App = () => {

  const [videoSelected, setVideoSelected] = useState(null);
  const [videos, search] = useVideos('bulldings');


  useEffect(() => {
    setVideoSelected(videos[0]);
  }, [videos])
  
  const columns = (videoSelected != null) ? 'two' : 'one';
  const displayVideo = (!videoSelected) ? null : (<VideoDetail video={videoSelected} />);
  return (
    <AppContainer>
      <h2>Mini YouTube Page</h2>
      <div className="ui one columns grid" >
        <SearchContainer>
          <SearchBar onSubmit={search} />
        </SearchContainer>
      </div>
      <div className={`ui ${columns} columns grid`}>
        {displayVideo}
        <ListVideo
          videoSelected={videoSelected}
          items={videos}
          onVideoSelectEvent={(video) => setVideoSelected(video)}
        />
      </div>
    </AppContainer>
  );
}

export default App;
