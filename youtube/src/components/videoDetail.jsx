import React from "react";
import Header from "./header";
import styles from "../styles/videoDetail.module.css";

const VideoDetail = (props) => {
  console.log(props.location.state.allVideo);
  return (
    <div>
      <Header />
      <section className={styles.videoDetail}>
        <article className={styles.player}>
          <div className={styles.videoWrap}>
            <iframe
              id="ytplayer"
              type="text/html"
              src={`https://www.youtube.com/embed/${props.location.state.video}`}
              frameBorder="0"
              allowFullScreen
              className={styles.iframe}
            />
          </div>

          <h3 className={styles.title}>{props.location.state.title}</h3>
          <p className={styles.desc}>{props.location.state.description}</p>
        </article>
        <article className={styles.subVideo}>
          {props.location.state.allVideo.map((video) => {
            return (
              <div className={styles.subVideoInfo}>
                <div className={styles.imgTitle}>
                  <img
                    key={`image-${video.id}`}
                    src={video.snippet.thumbnails.medium.url}
                    alt="thumbnail"
                    className={styles.thumbnailImg}
                    width={168}
                    height={94}
                  />
                  <p className={styles.subTitle}>{video.snippet.title}</p>
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
