
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-text-secondary border-t border-border-color">
      <p>&copy; {new Date().getFullYear()} Akhalesh Rajnath Shah. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
   