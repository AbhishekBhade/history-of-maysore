import React, { useState } from 'react';
import { Crown, Shield, Sword, Award, ChevronRight, Quote } from 'lucide-react';

interface KeyFigure {
  id: string;
  name: string;
  title: string;
  side: 'mysore' | 'british' | 'allies';
  imageUrl: string;
  birth: string;
  death?: string;
  role: string;
  biography: string;
  achievements: string[];
  quotes: string[];
  significance: string;
}

const keyFigures: KeyFigure[] = [
  {
    id: 'tipu-sultan',
    name: 'Tipu Sultan',
    title: 'Tiger of Mysore',
    side: 'mysore',
    imageUrl: 'https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&w=800',
    birth: '1750',
    death: '1799',
    role: 'Sultan of Mysore',
    biography: 'Tipu Sultan, known as the Tiger of Mysore, was the ruler of the Kingdom of Mysore and a pioneer of rocket artillery. He was one of the most formidable opponents the British East India Company faced in India. A patron of arts and technology, he introduced several administrative and military innovations. His fierce resistance to British colonialism made him a legendary figure in Indian history.',
    achievements: [
      'Pioneered military rocket technology',
      'Established diplomatic relations with France and Ottoman Empire',
      'Implemented administrative and agricultural reforms',
      'Built modern military infrastructure',
      'Promoted trade and commerce'
    ],
    quotes: [
      'Better to live one day as a tiger than a thousand years as a sheep',
      'I would rather live a single day as a lion than a hundred years as a jackal'
    ],
    significance: 'Represented indigenous resistance against colonial expansion and modernization efforts in 18th century India.'
  },
  {
    id: 'cornwallis',
    name: 'Lord Cornwallis',
    title: 'Governor-General of India',
    side: 'british',
    imageUrl: 'https://images.pexels.com/photos/8164742/pexels-photo-8164742.jpeg?auto=compress&cs=tinysrgb&w=800',
    birth: '1738',
    death: '1805',
    role: 'British Military Commander',
    biography: 'Charles Cornwallis, 1st Marquess Cornwallis, served as Governor-General of India during the Third Anglo-Mysore War. Despite his surrender at Yorktown during the American Revolution, he redeemed his reputation through successful military campaigns in India. He was known for his administrative reforms and military strategy.',
    achievements: [
      'Led successful campaign against Tipu Sultan',
      'Implemented Cornwallis Code legal reforms',
      'Established Permanent Settlement in Bengal',
      'Reformed British administrative system in India',
      'Negotiated Treaty of Seringapatam'
    ],
    quotes: [
      'The situation of affairs in this country is such as to require the most vigorous exertions',
      'We must establish our authority on a solid foundation'
    ],
    significance: 'Consolidated British power in South India and established lasting administrative frameworks for colonial rule.'
  },
  {
    id: 'nizam',
    name: 'Asaf Jah II',
    title: 'Nizam of Hyderabad',
    side: 'allies',
    imageUrl: 'https://images.pexels.com/photos/7134988/pexels-photo-7134988.jpeg?auto=compress&cs=tinysrgb&w=800',
    birth: '1734',
    death: '1803',
    role: 'Allied Ruler',
    biography: 'Asaf Jah II, also known as Nizam Ali Khan, was the Nizam of Hyderabad who played a crucial role in the Third Anglo-Mysore War as part of the Triple Alliance against Tipu Sultan. His decision to ally with the British significantly altered the balance of power in South India.',
    achievements: [
      'Formed strategic alliance with British East India Company',
      'Provided crucial military support against Tipu Sultan',
      'Maintained Hyderabad\'s independence through diplomacy',
      'Expanded Hyderabad\'s territorial control',
      'Established lasting relationship with British'
    ],
    quotes: [
      'Alliance with the Company serves our mutual interests',
      'The balance of power must be maintained in the Deccan'
    ],
    significance: 'His alliance with the British was pivotal in creating the coalition that ultimately defeated Tipu Sultan.'
  },
  {
    id: 'madhavrao',
    name: 'Madhavrao II Peshwa',
    title: 'Peshwa of Maratha Empire',
    side: 'allies',
    imageUrl: 'https://images.pexels.com/photos/6899329/pexels-photo-6899329.jpeg?auto=compress&cs=tinysrgb&w=800',
    birth: '1774',
    death: '1795',
    role: 'Maratha Leader',
    biography: 'Madhavrao II was the Peshwa of the Maratha Empire during the Third Anglo-Mysore War. Though young and largely under the influence of ministers, the Maratha participation in the Triple Alliance was significant in the coalition against Tipu Sultan.',
    achievements: [
      'Represented Maratha interests in Triple Alliance',
      'Contributed Maratha military forces to coalition',
      'Maintained Maratha territorial claims in South India',
      'Balanced Maratha relations with British and regional powers'
    ],
    quotes: [
      'The Maratha flag shall fly over our rightful territories',
      'Unity among Hindu powers is essential for our survival'
    ],
    significance: 'Maratha participation in the alliance demonstrated the complex regional politics and Hindu-Muslim dynamics of the period.'
  }
];

