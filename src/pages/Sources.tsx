import React, { useState } from 'react';
import { BookOpen, FileText, ExternalLink, Search, Filter, Archive, Globe, Users, Calendar } from 'lucide-react';

interface Source {
  id: string;
  title: string;
  author: string;
  type: 'primary' | 'secondary' | 'archive' | 'digital';
  category: 'official' | 'personal' | 'academic' | 'military';
  year: string;
  description: string;
  significance: string;
  availability: string;
  link?: string;
}

const sources: Source[] = [
  {
    id: 'cornwallis-dispatches',
    title: 'The Cornwallis Correspondence',
    author: 'Lord Cornwallis',
    type: 'primary',
    category: 'official',
    year: '1790-1792',
    description: 'Official dispatches and correspondence from Lord Cornwallis during his tenure as Governor-General, including detailed reports on military operations, diplomatic negotiations, and administrative decisions during the Third Anglo-Mysore War.',
    significance: 'Provides the British perspective on military strategy, political calculations, and the decision-making process that led to victory.',
    availability: 'British Library, India Office Records',
    link: '#'
  },
  {
    id: 'tipu-letters',
    title: 'Letters of Tipu Sultan',
    author: 'Tipu Sultan',
    type: 'primary',
    category: 'personal',
    year: '1790-1792',
    description: 'Personal correspondence and official letters from Tipu Sultan to various rulers, French allies, and military commanders, revealing his diplomatic efforts and military planning during the war.',
    significance: 'Offers insights into Tipu\'s strategic thinking, international diplomatic efforts, and personal response to military setbacks.',
    availability: 'Oriental Manuscripts Library, Hyderabad; British Library',
    link: '#'
  },
  {
    id: 'beatson-memoirs',
    title: 'A View of the Origin and Conduct of the War with Tippoo Sultaun',
    author: 'Alexander Beatson',
    type: 'primary',
    category: 'military',
    year: '1800',
    description: 'Detailed military account by a British officer who served in the campaigns, providing tactical analysis of battles, siege operations, and military innovations observed during the conflict.',
    significance: 'Contemporary military analysis with first-hand observations of Mysorean rocket artillery and British siege tactics.',
    availability: 'Public domain; digitized by Google Books',
    link: 'https://books.google.com'
  },
  {
    id: 'treaty-document',
    title: 'Treaty of Seringapatam - Original Document',
    author: 'East India Company Records',
    type: 'archive',
    category: 'official',
    year: '1792',
    description: 'The original treaty document signed on March 18, 1792, including all articles, territorial concessions, financial obligations, and security arrangements.',
    significance: 'The definitive legal document that ended the war and established new power dynamics in South India.',
    availability: 'National Archives of India; British Library Oriental and India Office Collections',
    link: '#'
  },
  {
    id: 'wilks-history',
    title: 'Historical Sketches of the South of India',
    author: 'Mark Wilks',
    type: 'secondary',
    category: 'academic',
    year: '1810-1817',
    description: 'Comprehensive historical analysis written by a British administrator who served in Mysore, providing detailed background on the political situation and comprehensive account of all four Anglo-Mysore Wars.',
    significance: 'One of the earliest comprehensive historical accounts, combining official records with local knowledge and personal observation.',
    availability: 'Public domain; multiple digital repositories',
    link: 'https://archive.org'
  },
  {
    id: 'kirkpatrick-letters',
    title: 'Select Letters of Tippoo Sultan',
    author: 'William Kirkpatrick (translator)',
    type: 'primary',
    category: 'personal',
    year: '1792',
    description: 'English translations of Tipu Sultan\'s correspondence with various Indian rulers, French officials, and Ottoman authorities, revealing his diplomatic strategy and international outlook.',
    significance: 'Demonstrates Tipu\'s efforts to build international alliances and his vision of anti-British resistance.',
    availability: 'British Library; digitized historical collections',
    link: '#'
  },
  {
    id: 'modern-analysis',
    title: 'Tipu Sultan: The Tiger of Mysore',
    author: 'Kate Brittlebank',
    type: 'secondary',
    category: 'academic',
    year: '1997',
    description: 'Modern scholarly analysis examining Tipu Sultan through multiple historical lenses, including recent archaeological evidence and previously unexplored source materials.',
    significance: 'Provides contemporary historical interpretation using modern analytical methods and newly available source materials.',
    availability: 'Academic libraries; commercial publication',
    link: '#'
  },
  {
    id: 'military-innovations',
    title: 'The Rockets of Tipu Sultan',
    author: 'A.P.J. Abdul Kalam',
    type: 'secondary',
    category: 'military',
    year: '2002',
    description: 'Technical analysis of Mysorean rocket technology by former President of India and missile scientist, examining the scientific principles and historical impact of Tipu\'s military innovations.',
    significance: 'Bridges historical research with scientific analysis to understand the technological achievements of Mysore.',
    availability: 'Universities Press India; various libraries',
    link: '#'
  }
];

