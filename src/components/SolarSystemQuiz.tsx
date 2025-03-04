import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, X, Award, HelpCircle } from 'lucide-react';
import { solarSystemData } from '../data/solarSystem';
import toast from 'react-hot-toast';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface SolarSystemQuizProps {
  onBack: () => void;
}

const SolarSystemQuiz = ({ onBack }: SolarSystemQuizProps) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Generate quiz questions
  useEffect(() => {
    const generateQuestions = (): QuizQuestion[] => {
      const quizQuestions: QuizQuestion[] = [
        {
          id: 1,
          question: "Which planet is known as the 'Red Planet'?",
          options: ["Venus", "Mars", "Jupiter", "Mercury"],
          correctAnswer: "Mars",
          explanation: "Mars is often called the 'Red Planet' because of its reddish appearance, which is due to iron oxide (rust) on its surface."
        },
        {
          id: 2,
          question: "Which planet has the most moons in our solar system?",
          options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
          correctAnswer: "Saturn",
          explanation: "Saturn has 82 confirmed moons, the most of any planet in our solar system."
        },
        {
          id: 3,
          question: "Which planet is the hottest in our solar system?",
          options: ["Mercury", "Venus", "Mars", "Jupiter"],
          correctAnswer: "Venus",
          explanation: "Despite being farther from the Sun than Mercury, Venus is the hottest planet due to its thick atmosphere that traps heat in a runaway greenhouse effect."
        },
        {
          id: 4,
          question: "Which planet rotates on its side?",
          options: ["Earth", "Mars", "Uranus", "Neptune"],
          correctAnswer: "Uranus",
          explanation: "Uranus rotates on its side with its axis pointing nearly towards the Sun, likely due to a collision with an Earth-sized object in the distant past."
        },
        {
          id: 5,
          question: "Which planet has the Great Red Spot?",
          options: ["Mars", "Venus", "Saturn", "Jupiter"],
          correctAnswer: "Jupiter",
          explanation: "The Great Red Spot is a persistent high-pressure storm on Jupiter that has been observed for at least 400 years."
        },
        {
          id: 6,
          question: "Which planet is the smallest in our solar system?",
          options: ["Mercury", "Mars", "Venus", "Earth"],
          correctAnswer: "Mercury",
          explanation: "Mercury is the smallest planet in our solar system with a diameter of only 4,879 km."
        },
        {
          id: 7,
          question: "Which planet has the strongest winds in our solar system?",
          options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
          correctAnswer: "Neptune",
          explanation: "Neptune has the strongest winds in the Solar System, reaching speeds of 2,100 km/h (1,300 mph)."
        },
        {
          id: 8,
          question: "Which planet has the most prominent ring system?",
          options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
          correctAnswer: "Saturn",
          explanation: "While several planets have rings, Saturn's ring system is by far the most extensive and visible."
        },
        {
          id: 9,
          question: "Which planet takes the longest to orbit the Sun?",
          options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
          correctAnswer: "Neptune",
          explanation: "Neptune takes about 165 Earth years to complete one orbit around the Sun."
        },
        {
          id: 10,
          question: "Which planet is known as Earth's 'sister planet' due to its similar size?",
          options: ["Mercury", "Venus", "Mars", "Jupiter"],
          correctAnswer: "Venus",
          explanation: "Venus is often called Earth's sister planet because it's similar in size, mass, density, and volume to Earth."
        }
      ];
      
      // Shuffle and return 5 random questions
      return quizQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
    };
    
    setQuestions(generateQuestions());
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    if (option === currentQuestion?.correctAnswer) {
      setScore(score + 1);
      toast.success('Correct answer!');
    } else {
      toast.error('Incorrect answer!');
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const restartQuiz = () => {
    // Shuffle questions again
    setQuestions(prev => [...prev].sort(() => 0.5 - Math.random()));
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
  };
  
  return (
    <motion.div 
      className="w-full h-full bg-gray-900 text-white overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={onBack}
              className="mr-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-bold">Solar System Quiz</h1>
          </div>
          
          {!quizCompleted && !isLoading && (
            <div className="text-sm font-medium">
              Question {currentQuestionIndex + 1}/{questions.length}
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400">Preparing your quiz...</p>
          </div>
        ) : quizCompleted ? (
          <motion.div 
            className="max-w-md mx-auto bg-gray-800 rounded-lg p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center">
              <Award size={64} className="text-yellow-400 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Quiz Completed!</h2>
              <p className="text-gray-300 mb-4">
                You scored {score} out of {questions.length}
              </p>
              
              {/* Score evaluation */}
              <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                <div 
                  className="h-4 rounded-full bg-blue-500"
                  style={{ width: `${(score / questions.length) * 100}%` }}
                ></div>
              </div>
              
              <p className="text-lg mb-6">
                {score === questions.length ? 
                  'Perfect score! You\'re a solar system expert!' :
                  score >= questions.length / 2 ?
                    'Good job! You know your planets well!' :
                    'Keep exploring to learn more about our solar system!'}
              </p>
              
              <div className="flex space-x-4">
                <button
                  onClick={restartQuiz}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={onBack}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  Back to Explorer
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {/* Question */}
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <HelpCircle size={24} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <h2 className="text-xl font-medium">{currentQuestion?.question}</h2>
                </div>
              </div>
              
              {/* Options */}
              <div className="space-y-3">
                {currentQuestion?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedOption === option
                        ? option === currentQuestion.correctAnswer
                          ? 'bg-green-600 text-white'
                          : 'bg-red-600 text-white'
                        : isAnswered && option === currentQuestion.correctAnswer
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {isAnswered && (
                        option === currentQuestion.correctAnswer ? (
                          <Check size={20} className="text-white" />
                        ) : selectedOption === option ? (
                          <X size={20} className="text-white" />
                        ) : null
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Explanation */}
              {isAnswered && (
                <motion.div 
                  className="mt-6 bg-gray-800 p-4 rounded-lg"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-medium mb-2">Explanation:</h3>
                  <p className="text-gray-300">{currentQuestion?.explanation}</p>
                </motion.div>
              )}
              
              {/* Next button */}
              {isAnswered && (
                <motion.div 
                  className="mt-6 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
};

export default SolarSystemQuiz;