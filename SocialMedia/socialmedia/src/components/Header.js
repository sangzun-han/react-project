import React from 'react';

function Header() {
  return (
    <div className='nav-container'>
      <div className='nav-1'>
        <img
          className='logo_instagram_txt'
          src='img/logo_text.png'
          alt='logo_text'
        />
      </div>
      <input
        id='searchInput'
        type='search'
        className='input-search'
        placeholder='검색'
      />
      <div className='nav-2'>
        <img src='img/home.png' alt='홈' />
        <img src='img/dm.png' alt='DM' />
        <img
          src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png'
          alt='탐색'
        />
        <img
          src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
          alt='하트'
        />
        <img
          classNameName='pic'
          src='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/71022783_513111249480681_2188078115513696256_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=7Rl_bMO8TN4AX9C-AKS&oh=64741fc0f2635ebb63f94d5285798e08&oe=5F6A0524'
          alt='마이페이지'
        />
      </div>
    </div>
  );
}

export default Header;
