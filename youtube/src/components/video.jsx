import React, { useEffect, useState } from "react";
import styles from "../styles/video.module.css";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Header from "./header";
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

  const allVideo = videos;
  return (
    <>
      <Header />
      <section className={styles.section}>
        {videos.map((video) => {
          return (
            <div key={`thumbnail-${video.id}`} className={styles.thumbnail}>
              <Link
                key={`link-${video.id}`}
                to={{
                  pathname: `/video-detail/${video.id}`,
                  state: {
                    video: video.id,
                    title: video.snippet.title,
                    description: video.snippet.description,

                    allVideo: allVideo,
                  },
                }}
              >
                <img
                  key={`image-${video.id}`}
                  src={video.snippet.thumbnails.medium.url}
                  alt="thumbnail"
                  className={styles.thumbnailImg}
                />
              </Link>
              <div key={`info-${video.id}`} className={styles.info}>
                <div
                  key={`profileImg-${video.id}`}
                  className={styles.profileImg}
                >
                  <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </div>
                <div key={`title-${video.id}`} className={styles.title}>
                  <span key={`font-${video.id}`} className={styles.font}>
                    {video.snippet.title}
                  </span>
                  <span
                    key={`infoFont-${video.id}`}
                    className={styles.infoFont}
                  >
                    {video.snippet.channelTitle}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Video;
