import React from 'react';
import { Camera, Map, Users, ShieldAlert } from 'lucide-react';

const FeatureCard = ({ title, desc, icon: Icon, color, rotate }: { title: string, desc: string, icon: any, color: string, rotate: string }) => (
  <div className={`relative group ${rotate} hover:rotate-0 transition-transform duration-300`}>
    <div className={`absolute inset-0 ${color} border-4 border-black translate-x-3 translate-y-3`} />
    <div className="relative bg-off-white border-4 border-black p-8 h-full flex flex-col justify-between">
      <div className="mb-6">
        <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full mb-4">
          <Icon size={32} />
        </div>
        <h3 className="font-poster text-4xl uppercase leading-none mb-2">{title}</h3>
        <div className="w-full h-2 bg-black my-4" style={{backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)', backgroundSize: '8px 8px'}}></div>
      </div>
      <p className="font-body font-bold text-lg leading-tight">{desc}</p>
    </div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-desi-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #000000 25%, #000000 75%, #000 75%, #000)',
        backgroundPosition: '0 0, 10px 10px',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="font-retro text-6xl md:text-9xl text-desi-yellow mb-4 drop-shadow-[4px_4px_0_#000]">
            POWER TO<br/>THE PEOPLE
          </h2>
          <div className="inline-block bg-desi-pink border-2 border-black px-6 py-2 font-poster text-xl text-white transform -rotate-3">
            HOW INDIZEN WORKS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <FeatureCard 
            title="Snap It" 
            desc="See a pothole? Broken light? Corruption? Take a photo. We verify metadata instantly." 
            icon={Camera} 
            color="bg-desi-pink"
            rotate="rotate-2"
          />
          <FeatureCard 
            title="Map It" 
            desc="Geotag the issue. Watch the map of India light up with citizen reports." 
            icon={Map} 
            color="bg-desi-orange"
            rotate="-rotate-1"
          />
          <FeatureCard 
            title="Expose" 
            desc="Upvote issues. Generate viral reports automatically sent to local authorities." 
            icon={ShieldAlert} 
            color="bg-desi-green"
            rotate="rotate-1"
          />
          <FeatureCard 
            title="Unite" 
            desc="Community scorecards for politicians. Hold them accountable with data." 
            icon={Users} 
            color="bg-desi-yellow"
            rotate="-rotate-2"
          />
        </div>
      </div>
    </section>
  );
};