
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
  </h2>
);

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="bg-secondary p-6 rounded-lg border border-border-color">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="bg-border-color text-text-main text-sm font-medium px-3 py-1 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skillsData = {
    'Frontend Development': ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'Tailwind CSS', 'Next.js'],
    'Backend Development': ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
    'Databases & DevOps': ['PostgreSQL', 'MongoDB', 'Docker', 'Git', 'CI/CD', 'AWS'],
    'Tools & Others': ['VS Code', 'Figma', 'Jira', 'Agile Methodologies'],
  };

  return (
    <section id="skills" className="py-16">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
   