export const Sources: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSources = sources.filter(source => {
    const matchesType = selectedType === 'all' || source.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || source.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      source.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      source.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      source.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesType && matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'primary': return FileText;
      case 'secondary': return BookOpen;
      case 'archive': return Archive;
      case 'digital': return Globe;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'primary': return 'bg-emerald-500';
      case 'secondary': return 'bg-blue-500';
      case 'archive': return 'bg-amber-500';
      case 'digital': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'official': return FileText;
      case 'personal': return Users;
      case 'academic': return BookOpen;
      case 'military': return Archive;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-mysore-950 mb-6">
            Primary Sources & References
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore authentic historical documents, contemporary accounts, and scholarly analyses 
            that provide deep insights into the Third Anglo-Mysore War from multiple perspectives.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search sources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mysore-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mysore-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="primary">Primary Sources</option>
                <option value="secondary">Secondary Sources</option>
                <option value="archive">Archival Documents</option>
                <option value="digital">Digital Collections</option>
              </select>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mysore-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="official">Official Records</option>
                <option value="personal">Personal Accounts</option>
                <option value="academic">Academic Works</option>
                <option value="military">Military Reports</option>
              </select>
            </div>
          </div>
        </div>

        {/* Source Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FileText className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
            <p className="text-2xl font-bold text-mysore-950">
              {sources.filter(s => s.type === 'primary').length}
            </p>
            <p className="text-gray-600">Primary Sources</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <p className="text-2xl font-bold text-mysore-950">
              {sources.filter(s => s.type === 'secondary').length}
            </p>
            <p className="text-gray-600">Secondary Sources</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Archive className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <p className="text-2xl font-bold text-mysore-950">
              {sources.filter(s => s.type === 'archive').length}
            </p>
            <p className="text-gray-600">Archival Documents</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-3" />
            <p className="text-2xl font-bold text-mysore-950">230+</p>
            <p className="text-gray-600">Years Covered</p>
          </div>
        </div>

        {/* Sources List */}
        <div className="space-y-6">
          {filteredSources.map((source, index) => {
            const TypeIcon = getTypeIcon(source.type);
            const CategoryIcon = getCategoryIcon(source.category);
            
            return (
              <div
                key={source.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full ${getTypeColor(source.type)} flex items-center justify-center flex-shrink-0`}>
                        <TypeIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif font-bold text-mysore-950 mb-2">{source.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {source.author}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {source.year}
                          </span>
                          <span className="flex items-center">
                            <CategoryIcon className="w-4 h-4 mr-1" />
                            {source.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    {source.link && (
                      <a
                        href={source.link}
                        className="flex items-center text-mysore-950 hover:text-gold-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-mysore-950 mb-2">Description</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">{source.description}</p>
                      
                      <h4 className="font-semibold text-mysore-950 mb-2">Availability</h4>
                      <p className="text-gray-600">{source.availability}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-mysore-950 mb-2">Historical Significance</h4>
                      <p className="text-gray-700 leading-relaxed">{source.significance}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(source.type)}`}>
                        {source.type.charAt(0).toUpperCase() + source.type.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500 capitalize">{source.category} Source</span>
                    </div>
                    {source.link && (
                      <a
                        href={source.link}
                        className="inline-flex items-center text-mysore-950 hover:text-gold-600 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Access Source
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSources.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No sources found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Research Guidelines */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-serif font-bold text-mysore-950 mb-6 text-center">Research Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-mysore-950 mb-3">Primary Source Evaluation</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Consider the author's perspective and potential biases</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Examine the context and circumstances of creation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cross-reference with multiple sources when possible</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Consider translation and transmission issues</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-mysore-950 mb-3">Secondary Source Analysis</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Evaluate the author's credentials and methodology</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Check citation of primary sources and evidence</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Consider the historiographical context and debates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Look for peer review and scholarly recognition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};