export const KeyFigures: React.FC = () => {
  const [selectedFigure, setSelectedFigure] = useState<KeyFigure>(keyFigures[0]);

  const getSideColor = (side: string) => {
    switch (side) {
      case 'mysore': return 'bg-mysore-600';
      case 'british': return 'bg-red-600';
      case 'allies': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  const getSideName = (side: string) => {
    switch (side) {
      case 'mysore': return 'Kingdom of Mysore';
      case 'british': return 'British East India Company';
      case 'allies': return 'British Allies';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-mysore-950 mb-6">
            Key Figures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the remarkable leaders, warriors, and strategists who shaped the course of the 
            Third Anglo-Mysore War through their decisions, courage, and political acumen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Figure Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-serif font-bold text-mysore-950 mb-6">Historical Figures</h3>
              <div className="space-y-3">
                {keyFigures.map((figure) => (
                  <button
                    key={figure.id}
                    onClick={() => setSelectedFigure(figure)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                      selectedFigure.id === figure.id
                        ? 'bg-gold-50 border-2 border-gold-400 shadow-md'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${getSideColor(figure.side)}`}></div>
                    <div className="flex-1">
                      <p className="font-semibold text-mysore-950">{figure.name}</p>
                      <p className="text-sm text-gray-600">{figure.title}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${
                      selectedFigure.id === figure.id ? 'rotate-90' : ''
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Figure Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in">
              {/* Header */}
              <div className="relative h-64 bg-gradient-to-r from-mysore-900 to-mysore-700">
                <img
                  src={selectedFigure.imageUrl}
                  alt={selectedFigure.name}
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm mb-3 ${getSideColor(selectedFigure.side)}`}>
                    <Shield className="w-4 h-4 mr-2" />
                    {getSideName(selectedFigure.side)}
                  </div>
                  <h2 className="text-4xl font-serif font-bold mb-2">{selectedFigure.name}</h2>
                  <p className="text-xl text-gold-200">{selectedFigure.title}</p>
                  <p className="text-gray-300 mt-2">{selectedFigure.birth} - {selectedFigure.death || 'Present'}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Biography */}
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-mysore-950 mb-4 flex items-center">
                      <Crown className="w-6 h-6 mr-2 text-gold-600" />
                      Biography
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{selectedFigure.biography}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-mysore-950 mb-3 flex items-center">
                        <Sword className="w-5 h-5 mr-2 text-gold-600" />
                        Role in the War
                      </h4>
                      <p className="text-gray-700">{selectedFigure.role}</p>
                    </div>
                  </div>

                  {/* Achievements & Quotes */}
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-mysore-950 mb-4 flex items-center">
                      <Award className="w-6 h-6 mr-2 text-gold-600" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedFigure.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {selectedFigure.quotes.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-mysore-950 mb-3 flex items-center">
                          <Quote className="w-5 h-5 mr-2 text-gold-600" />
                          Notable Quotes
                        </h4>
                        {selectedFigure.quotes.map((quote, index) => (
                          <blockquote key={index} className="border-l-4 border-gold-400 pl-4 py-2 mb-3 italic text-gray-700">
                            "{quote}"
                          </blockquote>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Historical Significance */}
                <div className="mt-8 p-6 bg-gradient-to-r from-gold-50 to-emerald-50 rounded-lg">
                  <h3 className="text-xl font-serif font-bold text-mysore-950 mb-3">Historical Significance</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedFigure.significance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alliance Overview */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-serif font-bold text-mysore-950 mb-8 text-center">The Opposing Forces</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-mysore-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-mysore-950 mb-2">Kingdom of Mysore</h4>
              <p className="text-gray-600">Led by Tipu Sultan, representing indigenous resistance against colonial expansion</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-mysore-950 mb-2">British East India Company</h4>
              <p className="text-gray-600">Colonial trading company expanding territorial control under Lord Cornwallis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sword className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-mysore-950 mb-2">The Triple Alliance</h4>
              <p className="text-gray-600">Coalition of British, Nizam of Hyderabad, and Maratha Empire forces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};