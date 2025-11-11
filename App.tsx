
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { generateBio } from './services/geminiService';

const App: React.FC = () => {
  const [bio, setBio] = useState<string>('Generating professional bio...');
  const [error, setError] = useState<string | null>(null);

  const personalDetails = {
    name: 'Akhalesh Rajnath Shah',
    dob: 'November 14, 2005',
    status: 'Unmarried',
    nationality: 'Indian',
    phone: '9023591323',
    email: 'akhaleshshah6@gmail.com',
    profileImage: "profileimage.jpeg"// The user provided image, re-uploaded for public access
  };

  useEffect(() => {
    const fetchBio = async () => {
      try {
        setError(null);
        const generatedBio = await generateBio(personalDetails.name);
        setBio(generatedBio);
      } catch (err) {
        console.error("Error generating bio:", err);
        setError("Could not generate bio at this time.");
        setBio("A passionate and dedicated software developer with a keen interest in building innovative and efficient web applications. Eager to learn new technologies and contribute to challenging projects.");
      }
    };

    fetchBio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-primary text-text-main font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header name={personalDetails.name} profileImage={personalDetails.profileImage} />
        <main className="py-12 md:py-16">
          <About details={personalDetails} bio={bio} error={error} />
          <Skills />
          <Projects />
          <Contact details={{email: personalDetails.email, phone: personalDetails.phone}} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
   