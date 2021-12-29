import React from "react";
import Header from "./header";
import styles from "../styles/videoDetail.module.css";
import { Link } from "react-router-dom";

const VideoDetail = (props) => {
  const { video, title, description, allVideo } = props.location.state;
  console.log(props.location.state);
  return (
    <div>
      <Header />
      <section className={styles.videoDetail}>
        <article className={styles.player}>
          <div className={styles.videoWrap}>
            <iframe
              id="ytplayer"
              type="text/html"
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allowFullScreen
              className={styles.iframe}
            />
          </div>

          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
        </article>
        <article className={styles.subVideo}>
          {allVideo.map((video) => {
            return (
              <div className={styles.subVideoInfo}>
                <div className={styles.imgTitle}>
                  <Link
                    key={`link-${video.id}`}
                    to={{
                      pathname: `/video-detail/${video.id}`,
                      state: {
                        video: video,
                        title: title,
                        description: description,
                        allVideo: allVideo,
                      },
                    }}
                    className={styles.Link}
                  >
                    <img
                      key={`image-${video.id}`}
                      src={video.snippet.thumbnails.medium.url}
                      alt="thumbnail"
                      className={styles.thumbnailImg}
                      width={168}
                      height={94}
                    />
                    <p className={styles.subTitle}>{video.snippet.title}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </div>
  );
};

export default VideoDetail;
