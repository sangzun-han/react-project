import React, { useState } from "react";
import Course1 from "../image/course1.png";

function Course(props) {
  const [course, setCourse] = useState({
    ID: 1,
    title:
      "Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
    about:
      "In this course i'll teach you how to make your illustration llok really good. We're gonna study a lot of cases here, setting your wor panel, making some awesome actions and presets for future. Hope you'll get some really useful stuff out of this course, Good Luck!!",
    tutor: {
      ID: 1,
      name: "Lana Marandina",
      username: "@lanamara",
      dp: "http://placeimg.com/100/100/people?tutor" + 1,
    },
    duration: "82min",
    poster: Course1,
    videos: [
      {
        ID: 1,
        title: "Introduction",
        duration: "03 min 24 secs",
      },
      {
        ID: 2,
        title: "Getting Started",
        duration: "09 min 55 secs",
      },
      {
        ID: 3,
        title: "The Illustration",
        duration: "62 min 48 secs",
      },
    ],
  });

  const courseID = props.match.params.courseid;

  let courseVideos = [];

  for (let i = 0; i < course.videos.length; i++) {
    courseVideos.push(
      <a href="#" key={"course-video-" + i} className="noul aic rel flex">
        <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
        <div className="meta rel">
          <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
          <h1 className="s13 dur fontn c777">{course.videos[i].duration}</h1>
        </div>
      </a>
    );
  }

  return (
    <article className="course-page rel flex">
      <div className="course-info rel">
        <div className="tutor rel aic flex">
          <div className="pic">
            <img src={course.tutor.dp} className="bl" alt="" />
          </div>

          <div className="meta rel">
            <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
            <h2 className="s13 uname fontb c777">Course Tutor</h2>
          </div>
        </div>

        <div className="course-meta">
          <h2 className="s24 title fontb c333">{course.title}</h2>
          <p
            className="s18 about fontn c777"
            dangerouslySetInnerHTML={{ __html: course.about }}
          />
        </div>

        <div className="section section-b rel">
          <h2 className="title s24 fontb">
            Course
            <span className="fontn"> Achievements</span>
          </h2>
          <div className="course-stats flex aic">
            <div className="stats-box flex">
              <div className="ico s24 icon-star-full"></div>
              <h2 className="val s15 fontb">1800</h2>
              <h2 className="lbl s13 c777">potins</h2>
            </div>

            <div className="stats-box flex">
              <div className="ico s24 icon-stats-dots"></div>
              <h2 className="val s15 fontb">45.3</h2>
              <h2 className="lbl s13 c777">complete</h2>
            </div>

            <div className="stats-box flex">
              <div className="ico s24 icon-power"></div>
              <h2 className="val s15 fontb">+26</h2>
              <h2 className="lbl s13 c777">level</h2>
            </div>
          </div>
        </div>

        <div className="section section-b rel">
          <h2 className="title s24 fontb">
            Course
            <span className="fontn"> Details</span>
          </h2>
          <div className="course-videos flex aic">{courseVideos}</div>
        </div>
      </div>
      <div className="course-preview rel">
        <div className="player rel">
          <video poster={course.poster} />
          <div className="ctrls abs aic flex">
            <button className="icon-pause2 s24 pp" />
            <div className="timer rel fontb s15 cfff">02:54 / 09:55</div>
            <div className="slider rel">
              <div className="prog rel">
                <div className="bar rel">
                  <div className="knob abs" />
                </div>
              </div>
            </div>
            <button className="icon-volume-medium s24 vol" />
            <button className="icon-enlarge2 s24 fs" />
          </div>
        </div>

        <div className="extra-block rel flex">
          <div className="chat rel">
            <div className="section section-b rel">
              <h2 className="title s24 fontb">
                Quick
                <span className="fontn"> Chat</span>
              </h2>
              <div className="messages flex aic">
                <div className="bubble rel">
                  <h2 className="txt ibl fontn s15 c333">I am newbie.</h2>
                </div>

                <div className="bubble rel">
                  <h2 className="txt ibl fontn s15 c333">
                    Love this course...
                  </h2>
                </div>
                <div className="bubble bubble-mine rel">
                  <h2 className="txt ibl fontn s15 c333">Hey</h2>
                </div>
                <div className="bubble bubble-mine rel">
                  <h2 className="txt ibl fontn s15 c333">
                    Dope Intro, thanks!@
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="now-watching rel">
            <div className="tooltip abs s13 fontb cfff">86 Live Now</div>
            <div className="section section-b rel">
              <h2 className="title s24 fontb">
                Now
                <span className="fontn"> Watching</span>
              </h2>
              <div className="you-list rel">
                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="http://placeimg.com/100/100/people?guest-1"
                      className="bl"
                      alt=""
                    />
                  </div>

                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Grey Montgommery</h2>
                    <h2 className="s13 uname fontb c777">@gregdomm</h2>
                  </div>
                </div>

                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="http://placeimg.com/100/100/people?guest-2"
                      className="bl"
                      alt=""
                    />
                  </div>

                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                    <h2 className="s13 uname fontb c777">@leilaearns</h2>
                  </div>
                </div>

                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="http://placeimg.com/100/100/people?guest-3"
                      className="bl"
                      alt=""
                    />
                  </div>

                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Monica Fury</h2>
                    <h2 className="s13 uname fontb c777">@moonica</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Course;
