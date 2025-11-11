
import React from 'react';
import { User, Calendar, Flag, Phone, Mail } from './Icons';

interface AboutProps {
  details: {
    dob: string;
    status: string;
    nationality: string;
  };
  bio: string;
  error: string | null;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
  </h2>
);

const DetailItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3">
    <span className="text-accent">{icon}</span>
    <p><span className="font-semibold text-white">{label}:</span> {value}</p>
  </div>
);


const About: React.FC<AboutProps> = ({ details, bio, error }) => {
  return (
    <section id="about" className="py-16">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <p className="text-lg leading-relaxed mb-6">{bio}</p>
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
        <div className="lg:col-span-2 bg-secondary p-6 rounded-lg border border-border-color">
          <h3 className="text-xl font-bold text-white mb-4">Personal Details</h3>
          <div className="space-y-4 text-text-secondary">
            <DetailItem icon={<Calendar />} label="Born" value={details.dob} />
            <DetailItem icon={<User />} label="Status" value={details.status} />
            <DetailItem icon={<Flag />} label="Nationality" value={details.nationality} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
   