import React from 'react';
import { Hero } from './components/Hero';
import { VisionHero } from './components/VisionHero';
import { Manifesto } from './components/Manifesto';
import { Features } from './components/Features';
import { JoinMovement } from './components/JoinMovement';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LiveMap } from './components/LiveMap';
import { Articles } from './components/Articles';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden text-black font-body bg-off-white selection:bg-desi-pink selection:text-white">
      <Navbar />
      <main>
        <VisionHero />
        <Hero />
        <LiveMap />
        <Articles />
        <Manifesto />
        <Features />
        <JoinMovement />
      </main>
      <Footer />
    </div>
  );
};

export default App;