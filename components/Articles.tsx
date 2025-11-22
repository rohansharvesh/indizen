import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const ArticleCard = ({ category, title, source, link }: { category: string, title: string, source: string, link: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group relative cursor-pointer block">
    <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
    <div className="relative bg-white border-2 border-black p-6 h-full flex flex-col justify-between transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
      <div>
        <div className="flex justify-between items-start mb-4">
             <span className="bg-desi-yellow px-2 py-1 text-xs font-bold border border-black uppercase">{category}</span>
             <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 group-hover:rotate-0 duration-300" />
        </div>
        <h3 className="font-retro text-2xl md:text-3xl leading-tight mb-4 group-hover:text-desi-blue transition-colors">{title}</h3>
      </div>
      <div className="border-t border-black pt-4 mt-4 flex justify-between items-center">
         <span className="font-mono text-xs text-gray-500 uppercase">{source}</span>
         <span className="font-bold text-sm underline decoration-desi-pink">Read Article</span>
      </div>
    </div>
  </a>
);

export const Articles: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-off-white border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
              <h2 className="font-poster text-5xl md:text-7xl mb-2">KNOWLEDGE<br/>BASE</h2>
              <p className="font-body text-lg max-w-md">Understanding the problem is the first step to solving it. Read about the Latest research articles.</p>
           </div>
           <div className="hidden md:block">
              <BookOpen size={48} strokeWidth={1} />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           <ArticleCard 
             category="Governance"
             title="Crippled City Governments: India’s Governance Failure"
             source="Scroll.in"
             link="https://scroll.in/article/1032585/the-india-fix-crippled-city-governments-are-indias-biggest-governance-failure"
           />
           <ArticleCard 
             category="Vision 2047"
             title="A Reform Blueprint for Viksit Bharat"
             source="Business Today"
             link="https://www.businesstoday.in/magazine/cover-story/story/india-at-2047-a-reform-blueprint-of-100-ideas-to-power-the-journey-to-viksit-bharat-488464-2025-08-08"
           />
           <ArticleCard 
             category="Policy"
             title="Why India Needs Wide-Ranging Regulatory Reforms"
             source="Business Standard"
             link="https://www.business-standard.com/opinion/specials/best-of-bs-opinion-why-india-needs-wide-ranging-regulatory-reforms-125041701336_1.html"
           />
        </div>
      </div>
    </section>
  );
};
