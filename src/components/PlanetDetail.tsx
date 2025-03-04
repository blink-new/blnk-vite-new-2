import { CelestialBodyData } from '../types/solarSystem';

interface PlanetDetailProps {
  planet: CelestialBodyData;
}

const PlanetDetail = ({ planet }: PlanetDetailProps) => {
  // Format large numbers with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };
  
  // Format distance in AU (Astronomical Units) if it's a planet
  const formatDistance = (distance: number): string => {
    if (distance === 0) return "0";
    return `${distance} million km (${(distance / 149.6).toFixed(2)} AU)`;
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-1" style={{ color: planet.color }}>
          {planet.name}
        </h2>
        <p className="text-gray-400 capitalize">{planet.type}</p>
      </div>
      
      <div className="bg-gray-900 rounded-xl p-5 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-indigo-400">Physical Characteristics</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Diameter:</span>
            <span className="font-medium">{formatNumber(planet.diameter)} km</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Mass:</span>
            <span className="font-medium">{planet.mass.toExponential(2)} kg</span>
          </div>
          
          {planet.type !== 'star' && (
            <>
              <div className="flex justify-between">
                <span className="text-gray-400">Distance from Sun:</span>
                <span className="font-medium">{formatDistance(planet.distanceFromSun || 0)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-400">Orbital Period:</span>
                <span className="font-medium">{planet.orbitalPeriod} Earth days</span>
              </div>
            </>
          )}
          
          <div className="flex justify-between">
            <span className="text-gray-400">Rotation Period:</span>
            <span className="font-medium">
              {Math.abs(planet.rotationPeriod)} Earth days
              {planet.rotationPeriod < 0 ? " (retrograde)" : ""}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Temperature:</span>
            <span className="font-medium">{planet.temperature}°C</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-xl p-5 shadow-lg">
        <h3 className="text-lg font-semibold mb-3 text-indigo-400">Description</h3>
        <p className="text-gray-300 leading-relaxed">{planet.description}</p>
      </div>
      
      <div className="bg-gray-900 rounded-xl p-5 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-indigo-400">Fun Facts</h3>
        <ul className="space-y-3 list-disc pl-5 text-gray-300">
          {planet.funFacts.map((fact, index) => (
            <li key={index} className="leading-relaxed">{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanetDetail;