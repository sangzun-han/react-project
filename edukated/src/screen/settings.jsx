import React, { useEffect } from 'react';

function Settings() {
  useEffect(() => {
    document.title = 'Settings';
  });

  return (
    <div className='app-page rel'>
      <h1 className='page-title s24 fontb c333'>Settings</h1>
    </div>
  );
}

export default Settings;
