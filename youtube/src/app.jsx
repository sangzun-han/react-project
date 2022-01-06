import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/videoList/videoList";
import SearchHeader from "./components/searchHeader/searchHeader";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBWIoBHpp-7lbyWn3PihM59OVGIlGFShuY",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
