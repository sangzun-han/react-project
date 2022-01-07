import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/videoList/videoList";
import SearchHeader from "./components/searchHeader/searchHeader";
import VideoDetail from "./components/videoDetail/videoDetail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
    youtube.search(query).then((videos) => {
      setVideos(videos);
    });
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}

        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
          ;
        </div>
      </section>
    </div>
  );
}

export default App;
