import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import ServiceForm from './components/ServiceForm';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white relative overflow-x-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <Architecture />
          <ServiceForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;