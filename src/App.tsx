import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { 
  LucideGithub, 
  Sun, 
  Moon, 
  Home, 
  Info, 
  HelpCircle, 
  Menu, 
  X,
  Rocket
} from 'lucide-react';
import './App.css';

// Import components
import SolarSystem3D from './components/SolarSystem3D';
import PlanetDetail from './components/PlanetDetail';
import ControlPanel from './components/ControlPanel';
import PlanetMenu from './components/PlanetMenu';
import SolarSystemQuiz from './components/SolarSystemQuiz';

// Import data and types
import { solarSystemData, getPlanetById } from './data/solarSystem';
import { CelestialBodyData } from './types/solarSystem';

function App() {
  // App state
  const [view, setView] = useState<'system' | 'detail' | 'quiz'>('system');
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [showOrbits, setShowOrbits] = useState(true);
  const [isNightMode, setIsNightMode] = useState(true); // Default to night mode for better visuals
  const [isRealisticScale, setIsRealisticScale] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBody, setSelectedBody] = useState<CelestialBodyData | null>(null);
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle selecting a celestial body
  const handleSelectBody = (body: CelestialBodyData) => {
    setSelectedBody(body);
    setSelectedPlanet(body.id);
    setView('detail');
  };
  
  // Handle selecting a planet from the menu
  const handleSelectPlanet = (id: string) => {
    setSelectedPlanet(id);
    const planet = getPlanetById(id);
    if (planet) {
      setSelectedBody(planet);
    }
  };
  
  // Handle simulation speed change
  const handleSpeedChange = (speed: number) => {
    setSimulationSpeed(speed);
  };

  // Handle pause/play simulation
  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };
  
  // Handle back to system view
  const handleBackToSystem = () => {
    setView('system');
  };
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`app-container min-h-screen ${isNightMode ? 'bg-black' : 'bg-indigo-950'}`}>
      <Toaster position="top-center" />
      
      {isLoading ? (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
          <div className="w-24 h-24 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-6"></div>
          <h1 className="text-2xl font-bold text-white mb-2">Loading Solar System</h1>
          <p className="text-gray-300">Preparing for your cosmic journey...</p>
        </div>
      ) : (
        <>
          {/* Navigation */}
          <nav className={`w-full h-16 ${isNightMode ? 'bg-gray-900' : 'bg-indigo-900'} px-4 flex items-center justify-between shadow-lg z-30`}>
            <div className="flex items-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mr-2 text-yellow-400"
              >
                <span className="text-2xl">☀️</span>
              </motion.div>
              <h1 className="text-xl font-bold text-white">Solar System Explorer</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setView('system')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  view === 'system' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center">
                  <Home size={16} className="mr-1" />
                  <span>Explorer</span>
                </div>
              </button>
              
              {selectedBody && (
                <button 
                  onClick={() => setView('detail')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    view === 'detail' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center">
                    <Info size={16} className="mr-1" />
                    <span>{selectedBody.name}</span>
                  </div>
                </button>
              )}
              
              <button 
                onClick={() => setView('quiz')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  view === 'quiz' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center">
                  <HelpCircle size={16} className="mr-1" />
                  <span>Quiz</span>
                </div>
              </button>
              
              <button 
                onClick={() => setIsNightMode(!isNightMode)}
                className="p-2 rounded-full text-gray-300 hover:bg-gray-800 transition-colors"
                title={isNightMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isNightMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-full text-gray-300 hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className="fixed inset-0 bg-black bg-opacity-80 z-20 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={toggleMobileMenu}
              >
                <motion.div 
                  className="absolute right-0 top-16 w-64 bg-gray-900 h-auto py-4 px-2"
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  exit={{ x: 300 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-2">
                    <button 
                      onClick={() => {
                        setView('system');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center px-4 py-2 rounded-md text-left text-white hover:bg-gray-800"
                    >
                      <Home size={18} className="mr-2" />
                      Explorer
                    </button>
                    
                    {selectedBody && (
                      <button 
                        onClick={() => {
                          setView('detail');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center px-4 py-2 rounded-md text-left text-white hover:bg-gray-800"
                      >
                        <Info size={18} className="mr-2" />
                        {selectedBody.name} Details
                      </button>
                    )}
                    
                    <button 
                      onClick={() => {
                        setView('quiz');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center px-4 py-2 rounded-md text-left text-white hover:bg-gray-800"
                    >
                      <HelpCircle size={18} className="mr-2" />
                      Solar System Quiz
                    </button>
                    
                    <div className="border-t border-gray-700 my-2 pt-2">
                      <button 
                        onClick={() => {
                          setIsNightMode(!isNightMode);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center px-4 py-2 rounded-md text-left text-white hover:bg-gray-800"
                      >
                        {isNightMode ? (
                          <>
                            <Sun size={18} className="mr-2" />
                            Light Mode
                          </>
                        ) : (
                          <>
                            <Moon size={18} className="mr-2" />
                            Dark Mode
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Main Content */}
          <AnimatePresence mode="wait">
            {view === 'system' && (
              <motion.div 
                key="system"
                className="w-full h-[calc(100vh-64px)] relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* 3D Solar System */}
                <SolarSystem3D 
                  showOrbits={showOrbits}
                  isRealisticScale={isRealisticScale}
                  selectedPlanet={selectedPlanet}
                  isPaused={isPaused}
                  simulationSpeed={simulationSpeed}
                  onSelectPlanet={handleSelectBody}
                />
                
                {/* Planet Selection Menu */}
                <PlanetMenu 
                  planets={solarSystemData.filter(body => body.type !== 'star')}
                  selectedPlanet={selectedPlanet}
                  onSelectPlanet={handleSelectPlanet}
                />
                
                {/* Controls Panel */}
                <ControlPanel 
                  showOrbits={showOrbits}
                  isRealisticScale={isRealisticScale}
                  isPaused={isPaused}
                  simulationSpeed={simulationSpeed}
                  onToggleOrbits={() => setShowOrbits(!showOrbits)}
                  onToggleScale={() => setIsRealisticScale(!isRealisticScale)}
                  onTogglePause={handlePauseToggle}
                  onSpeedChange={handleSpeedChange}
                />
                
                {/* Explore Button (Mobile) */}
                <div className="md:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2">
                  <motion.button
                    onClick={() => selectedBody ? setView('detail') : setView('quiz')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Rocket size={18} className="mr-2" />
                    {selectedBody ? `Explore ${selectedBody.name}` : 'Take Quiz'}
                  </motion.button>
                </div>
                
                {/* Footer */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-4 left-4 z-10 text-gray-400 flex items-center gap-2"
                >
                  <LucideGithub size={16} />
                  <span className="text-sm">
                    Solar System Explorer v1.0
                  </span>
                </motion.div>
              </motion.div>
            )}
            
            {view === 'detail' && selectedBody && (
              <motion.div
                key="detail"
                className="w-full h-[calc(100vh-64px)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PlanetDetail 
                  planet={selectedBody}
                  onBack={handleBackToSystem}
                />
              </motion.div>
            )}
            
            {view === 'quiz' && (
              <motion.div
                key="quiz"
                className="w-full h-[calc(100vh-64px)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SolarSystemQuiz 
                  onBack={handleBackToSystem}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;