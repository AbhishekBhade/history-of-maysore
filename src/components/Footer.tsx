import React from 'react';
import { ExternalLink, BookOpen, Archive, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-mysore-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif font-bold mb-4">Third Anglo-Mysore War</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              An comprehensive historical archive documenting the pivotal conflict between 
              Tipu Sultan's Kingdom of Mysore and the British East India Company alliance 
              from 1790-1792.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Archive className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <BookOpen className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/timeline" className="hover:text-gold-400 transition-colors">War Timeline</a></li>
              <li><a href="/key-figures" className="hover:text-gold-400 transition-colors">Historical Figures</a></li>
              <li><a href="/battles" className="hover:text-gold-400 transition-colors">Major Battles</a></li>
              <li><a href="/treaty" className="hover:text-gold-400 transition-colors">Treaty Analysis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/sources" className="hover:text-gold-400 transition-colors flex items-center">
                  Primary Sources <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors flex items-center">
                  Academic Papers <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors flex items-center">
                  Museums <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li><a href="/quiz" className="hover:text-gold-400 transition-colors">Interactive Quiz</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Third Anglo-Mysore War Historical Archive. Educational resource for historical research and learning.</p>
        </div>
      </div>
    </footer>
  );
};