import React from 'react';

interface NotFoundProps { }

const NotFound: React.FC<NotFoundProps> = ({ }) => {
  return (
    <article className='h-screen grid items-center justify-center'>
      <h1 className='text-4xl font-bold text-center'>404 - Page Not Found</h1>
    </article>
  );
};

export default NotFound;
