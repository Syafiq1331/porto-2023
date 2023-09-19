import React from 'react';

interface FooterProps { }

const Footer: React.FC<FooterProps> = ({ }) => {
  const getYearAutomation = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <>
      <footer className="text-center py-6 text-slate-500/70 dark:bg-slate-700 dark:text-white">
        <hr className='w-24 mx-auto pb-4 ' />
        {getYearAutomation()} © Syafiq Rizky Fauzi
      </footer>
    </>
  );
};

export default Footer;
