import { useState, useEffect } from 'react';
import './App.css';
import SolarSystem3D from './components/SolarSystem3D';
import ControlPanel from './components/ControlPanel';
import PlanetDetail from './components/PlanetDetail';
import PlanetMenu from './components/PlanetMenu';
import SolarSystemQuiz from './components/SolarSystemQuiz';
import { solarSystemData, getPlanetById } from './data/solarSystem';
import { CelestialBodyData } from './types/solarSystem';

function App() {
  // State for solar system controls
  const [showOrbits, setShowOrbits] = useState(true);
  const [isRealisticScale, setIsRealisticScale] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>('earth');
  const [isPaused, setIsPaused] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showSidebars, setShowSidebars] = useState(true);
  
  // Get the selected planet data
  const selectedPlanetData = selectedPlanet ? getPlanetById(selectedPlanet) : null;
  
  // Handle planet selection
  const handleSelectPlanet = (planet: CelestialBodyData) => {
    setSelectedPlanet(planet.id);
    // Ensure sidebars are visible when selecting a planet
    setShowSidebars(true);
  };
  
  return (
    <div className="app-container h-screen flex flex-col bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Interactive Solar System
        </h1>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowSidebars(!showSidebars)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
          >
            {showSidebars ? 'Expand View' : 'Show Details'}
          </button>
          <button 
            onClick={() => setShowQuiz(!showQuiz)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
          >
            {showQuiz ? 'Back to Solar System' : 'Take Quiz'}
          </button>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex overflow-hidden">
        {showQuiz ? (
          <div className="w-full p-6">
            <SolarSystemQuiz />
          </div>
        ) : (
          <>
            {/* Left sidebar - Planet menu */}
            {showSidebars && (
              <div className="w-72 bg-gray-800 p-5 overflow-y-auto transition-all duration-300 ease-in-out shadow-xl">
                <PlanetMenu 
                  planets={solarSystemData} 
                  selectedPlanet={selectedPlanet}
                  onSelectPlanet={handleSelectPlanet}
                />
              </div>
            )}
            
            {/* Center - 3D Solar System */}
            <div className="flex-1 relative">
              <SolarSystem3D 
                showOrbits={showOrbits}
                isRealisticScale={isRealisticScale}
                selectedPlanet={selectedPlanet}
                isPaused={isPaused}
                simulationSpeed={simulationSpeed}
                onSelectPlanet={handleSelectPlanet}
              />
              
              {/* Controls overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center">
                <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-lg shadow-xl">
                  <ControlPanel 
                    showOrbits={showOrbits}
                    setShowOrbits={setShowOrbits}
                    isRealisticScale={isRealisticScale}
                    setIsRealisticScale={setIsRealisticScale}
                    isPaused={isPaused}
                    setIsPaused={setIsPaused}
                    simulationSpeed={simulationSpeed}
                    setSimulationSpeed={setSimulationSpeed}
                  />
                </div>
              </div>
            </div>
            
            {/* Right sidebar - Planet details */}
            {showSidebars && selectedPlanetData && (
              <div className="w-96 bg-gray-800 p-5 overflow-y-auto transition-all duration-300 ease-in-out shadow-xl">
                <PlanetDetail planet={selectedPlanetData} />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;