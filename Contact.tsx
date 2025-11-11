
import React from 'react';
import { Mail, Phone, GitHub, LinkedIn, Twitter } from './Icons';

interface ContactProps {
  details: {
    email: string;
    phone: string;
  };
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
  </h2>
);

const Contact: React.FC<ContactProps> = ({ details }) => {
  return (
    <section id="contact" className="py-16 text-center">
      <SectionTitle>Get In Touch</SectionTitle>
      <p className="max-w-2xl mx-auto text-lg text-text-secondary mb-8">
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to connect, or just say hello!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-10">
        <a href={`mailto:${details.email}`} className="flex items-center text-lg text-text-main hover:text-accent transition-colors">
          <Mail className="w-6 h-6 mr-3 text-accent" />
          {details.email}
        </a>
        <a href={`tel:${details.phone}`} className="flex items-center text-lg text-text-main hover:text-accent transition-colors">
          <Phone className="w-6 h-6 mr-3 text-accent" />
          +91 {details.phone}
        </a>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors"><GitHub className="w-8 h-8" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors"><LinkedIn className="w-8 h-8" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors"><Twitter className="w-8 h-8" /></a>
      </div>
    </section>
  );
};

export default Contact;
   