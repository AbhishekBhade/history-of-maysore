import React, { useState } from 'react';
import { Map, Sword, Shield, Target, Users, Calendar, MapPin } from 'lucide-react';

interface Battle {
  id: string;
  name: string;
  date: string;
  location: string;
  coordinates: { lat: number; lng: number };
  duration: string;
  forces: {
    mysore: { commander: string; strength: string; };
    alliance: { commander: string; strength: string; };
  };
  description: string;
  strategy: string;
  outcome: string;
  significance: string;
  casualties: {
    mysore: string;
    alliance: string;
  };
}

const battles: Battle[] = [
  {
    id: 'bangalore-siege',
    name: 'Siege of Bangalore',
    date: 'December 1790 - March 1791',
    location: 'Bangalore, Karnataka',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    duration: '3 months',
    forces: {
      mysore: { commander: 'Tipu Sultan', strength: '15,000 troops' },
      alliance: { commander: 'Lord Cornwallis', strength: '21,000 troops' }
    },
    description: 'The Siege of Bangalore was the first major offensive operation by the British-led coalition forces. Lord Cornwallis methodically invested the city, using superior artillery and disciplined siege tactics to gradually wear down the Mysorean defenders.',
    strategy: 'British employed systematic siege warfare with parallel trenches, heavy artillery bombardment, and coordinated assaults. Mysore defenders utilized innovative rocket artillery and guerrilla tactics to harass besieging forces.',
    outcome: 'British victory after 3 months of siege warfare. Fall of Bangalore opened the route to Mysore heartland.',
    significance: 'Demonstrated British military superiority and marked the beginning of systematic territorial conquest in the war.',
    casualties: {
      mysore: '3,000+ killed/wounded',
      alliance: '1,200 killed/wounded'
    }
  },
  {
    id: 'arakere-battle',
    name: 'Battle of Arakere',
    date: 'May 15, 1791',
    location: 'Arakere, Karnataka',
    coordinates: { lat: 13.0827, lng: 77.4885 },
    duration: '1 day',
    forces: {
      mysore: { commander: 'Tipu Sultan', strength: '35,000 troops' },
      alliance: { commander: 'Lord Cornwallis', strength: '25,000 troops' }
    },
    description: 'Tipu Sultan launched a major counteroffensive to relieve pressure on his territories. This battle showcased the tactical brilliance of both commanders and the devastating effectiveness of Mysorean rocket artillery.',
    strategy: 'Mysore forces attempted a surprise dawn attack using massed cavalry and rocket artillery. British formed defensive squares and used disciplined musket volleys to repel attacks.',
    outcome: 'Tactical British victory, but at heavy cost. Tipu Sultan withdrew in good order.',
    significance: 'Demonstrated Tipu\'s continued military capability and the effectiveness of Mysorean rocket technology.',
    casualties: {
      mysore: '4,500 killed/wounded',
      alliance: '2,800 killed/wounded'
    }
  },
  {
    id: 'seringapatam-siege',
    name: 'Siege of Seringapatam',
    date: 'February 5 - March 18, 1792',
    location: 'Seringapatam, Karnataka',
    coordinates: { lat: 12.4183, lng: 76.6947 },
    duration: '6 weeks',
    forces: {
      mysore: { commander: 'Tipu Sultan', strength: '30,000 defenders' },
      alliance: { commander: 'Lord Cornwallis', strength: '45,000 troops' }
    },
    description: 'The climactic siege that ended the Third Anglo-Mysore War. Seringapatam, Tipu\'s island fortress capital, was considered impregnable but fell to coordinated British assault after weeks of bombardment.',
    strategy: 'Multi-pronged assault with coordinated river crossings, artillery bombardment of key fortifications, and simultaneous attacks from multiple directions. Mysore defenders employed water obstacles and concentrated firepower.',
    outcome: 'Decisive British victory leading to Treaty of Seringapatam.',
    significance: 'Ended Tipu Sultan\'s resistance and established British dominance in South India.',
    casualties: {
      mysore: '8,000+ killed/wounded/captured',
      alliance: '3,500 killed/wounded'
    }
  }
];

export const Battles: React.FC = () => {
  const [selectedBattle, setSelectedBattle] = useState<Battle>(battles[0]);

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-mysore-950 mb-6">
            Major Battles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the decisive military engagements that determined the outcome of the Third Anglo-Mysore War, 
            from strategic sieges to pitched battles that showcased military innovation and tactical brilliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Battle Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-serif font-bold text-mysore-950 mb-6 flex items-center">
                <Sword className="w-6 h-6 mr-2 text-gold-600" />
                Battle List
              </h3>
              <div className="space-y-4">
                {battles.map((battle) => (
                  <button
                    key={battle.id}
                    onClick={() => setSelectedBattle(battle)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedBattle.id === battle.id
                        ? 'bg-mysore-50 border-2 border-mysore-400 shadow-md'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <h4 className="font-semibold text-mysore-950 mb-1">{battle.name}</h4>
                    <p className="text-sm text-gray-600 mb-1 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {battle.date}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {battle.location}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Battle Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in">
              {/* Header */}
              <div className="bg-gradient-to-r from-mysore-900 to-mysore-700 text-white p-8">
                <h2 className="text-3xl font-serif font-bold mb-2">{selectedBattle.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedBattle.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedBattle.location}
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    {selectedBattle.duration}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-bold text-mysore-950 mb-4 flex items-center">
                    <Map className="w-5 h-5 mr-2 text-gold-600" />
                    Battle Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{selectedBattle.description}</p>
                </div>

                {/* Forces */}
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-bold text-mysore-950 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-gold-600" />
                    Opposing Forces
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-mysore-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-mysore-950 mb-3 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Kingdom of Mysore
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">Commander: {selectedBattle.forces.mysore.commander}</p>
                      <p className="text-sm text-gray-600">Strength: {selectedBattle.forces.mysore.strength}</p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-mysore-950 mb-3 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Allied Forces
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">Commander: {selectedBattle.forces.alliance.commander}</p>
                      <p className="text-sm text-gray-600">Strength: {selectedBattle.forces.alliance.strength}</p>
                    </div>
                  </div>
                </div>

                {/* Strategy */}
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-bold text-mysore-950 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-gold-600" />
                    Military Strategy
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{selectedBattle.strategy}</p>
                </div>

                {/* Outcome & Casualties */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-mysore-950 mb-4">Battle Outcome</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedBattle.outcome}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-mysore-950 mb-4">Casualties</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mysore Forces:</span>
                        <span className="font-medium text-mysore-950">{selectedBattle.casualties.mysore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Allied Forces:</span>
                        <span className="font-medium text-mysore-950">{selectedBattle.casualties.alliance}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Historical Significance */}
                <div className="bg-gradient-to-r from-gold-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-bold text-mysore-950 mb-3">Historical Significance</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedBattle.significance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Military Innovations */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-serif font-bold text-mysore-950 mb-8 text-center">Military Innovations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-mysore-950 mb-2">Mysorean Rockets</h4>
              <p className="text-gray-600">Tipu Sultan's iron-cased rockets were among the most advanced weapons of their time, inspiring later British rocket development.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-mysore-950 mb-2">British Artillery</h4>
              <p className="text-gray-600">Systematic use of heavy siege artillery and coordinated bombardments proved decisive in fortress warfare.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-mysore-950 mb-2">Coalition Warfare</h4>
              <p className="text-gray-600">The Triple Alliance demonstrated effective coordination between multiple armies and different military traditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};