import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy, Timer, BookOpen } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const questions: Question[] = [
  {
    id: 'q1',
    question: 'In which year did the Third Anglo-Mysore War begin?',
    options: ['1789', '1790', '1791', '1792'],
    correctAnswer: 1,
    explanation: 'The Third Anglo-Mysore War began in September 1790 when Tipu Sultan attacked British-allied territories in Travancore.',
    difficulty: 'easy'
  },
  {
    id: 'q2',
    question: 'Which treaty ended the Third Anglo-Mysore War?',
    options: ['Treaty of Mangalore', 'Treaty of Seringapatam', 'Treaty of Mysore', 'Treaty of Bangalore'],
    correctAnswer: 1,
    explanation: 'The Treaty of Seringapatam, signed on March 18, 1792, ended the Third Anglo-Mysore War with significant territorial and financial concessions by Tipu Sultan.',
    difficulty: 'easy'
  },
  {
    id: 'q3',
    question: 'Who led the British forces during the siege of Seringapatam?',
    options: ['Warren Hastings', 'Lord Cornwallis', 'Arthur Wellesley', 'Richard Wellesley'],
    correctAnswer: 1,
    explanation: 'Lord Cornwallis, the Governor-General of India, personally led the British and allied forces during the decisive siege of Seringapatam.',
    difficulty: 'medium'
  },
  {
    id: 'q4',
    question: 'Which three powers formed the Triple Alliance against Tipu Sultan?',
    options: [
      'British, French, Portuguese',
      'British, Marathas, Nizam of Hyderabad',
      'British, Dutch, Marathas',
      'Marathas, Nizam, French'
    ],
    correctAnswer: 1,
    explanation: 'The Triple Alliance consisted of the British East India Company, the Maratha Empire, and the Nizam of Hyderabad, creating a formidable coalition against Mysore.',
    difficulty: 'medium'
  },
  {
    id: 'q5',
    question: 'Approximately what percentage of his territory did Tipu Sultan lose according to the Treaty of Seringapatam?',
    options: ['25%', '33%', '50%', '75%'],
    correctAnswer: 2,
    explanation: 'Tipu Sultan was forced to cede nearly half (approximately 50%) of his dominions to the allied powers, severely reducing Mysore\'s territorial extent.',
    difficulty: 'medium'
  },
  {
    id: 'q6',
    question: 'What military innovation was Tipu Sultan particularly famous for?',
    options: ['Heavy cavalry', 'Naval warfare', 'Rocket artillery', 'Siege engines'],
    correctAnswer: 2,
    explanation: 'Tipu Sultan was renowned for his iron-cased rockets, which were among the most advanced military technologies of the time and later influenced British rocket development.',
    difficulty: 'easy'
  },
  {
    id: 'q7',
    question: 'How much war indemnity did Tipu Sultan have to pay according to the treaty?',
    options: ['1 crore rupees', '2.5 crore rupees', '3.3 crore rupees', '5 crore rupees'],
    correctAnswer: 2,
    explanation: 'The treaty required Tipu Sultan to pay 3 crores and 30 lakhs (3.3 crore)rupees as war indemnity, a massive sum that severely strained Mysore\'s finances.',
    difficulty: 'hard'
  },
  {
    id: 'q8',
    question: 'What personal sacrifice did Tipu Sultan have to make as part of the treaty?',
    options: [
      'Abdicate his throne',
      'Convert to Christianity',
      'Give two of his sons as hostages',
      'Exile himself from Mysore'
    ],
    correctAnswer: 2,
    explanation: 'As security for treaty compliance, Tipu Sultan was forced to give two of his sons as hostages to the British, a deeply personal and humiliating condition.',
    difficulty: 'medium'
  },
  {
    id: 'q9',
    question: 'Which major fortress city fell to the British in March 1791?',
    options: ['Seringapatam', 'Bangalore', 'Mysore', 'Coimbatore'],
    correctAnswer: 1,
    explanation: 'Bangalore fell to British forces in March 1791 after a prolonged siege, opening the route to Mysore\'s heartland and marking a major British victory.',
    difficulty: 'medium'
  },
  {
    id: 'q10',
    question: 'The Third Anglo-Mysore War directly led to which subsequent conflict?',
    options: [
      'First Anglo-Maratha War',
      'Fourth Anglo-Mysore War',
      'Second Anglo-Sikh War',
      'Carnatic Wars'
    ],
    correctAnswer: 1,
    explanation: 'The weakened state of Mysore after the Third Anglo-Mysore War set the stage for the Fourth Anglo-Mysore War (1798-1799), which resulted in Tipu Sultan\'s death and the end of Mysore as an independent kingdom.',
    difficulty: 'hard'
  }
];

