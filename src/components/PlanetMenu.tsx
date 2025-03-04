import { CelestialBodyData } from '../types/solarSystem';

interface PlanetMenuProps {
  planets: CelestialBodyData[];
  selectedPlanet: string | null;
  onSelectPlanet: (planet: CelestialBodyData) => void;
}

const PlanetMenu = ({ planets, selectedPlanet, onSelectPlanet }: PlanetMenuProps) => {
  // Group planets by type
  const stars = planets.filter(planet => planet.type === 'star');
  const regularPlanets = planets.filter(planet => planet.type === 'planet');
  const dwarfPlanets = planets.filter(planet => planet.type === 'dwarf planet');
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Celestial Bodies
      </h2>
      
      {/* Stars section */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-yellow-400">Stars</h3>
        <ul className="space-y-2">
          {stars.map(star => (
            <li key={star.id}>
              <button
                onClick={() => onSelectPlanet(star)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                  selectedPlanet === star.id
                    ? "bg-yellow-900 bg-opacity-50 shadow-lg"
                    : "hover:bg-gray-700"
                }`}
              >
                <div 
                  className="w-5 h-5 rounded-full mr-3" 
                  style={{ backgroundColor: star.color }}
                ></div>
                <span>{star.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Planets section */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-blue-400">Planets</h3>
        <ul className="space-y-2">
          {regularPlanets.map(planet => (
            <li key={planet.id}>
              <button
                onClick={() => onSelectPlanet(planet)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                  selectedPlanet === planet.id
                    ? "bg-blue-900 bg-opacity-50 shadow-lg"
                    : "hover:bg-gray-700"
                }`}
              >
                <div 
                  className="w-5 h-5 rounded-full mr-3" 
                  style={{ backgroundColor: planet.color }}
                ></div>
                <span>{planet.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Dwarf planets section */}
      {dwarfPlanets.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-400">Dwarf Planets</h3>
          <ul className="space-y-2">
            {dwarfPlanets.map(planet => (
              <li key={planet.id}>
                <button
                  onClick={() => onSelectPlanet(planet)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                    selectedPlanet === planet.id
                      ? "bg-purple-900 bg-opacity-50 shadow-lg"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <div 
                    className="w-5 h-5 rounded-full mr-3" 
                    style={{ backgroundColor: planet.color }}
                  ></div>
                  <span>{planet.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlanetMenu;