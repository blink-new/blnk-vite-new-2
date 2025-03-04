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
  
  // Get the selected planet data
  const selectedPlanetData = selectedPlanet ? getPlanetById(selectedPlanet) : null;
  
  // Handle planet selection
  const handleSelectPlanet = (planet: CelestialBodyData) => {
    setSelectedPlanet(planet.id);
  };
  
  return (
    <div className="app-container h-screen flex flex-col bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Interactive Solar System</h1>
        <button 
          onClick={() => setShowQuiz(!showQuiz)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
        >
          {showQuiz ? 'Back to Solar System' : 'Take Quiz'}
        </button>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {showQuiz ? (
          <SolarSystemQuiz />
        ) : (
          <>
            {/* Left sidebar - Planet menu */}
            <div className="w-full md:w-64 bg-gray-800 p-4 overflow-y-auto">
              <PlanetMenu 
                planets={solarSystemData} 
                selectedPlanet={selectedPlanet}
                onSelectPlanet={handleSelectPlanet}
              />
            </div>
            
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
              <div className="absolute bottom-0 left-0 right-0 p-4">
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
            
            {/* Right sidebar - Planet details */}
            {selectedPlanetData && (
              <div className="w-full md:w-80 bg-gray-800 p-4 overflow-y-auto">
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