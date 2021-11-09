import React from 'react';
import '../styles/reset.css';
import '../styles/main.css';
import '../styles/app.css';

const Main = () => {
  return (
    <div className='section'>
      <div className=''>
        <div className='title'>
          <h1>미니홈피</h1>
        </div>
      </div>
      <div className='grid_row'>
        <span className='recent'>최근 게시물</span>

        <div className='menu'>
          <div className='right'>
            <span>[스크랩] 싸이월드@@@@@</span>
            <span>[스크랩] 싸이월드@@@@@</span>
            <span>[스크랩] 싸이월드@@@@@</span>
            <span>[스크랩] 싸이월드@@@@@</span>
          </div>

          <table>
            <tbody>
              <tr>
                <td>다이어리 0/0</td>
                <td>쥬크박스 0/0</td>
              </tr>
              <tr>
                <td>사진첩 0/0</td>
                <td>갤러리 0/0</td>
              </tr>

              <tr>
                <td>게시판 0/0</td>
                <td>방명록 0/0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='miniroom'>
          <img src='./images/miniroom.gif' alt='' />
        </div>

        <div className='comment_input'>
          <span className='llchon'>일촌평</span>
          <input
            type='text'
            placeholder='일촌과 나누고 싶은 이야기를 남겨보세요~!'
          />
          <button className='btn'>작성</button>
        </div>

        <div className='comment'>
          <li>
            일촌평이 새로워 졌어요
            <span className='llchon_name'>
              (일촌명 <span className='name'>이름</span>)
            </span>
            <span className='date'>2021.01.21</span>
          </li>
          <div className='hr'></div>
          <li>
            일촌평이 새로워 졌어요
            <span className='llchon_name'>
              (일촌명 <span className='name'>이름</span>)
            </span>
            <span className='date'>2021.01.21</span>
          </li>
          <div className='hr'></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
