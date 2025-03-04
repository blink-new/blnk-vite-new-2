import { motion } from 'framer-motion';
import { CelestialBodyData } from '../types/solarSystem';

interface PlanetMenuProps {
  planets: CelestialBodyData[];
  selectedPlanet: string | null;
  onSelectPlanet: (id: string) => void;
}

const PlanetMenu = ({ planets, selectedPlanet, onSelectPlanet }: PlanetMenuProps) => {
  // Sort planets by position
  const sortedPlanets = [...planets].sort((a, b) => a.position - b.position);
  
  return (
    <motion.div 
      className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-lg p-2 z-20"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="space-y-3">
        {sortedPlanets.map((planet) => (
          <motion.button
            key={planet.id}
            onClick={() => onSelectPlanet(planet.id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              selectedPlanet === planet.id ? 'ring-2 ring-white' : ''
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{ backgroundColor: planet.color }}
            title={planet.name}
          >
            {selectedPlanet === planet.id && (
              <motion.div
                className="absolute w-full h-full rounded-full"
                animate={{ 
                  boxShadow: ['0 0 0px rgba(255,255,255,0.5)', '0 0 10px rgba(255,255,255,0.8)', '0 0 0px rgba(255,255,255,0.5)']
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default PlanetMenu;