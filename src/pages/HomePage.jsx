import React from 'react';
import Headers from '../components/Header';
import Welcome from '../components/Welcome';
import Project from '../components/Project';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function HomePage() {
  return (
    <>
      <Headers />
      <Welcome />
      <Project />
      <Education />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
