import React from 'react';
import '../styles/reset.css';
import '../styles/app.css';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='count mgauto'>
        <span className='today font'>
          TODAY : <span className='red'>0</span>
        </span>
        |<span className='total font'>TOTAL : 0</span>
      </div>
      <div className='profile_img mgauto'>
        <img src='./images/exam.gif' alt='profile_img' />
      </div>
      <div className='profile_desc mgauto'>
        <p>
          CYWORLD CYWORLD CYWORLD CYWORLD CYWORLD CYWORLD CYWORLD CYWORLD
          CYWORLDƒ
        </p>
      </div>
      <div className='edit mgauto'>
        <img src='./images/edit.gif' alt='' />
        <img src='./images/write.gif' alt='' />
      </div>

      <div className='user mgauto'>
        <div className='user_profile'>
          <span className='username font'>김김김</span>
          <span className='birth gender font'>(♂) 1990.01.01</span>
        </div>

        <div className='user_email font'>
          <span>hsjun1996@naver.com</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
