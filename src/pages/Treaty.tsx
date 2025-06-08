import React, { useState } from 'react';
import { FileText, MapPin, Users, DollarSign, Crown, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface TreatyClause {
  id: string;
  title: string;
  content: string;
  impact: string;
  category: 'territorial' | 'financial' | 'political' | 'military';
}

const treatyClauses: TreatyClause[] = [
  {
    id: 'territorial-1',
    title: 'Territorial Cession',
    content: 'Tipu Sultan shall cede to the Company and its allies nearly half of his dominions, including the districts of Baramahal, Dindigul, and Salem to the Company; Dharwar and other districts to the Marathas; and certain territories to the Nizam.',
    impact: 'Reduced Mysore\'s territory by approximately 50%, severely limiting its strategic depth and economic resources.',
    category: 'territorial'
  },
  {
    id: 'financial-1',
    title: 'War Indemnity',
    content: 'The Sultan shall pay to the three allied powers the sum of three crores and thirty lakhs of rupees (approximately 33 million rupees) as compensation for the expenses of the war.',
    impact: 'Massive financial burden that crippled Mysore\'s treasury and ability to maintain military forces.',
    category: 'financial'
  },
  {
    id: 'political-1',
    title: 'Hostage Provision',
    content: 'As security for the performance of the treaty, Tipu Sultan shall deliver two of his sons as hostages to remain with the English until the full payment of the money stipulated.',
    impact: 'Humiliating personal cost for Tipu and guaranteed compliance with treaty terms through family leverage.',
    category: 'political'
  },
  {
    id: 'military-1',
    title: 'Military Restrictions',
    content: 'The Sultan shall not attack any of the allies or their tributaries, and shall not enter into any offensive alliance against the Company or its allies.',
    impact: 'Severely limited Mysore\'s ability to form alliances or conduct independent foreign policy.',
    category: 'military'
  },
  {
    id: 'political-2',
    title: 'Prisoner Exchange',
    content: 'All prisoners of war taken during the conflict shall be mutually released without ransom, including all British and Indian soldiers captured by either side.',
    impact: 'Restored military personnel to all parties but demonstrated the war\'s human cost.',
    category: 'political'
  },
  {
    id: 'territorial-2',
    title: 'Fortress Control',
    content: 'Several key fortresses including Krishnagiri shall be demolished, and certain strategic positions shall be retained by the allied forces as security.',
    impact: 'Eliminated key defensive positions and reduced Mysore\'s ability to defend its remaining territory.',
    category: 'territorial'
  }
];

export const Treaty: React.FC = () => {
  const [expandedClauses, setExpandedClauses] = useState<string[]>(['territorial-1']);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleClause = (clauseId: string) => {
    setExpandedClauses(prev => 
      prev.includes(clauseId) 
        ? prev.filter(id => id !== clauseId)
        : [...prev, clauseId]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'territorial': return MapPin;
      case 'financial': return DollarSign;
      case 'political': return Crown;
      case 'military': return Users;
      default: return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'territorial': return 'bg-green-500';
      case 'financial': return 'bg-yellow-500';
      case 'political': return 'bg-purple-500';
      case 'military': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredClauses = selectedCategory === 'all' 
    ? treatyClauses 
    : treatyClauses.filter(clause => clause.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-mysore-950 mb-6">
            Treaty of Seringapatam
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Signed on March 18, 1792
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            The definitive agreement that ended the Third Anglo-Mysore War, fundamentally altering the 
            balance of power in South India and setting the stage for British dominance in the region.
          </p>
        </div>

        {/* Treaty Overview */}
        <div className="bg-white rounded-xl shadow-xl mb-12 overflow-hidden">
          <div className="bg-gradient-to-r from-mysore-900 to-mysore-700 text-white p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">Treaty Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm opacity-90">Date Signed</p>
                <p className="font-semibold">March 18, 1792</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm opacity-90">Location</p>
                <p className="font-semibold">Seringapatam</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm opacity-90">Signatories</p>
                <p className="font-semibold">4 Powers</p>
              </div>
              <div className="text-center">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm opacity-90">Articles</p>
                <p className="font-semibold">12 Main Clauses</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-mysore-950 mb-4">Immediate Consequences</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-mysore-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mysore lost nearly half its territory</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-mysore-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Massive war indemnity of 33 million rupees</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-mysore-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Tipu's sons held as hostages</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-mysore-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Strategic fortresses demolished</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-mysore-950 mb-4">Long-term Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Established British hegemony in South India</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Weakened Mysore for future conflicts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Strengthened British-Maratha-Nizam alliance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Set precedent for future colonial treaties</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-mysore-950 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Clauses
            </button>
            {['territorial', 'financial', 'political', 'military'].map((category) => {
              const Icon = getCategoryIcon(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category
                      ? 'bg-mysore-950 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="capitalize">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Treaty Clauses */}
        <div className="space-y-6">
          {filteredClauses.map((clause) => {
            const Icon = getCategoryIcon(clause.category);
            const isExpanded = expandedClauses.includes(clause.id);
            
            return (
              <div
                key={clause.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleClause(clause.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full ${getCategoryColor(clause.category)} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-mysore-950">{clause.title}</h3>
                      <p className="text-sm text-gray-600 capitalize">{clause.category} provision</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="bg-gray-50 rounded-lg p-6 mb-4">
                      <h4 className="font-semibold text-mysore-950 mb-2">Treaty Text</h4>
                      <p className="text-gray-700 leading-relaxed italic">"{clause.content}"</p>
                    </div>
                    <div className="bg-gradient-to-r from-gold-50 to-emerald-50 rounded-lg p-6">
                      <h4 className="font-semibold text-mysore-950 mb-2">Historical Impact</h4>
                      <p className="text-gray-700 leading-relaxed">{clause.impact}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Signatories */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-serif font-bold text-mysore-950 mb-8 text-center">Treaty Signatories</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-mysore-950 mb-2">British East India Company</h4>
              <p className="text-gray-600">Represented by Lord Cornwallis, Governor-General of India</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-mysore-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-mysore-950 mb-2">Kingdom of Mysore</h4>
              <p className="text-gray-600">Tipu Sultan, Sultan of Mysore and Tiger of Mysore</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-mysore-950 mb-2">Nizam of Hyderabad</h4>
              <p className="text-gray-600">Asaf Jah II, Nizam-ul-Mulk of Hyderabad Deccan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-mysore-950 mb-2">Maratha Empire</h4>
              <p className="text-gray-600">Representatives of the Maratha Confederacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};