import { useState } from 'react';
import { Play, Pause, RotateCcw, Orbit, Scale } from 'lucide-react';

interface ControlPanelProps {
  showOrbits: boolean;
  setShowOrbits: (show: boolean) => void;
  isRealisticScale: boolean;
  setIsRealisticScale: (realistic: boolean) => void;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
  simulationSpeed: number;
  setSimulationSpeed: (speed: number) => void;
}

const ControlPanel = ({
  showOrbits,
  setShowOrbits,
  isRealisticScale,
  setIsRealisticScale,
  isPaused,
  setIsPaused,
  simulationSpeed,
  setSimulationSpeed
}: ControlPanelProps) => {
  // Speed presets
  const speedPresets = [0.5, 1, 2, 5, 10];
  
  return (
    <div className="p-4 rounded-lg">
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {/* Play/Pause button */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-12 h-12 flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Play size={24} /> : <Pause size={24} />}
          </button>
          <span className="text-xs mt-1">{isPaused ? "Play" : "Pause"}</span>
        </div>
        
        {/* Speed control */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm font-medium">Simulation Speed</div>
          <div className="flex gap-2">
            {speedPresets.map(speed => (
              <button
                key={speed}
                onClick={() => setSimulationSpeed(speed)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  simulationSpeed === speed
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
        
        {/* Toggle orbit lines */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setShowOrbits(!showOrbits)}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${
              showOrbits ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-700 hover:bg-gray-600"
            }`}
            aria-label="Toggle orbit lines"
          >
            <Orbit size={24} />
          </button>
          <span className="text-xs mt-1">Orbits</span>
        </div>
        
        {/* Toggle scale */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setIsRealisticScale(!isRealisticScale)}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${
              isRealisticScale ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-700 hover:bg-gray-600"
            }`}
            aria-label="Toggle realistic scale"
          >
            <Scale size={24} />
          </button>
          <span className="text-xs mt-1">Real Scale</span>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;