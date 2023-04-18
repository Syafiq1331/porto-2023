import React from 'react';

interface FooterProps { }

const Footer: React.FC<FooterProps> = ({ }) => {
  const getYearAutomation = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <>
      <footer className="text-center my-6 text-slate-500/70">
        <hr className='w-24 mx-auto mb-4 ' />
        {getYearAutomation()} © Syafiq Rizky Fauzi
      </footer>
    </>
  );
};

export default Footer;
