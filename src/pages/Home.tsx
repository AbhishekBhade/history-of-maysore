import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Map, FileText, Trophy, BookOpen } from 'lucide-react';

export const Home: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Interactive Timeline',
      description: 'Explore the chronological progression of events from 1790-1792',
      link: '/timeline',
    },
    {
      icon: Users,
      title: 'Key Figures',
      description: 'Detailed profiles of Tipu Sultan, Lord Cornwallis, and other major players',
      link: '/key-figures',
    },
    {
      icon: Map,
      title: 'Battle Maps',
      description: 'Strategic analysis of major battles and military campaigns',
      link: '/battles',
    },
    {
      icon: FileText,
      title: 'Treaty of Seringapatam',
      description: 'Complete analysis of the war-ending treaty and its implications',
      link: '/treaty',
    },
    {
      icon: Trophy,
      title: 'Historical Legacy',
      description: 'Long-term impact on Indian subcontinent and colonial history',
      link: '/legacy',
    },
    {
      icon: BookOpen,
      title: 'Primary Sources',
      description: 'Access to original documents, letters, and historical records',
      link: '/sources',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mysore-950 via-mysore-900 to-mysore-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              The Third Anglo-Mysore War
            </h1>
            <p className="text-xl md:text-2xl text-gold-200 mb-4 font-light">
              1790 — 1792
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              The pivotal conflict that shaped the destiny of South India, marking Tipu Sultan's 
              valiant resistance against British colonial expansion and the beginning of the end 
              for the Kingdom of Mysore.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/timeline"
                className="inline-flex items-center px-8 py-4 bg-gold-600 text-white font-semibold rounded-lg hover:bg-gold-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Timeline
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/key-figures"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gold-400 text-gold-400 font-semibold rounded-lg hover:bg-gold-400 hover:text-mysore-950 transition-all duration-300"
              >
                Meet the Leaders
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mysore-950 mb-6">
                A Defining Moment in Indian History
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Third Anglo-Mysore War represented a crucial turning point in the struggle 
                between indigenous resistance and colonial expansion in South India. Tipu Sultan, 
                the Tiger of Mysore, faced a formidable coalition of the British East India Company, 
                the Nizam of Hyderabad, and the Maratha Empire.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This comprehensive archive presents the war through multiple lenses: military 
                strategy, diplomatic maneuvering, cultural impact, and lasting historical 
                significance. Discover the complex web of alliances, the innovative military 
                tactics, and the human stories behind this pivotal conflict.
              </p>
              <Link
                to="/battles"
                className="inline-flex items-center text-mysore-950 font-semibold hover:text-gold-600 transition-colors"
              >
                Explore Battle Strategies
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-gold-50 to-emerald-50 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-serif font-bold text-mysore-950 mb-6">War at a Glance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Duration</span>
                    <span className="text-mysore-950 font-semibold">2 Years, 4 Months</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Start Date</span>
                    <span className="text-mysore-950 font-semibold">September 1790</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">End Date</span>
                    <span className="text-mysore-950 font-semibold">March 1792</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Major Battles</span>
                    <span className="text-mysore-950 font-semibold">12+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Outcome</span>
                    <span className="text-mysore-950 font-semibold">Treaty of Seringapatam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mysore-950 mb-4">
              Explore the Complete Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into every aspect of this historic conflict through our comprehensive 
              collection of interactive resources and detailed historical analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 text-mysore-950 group-hover:text-gold-600 transition-colors mb-6" />
                <h3 className="text-xl font-serif font-bold text-mysore-950 mb-3 group-hover:text-gold-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center text-mysore-950 group-hover:text-gold-600 font-medium transition-colors">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-mysore-950 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Test Your Knowledge
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Challenge yourself with our interactive quiz covering all aspects of the 
            Third Anglo-Mysore War, from military tactics to diplomatic negotiations.
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center px-10 py-4 bg-gold-600 text-white font-semibold rounded-lg hover:bg-gold-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
          >
            Take the Quiz
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};