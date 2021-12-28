import React, { useEffect } from 'react';

function Message() {
  useEffect(() => {
    document.title = 'Messages';
  });
  return (
    <div className='app-page rel'>
      <h1 className='page-title s24 fontb c333'>Message</h1>
    </div>
  );
}

export default Message;
