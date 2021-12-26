import React, { useEffect, useState } from "react";
import styles from "../styles/video.module.css";

const Video = () => {
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
  console.log(videos);
  return (
    <section className={styles.section}>
      {videos.map((video) => {
        return (
          <div className={styles.thumbnail}>
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
            <span className={styles.thumbnailTitle}>{video.snippet.title}</span>
          </div>
        );
      })}
    </section>
  );
};

export default Video;
