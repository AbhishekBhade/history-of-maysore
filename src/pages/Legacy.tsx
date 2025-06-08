import React from 'react';
import { Crown, Rocket, BookOpen, Landmark, Globe, Users, ArrowRight } from 'lucide-react';

export const Legacy: React.FC = () => {
  const legacyAspects = [
    {
      icon: Crown,
      title: 'Political Transformation',
      description: 'The war fundamentally altered the political landscape of South India, establishing British supremacy and reducing indigenous powers to subordinate status.',
      details: [
        'Marked the beginning of direct British control over large parts of South India',
        'Established the precedent for subsidiary alliances with Indian rulers',
        'Weakened the concept of independent Indian kingdoms',
        'Set the stage for the eventual annexation of Mysore in 1799'
      ]
    },
    {
      icon: Rocket,
      title: 'Military Innovation',
      description: 'Tipu Sultan\'s military innovations, particularly rocket artillery, influenced warfare tactics and technology development worldwide.',
      details: [
        'Mysorean rockets inspired British development of Congreve rockets',
        'Advanced metallurgy and gunpowder techniques spread to Europe',
        'Siege warfare tactics evolved based on lessons from Seringapatam',
        'Military engineering principles were adopted by colonial armies'
      ]
    },
    {
      icon: BookOpen,
      title: 'Cultural Impact',
      description: 'The war became a defining moment in Indian cultural memory, symbolizing resistance against foreign domination.',
      details: [
        'Tipu Sultan emerged as a symbol of anti-colonial resistance',
        'Literary works and folk tales preserved the memory of Mysorean valor',
        'Art and architecture from Tipu\'s era became cultural treasures',
        'The conflict inspired later independence movements'
      ]
    },
    {
      icon: Landmark,
      title: 'Administrative Changes',
      description: 'Post-war administrative reforms established new systems of governance that would define colonial rule in India.',
      details: [
        'Introduction of the Subsidiary Alliance system',
        'Revenue collection methods were standardized',
        'Legal frameworks were established for territorial control',
        'Diplomatic protocols for dealing with Indian rulers were codified'
      ]
    }
  ];

  const modernRelevance = [
    {
      title: 'Historical Research',
      description: 'Ongoing archaeological and historical research continues to reveal new insights about the war and its participants.',
      image: 'https://images.pexels.com/photos/8199165/pexels-photo-8199165.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Museum Collections',
      description: 'Artifacts from the war are preserved in museums worldwide, providing tangible connections to this pivotal period.',
      image: 'https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Educational Significance',
      description: 'The war serves as a case study in military history, colonial studies, and South Asian history curricula.',
      image: 'https://images.pexels.com/photos/5553049/pexels-photo-5553049.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-mysore-950 mb-6">
            Historical Legacy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Third Anglo-Mysore War left an indelible mark on Indian history, influencing political 
            structures, military technology, cultural memory, and the trajectory of colonial rule for generations to come.
          </p>
        </div>

        {/* Impact Overview */}
        <div className="bg-gradient-to-r from-mysore-900 to-mysore-700 text-white rounded-xl p-8 mb-16 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-2">Global Influence</h3>
              <p className="text-gray-200">Military innovations and diplomatic precedents influenced colonial practices worldwide</p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <p className="text-4xl font-serif font-bold text-gold-400">4+</p>
              <p className="text-gray-200">Generations affected by political and social changes</p>
            </div>
            <div>
              <Landmark className="w-12 h-12 mx-auto mb-4" />
              <p className="text-4xl font-serif font-bold text-gold-400">200+</p>
              <p className="text-gray-200">Years of continuing historical significance</p>
            </div>
          </div>
        </div>

        {/* Legacy Aspects */}
        <div className="space-y-12">
          {legacyAspects.map((aspect, index) => (
            <div
              key={aspect.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-mysore-600 rounded-full flex items-center justify-center mr-4">
                    <aspect.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-mysore-950">{aspect.title}</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{aspect.description}</p>
                <ul className="space-y-3">
                  {aspect.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <ArrowRight className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <aspect.icon className="w-24 h-24 text-mysore-600 mx-auto mb-6" />
                    <div className="w-32 h-32 bg-gradient-to-br from-mysore-100 to-gold-100 rounded-full mx-auto flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-mysore-600 to-gold-600 rounded-full opacity-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Relevance */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif font-bold text-mysore-950 text-center mb-12">Modern Relevance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modernRelevance.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-mysore-950 mb-3 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Significance */}
        <div className="mt-20 bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-serif font-bold text-mysore-950 text-center mb-8">Enduring Historical Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-mysore-950 mb-4">Immediate Consequences (1792-1799)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Dramatic reduction in Mysore's territorial extent and military capability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Financial strain leading to internal administrative challenges</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Strengthened British alliance system across South India</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Set the stage for the Fourth Anglo-Mysore War</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-mysore-950 mb-4">Long-term Impact (1800-Present)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Established template for British colonial expansion in India</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Influenced military technology development globally</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Contributed to anti-colonial narrative in Indian independence movement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Remains a subject of active historical research and debate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 bg-gradient-to-r from-mysore-950 to-mysore-800 text-white rounded-xl p-8 text-center">
          <blockquote className="text-2xl font-serif italic mb-6">
            "The Third Anglo-Mysore War was not merely a conflict between armies, but a clash between 
            two visions of India's future—one of indigenous sovereignty and another of colonial dominance."
          </blockquote>
          <cite className="text-gold-200 font-medium">— Modern Historical Analysis</cite>
        </div>
      </div>
    </div>
  );
};