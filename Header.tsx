import React from 'react';

interface HeaderProps {
  name: string;
  profileImage: string;
}

const Header: React.FC<HeaderProps> = ({ name, profileImage }) => {
  return (
    <header className="pt-16 md:pt-24 pb-12 text-center border-b border-border-color">
      <img
        src={profileImage}
        alt={name}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 ring-4 ring-border-color p-1 transition-all duration-300 ease-in-out hover:scale-105 hover:ring-accent"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{name}</h1>
      <p className="mt-3 text-lg md:text-xl text-accent">Software Developer | Web Enthusiast</p>
    </header>
  );
};

export default Header;