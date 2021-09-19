import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);
  return (
    <div className='bg-gray-background'>
      <div className='mx-auth max-w-screen-lg'>
        <div className='text-center text-2xl'>Not Found!</div>
      </div>
    </div>
  );
}
