import React, { useState } from 'react';
import { Calendar, ChevronRight, Sword, Flag, Crown, Scroll } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: 'battle' | 'diplomatic' | 'political' | 'treaty';
  location?: string;
  significance: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: 'September 1790',
    title: 'War Begins',
    description: 'Tipu Sultan attacks British-allied territories in Travancore, leading to the formal declaration of war by the British East India Company.',
    type: 'political',
    location: 'Travancore',
    significance: 'Marked the beginning of the third major conflict between Mysore and British forces.'
  },
  {
    date: 'October 1790',
    title: 'Formation of the Triple Alliance',
    description: 'British East India Company formalizes alliance with the Nizam of Hyderabad and the Maratha Empire against Tipu Sultan.',
    type: 'diplomatic',
    significance: 'Created a formidable coalition that would prove decisive in the war outcome.'
  },
  {
    date: 'December 1790',
    title: 'Siege of Bangalore Begins',
    description: 'Lord Cornwallis leads British forces in the siege of Bangalore, one of Tipu\'s key strongholds in the region.',
    type: 'battle',
    location: 'Bangalore',
    significance: 'First major British offensive operation, demonstrating their improved military strategy.'
  },
  {
    date: 'March 1791',
    title: 'Fall of Bangalore',
    description: 'After months of siege, Bangalore falls to British forces, giving them control of a crucial strategic position.',
    type: 'battle',
    location: 'Bangalore',
    significance: 'Major victory that opened the path to Mysore\'s heartland and boosted British morale.'
  },
  {
    date: 'May 1791',
    title: 'Battle of Arakere',
    description: 'Tipu Sultan launches a major counteroffensive against British forces but suffers significant casualties.',
    type: 'battle',
    location: 'Arakere',
    significance: 'Demonstrated Tipu\'s continued resistance but revealed the growing strength of the alliance.'
  },
  {
    date: 'February 1792',
    title: 'First Siege of Seringapatam',
    description: 'British and allied forces begin the siege of Seringapatam, Tipu Sultan\'s capital and last major stronghold.',
    type: 'battle',
    location: 'Seringapatam',
    significance: 'The climactic military action that would determine the war\'s outcome.'
  },
  {
    date: 'March 18, 1792',
    title: 'Treaty of Seringapatam Signed',
    description: 'Tipu Sultan agrees to the Treaty of Seringapatam, ceding half his territories and paying substantial war indemnity.',
    type: 'treaty',
    location: 'Seringapatam',
    significance: 'Ended the war and significantly reduced Mysore\'s power, setting stage for future conflicts.'
  }
];

export const Timeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'battle': return Sword;
      case 'diplomatic': return Flag;
      case 'political': return Crown;
      case 'treaty': return Scroll;
      default: return Calendar;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'battle': return 'bg-red-500';
      case 'diplomatic': return 'bg-blue-500';
      case 'political': return 'bg-purple-500';
      case 'treaty': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-mysore-950 mb-6">
            War Timeline
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow the chronological progression of events from September 1790 to March 1792, 
            tracing the key battles, diplomatic moves, and decisive moments that shaped the conflict.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-mysore-200"></div>
              
              <div className="space-y-8">
                {timelineEvents.map((event, index) => {
                  const Icon = getEventIcon(event.type);
                  const isSelected = selectedEvent?.date === event.date;
                  
                  return (
                    <div
                      key={event.date}
                      className={`relative flex items-start space-x-6 cursor-pointer group transition-all duration-300 ${
                        isSelected ? 'transform scale-105' : ''
                      }`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      {/* Timeline marker */}
                      <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${getEventColor(event.type)} shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Event card */}
                      <div className={`flex-1 bg-white rounded-xl shadow-lg p-6 group-hover:shadow-xl transition-all duration-300 ${
                        isSelected ? 'ring-2 ring-gold-400 shadow-2xl' : ''
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-serif font-bold text-mysore-950 group-hover:text-gold-600 transition-colors">
                            {event.title}
                          </h3>
                          <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:text-gold-600 transition-all duration-300 ${
                            isSelected ? 'rotate-90' : ''
                          }`} />
                        </div>
                        <p className="text-sm font-medium text-gold-600 mb-2">{event.date}</p>
                        {event.location && (
                          <p className="text-sm text-gray-500 mb-3">📍 {event.location}</p>
                        )}
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {selectedEvent ? (
                <div className="bg-white rounded-xl shadow-xl p-8 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full ${getEventColor(selectedEvent.type)} flex items-center justify-center mr-4`}>
                      {React.createElement(getEventIcon(selectedEvent.type), { className: 'w-6 h-6 text-white' })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-mysore-950">{selectedEvent.title}</h3>
                      <p className="text-gold-600 font-medium">{selectedEvent.date}</p>
                    </div>
                  </div>
                  
                  {selectedEvent.location && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
                      <p className="text-gray-700">{selectedEvent.location}</p>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-500 mb-2">Event Description</p>
                    <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">Historical Significance</p>
                    <p className="text-gray-700 leading-relaxed">{selectedEvent.significance}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-xl p-8 text-center">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-bold text-gray-600 mb-2">Select an Event</h3>
                  <p className="text-gray-500">Click on any timeline event to see detailed information about its significance and impact.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-serif font-bold text-mysore-950 mb-6 text-center">Event Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Military Battles</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Diplomatic Events</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Political Changes</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Treaties & Agreements</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};