import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Eye, 
  EyeOff, 
  Scale, 
  Maximize, 
  Minimize,
  FastForward,
  Rewind,
  Settings,
  X
} from 'lucide-react';

interface ControlPanelProps {
  showOrbits: boolean;
  isRealisticScale: boolean;
  isPaused: boolean;
  simulationSpeed: number;
  onToggleOrbits: () => void;
  onToggleScale: () => void;
  onTogglePause: () => void;
  onSpeedChange: (speed: number) => void;
}

const ControlPanel = ({
  showOrbits,
  isRealisticScale,
  isPaused,
  simulationSpeed,
  onToggleOrbits,
  onToggleScale,
  onTogglePause,
  onSpeedChange
}: ControlPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className={`fixed bottom-4 right-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-20 ${
        isExpanded ? 'w-64' : 'w-auto'
      }`}
      animate={{ height: isExpanded ? 'auto' : '48px' }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-700">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-white"
        >
          <Settings size={16} className="mr-2" />
          <span className={isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}>
            Controls
          </span>
        </button>
        
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="text-gray-400 hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>
      
      {/* Controls */}
      <div className="p-3 space-y-4">
        {/* Play/Pause */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Simulation</span>
          <button
            onClick={onTogglePause}
            className={`p-2 rounded-full ${
              isPaused ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
            } text-white transition-colors`}
          >
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>
        
        {/* Speed control */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Speed</span>
            <span className="text-sm font-medium text-white">{simulationSpeed}x</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onSpeedChange(Math.max(0.1, simulationSpeed / 2))}
              className="p-1 bg-gray-700 rounded hover:bg-gray-600 text-white"
              disabled={simulationSpeed <= 0.1}
            >
              <Rewind size={14} />
            </button>
            
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={simulationSpeed}
              onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            
            <button
              onClick={() => onSpeedChange(Math.min(10, simulationSpeed * 2))}
              className="p-1 bg-gray-700 rounded hover:bg-gray-600 text-white"
              disabled={simulationSpeed >= 10}
            >
              <FastForward size={14} />
            </button>
          </div>
        </div>
        
        {/* Toggle options */}
        <div className="space-y-2">
          <button
            onClick={onToggleOrbits}
            className="w-full flex items-center justify-between p-2 bg-gray-700 rounded hover:bg-gray-600 text-white"
          >
            <span className="flex items-center">
              {showOrbits ? <Eye size={16} className="mr-2" /> : <EyeOff size={16} className="mr-2" />}
              Show Orbits
            </span>
            <span className={`w-8 h-4 rounded-full relative ${showOrbits ? 'bg-blue-500' : 'bg-gray-500'}`}>
              <span 
                className={`absolute w-3 h-3 bg-white rounded-full top-0.5 transition-transform ${
                  showOrbits ? 'translate-x-4' : 'translate-x-1'
                }`} 
              />
            </span>
          </button>
          
          <button
            onClick={onToggleScale}
            className="w-full flex items-center justify-between p-2 bg-gray-700 rounded hover:bg-gray-600 text-white"
          >
            <span className="flex items-center">
              {isRealisticScale ? 
                <Maximize size={16} className="mr-2" /> : 
                <Scale size={16} className="mr-2" />
              }
              Realistic Scale
            </span>
            <span className={`w-8 h-4 rounded-full relative ${isRealisticScale ? 'bg-blue-500' : 'bg-gray-500'}`}>
              <span 
                className={`absolute w-3 h-3 bg-white rounded-full top-0.5 transition-transform ${
                  isRealisticScale ? 'translate-x-4' : 'translate-x-1'
                }`} 
              />
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ControlPanel;