export const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizCompleted) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      setEndTime(new Date());
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizCompleted(false);
    setStartTime(new Date());
    setEndTime(null);
  };

  const startQuiz = () => {
    setStartTime(new Date());
    setShowResults(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return 'Excellent! You\'re a true expert on the Third Anglo-Mysore War!';
    if (percentage >= 80) return 'Great job! You have a solid understanding of this historical period.';
    if (percentage >= 70) return 'Good work! You know the basics well.';
    if (percentage >= 60) return 'Not bad! Consider reviewing some key details.';
    return 'Keep studying! This is a complex historical topic worth exploring further.';
  };

  const getTimeTaken = () => {
    if (!startTime || !endTime) return 0;
    return Math.round((endTime.getTime() - startTime.getTime()) / 1000);
  };

  if (!startTime && !showResults) {
    return (
      <div className="min-h-screen py-20 bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-xl p-12 animate-fade-in">
            <Trophy className="w-20 h-20 text-gold-600 mx-auto mb-6" />
            <h1 className="text-4xl font-serif font-bold text-mysore-950 mb-6">
              Third Anglo-Mysore War Quiz
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Test your knowledge of this pivotal conflict in Indian history. The quiz covers 
              key events, figures, battles, and consequences of the war.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-mysore-600 mx-auto mb-2" />
                <p className="font-semibold text-mysore-950">10 Questions</p>
                <p className="text-sm text-gray-600">Multiple choice</p>
              </div>
              <div className="text-center">
                <Timer className="w-8 h-8 text-mysore-600 mx-auto mb-2" />
                <p className="font-semibold text-mysore-950">No Time Limit</p>
                <p className="text-sm text-gray-600">Take your time</p>
              </div>
              <div className="text-center">
                <Trophy className="w-8 h-8 text-mysore-600 mx-auto mb-2" />
                <p className="font-semibold text-mysore-950">Instant Results</p>
                <p className="text-sm text-gray-600">With explanations</p>
              </div>
            </div>
            <button
              onClick={startQuiz}
              className="inline-flex items-center px-8 py-4 bg-mysore-950 text-white font-semibold rounded-lg hover:bg-mysore-800 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              Start Quiz
              <Trophy className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const timeTaken = getTimeTaken();
    
    return (
      <div className="min-h-screen py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8 text-center animate-fade-in">
            <Trophy className="w-16 h-16 text-gold-600 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-bold text-mysore-950 mb-4">Quiz Complete!</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-mysore-950">{score}/{questions.length}</p>
                <p className="text-gray-600">Correct Answers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-mysore-950">{Math.round((score / questions.length) * 100)}%</p>
                <p className="text-gray-600">Score</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-mysore-950">{Math.floor(timeTaken / 60)}:{(timeTaken % 60).toString().padStart(2, '0')}</p>
                <p className="text-gray-600">Time Taken</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-6">{getScoreMessage(score)}</p>
            <button
              onClick={resetQuiz}
              className="inline-flex items-center px-6 py-3 bg-mysore-950 text-white font-semibold rounded-lg hover:bg-mysore-800 transition-colors"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Retake Quiz
            </button>
          </div>

          {/* Detailed Results */}
          <div className="space-y-6">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="bg-white rounded-xl shadow-lg p-6 animate-slide-up">
                  <div className="flex items-start space-x-4 mb-4">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-mysore-950 mb-2">
                        Question {index + 1}: {question.question}
                      </h3>
                      <div className="space-y-2 mb-4">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-lg border ${
                              optionIndex === question.correctAnswer
                                ? 'bg-green-50 border-green-300 text-green-800'
                                : optionIndex === userAnswer && !isCorrect
                                ? 'bg-red-50 border-red-300 text-red-800'
                                : 'bg-gray-50 border-gray-200'
                            }`}
                          >
                            {option}
                            {optionIndex === question.correctAnswer && (
                              <span className="ml-2 text-green-600 font-medium">✓ Correct</span>
                            )}
                            {optionIndex === userAnswer && !isCorrect && (
                              <span className="ml-2 text-red-600 font-medium">✗ Your answer</span>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800 leading-relaxed">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-mysore-950">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-600 capitalize">
              {currentQ.difficulty} difficulty
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-mysore-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-serif font-bold text-mysore-950 mb-6">
            {currentQ.question}
          </h2>
          
          <div className="space-y-4 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-mysore-500 bg-mysore-50 text-mysore-950'
                    : 'border-gray-200 hover:border-mysore-300 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="px-6 py-3 bg-mysore-950 text-white rounded-lg hover:bg-mysore-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
            </button>
          </div>
        </div>

        {/* Question Overview */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-mysore-950 mb-4">Question Overview</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                  index === currentQuestion
                    ? 'bg-mysore-950 text-white'
                    : selectedAnswers[index] !== undefined
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};