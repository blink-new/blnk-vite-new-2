import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CelestialBodyData } from '../types/solarSystem';
import { 
  ArrowLeft, 
  Info, 
  Thermometer, 
  Scale, 
  Ruler, 
  Clock, 
  Orbit, 
  Droplets, 
  Moon, 
  Sparkles,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface PlanetDetailProps {
  planet: CelestialBodyData;
  onBack: () => void;
}

const PlanetDetail = ({ planet, onBack }: PlanetDetailProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'facts' | 'gallery'>('overview');
  const [imageIndex, setImageIndex] = useState(0);
  
  // Mock gallery images (in a real app, these would be actual images)
  const galleryImages = [
    planet.texture,
    `https://source.unsplash.com/random/800x600/?${planet.name.toLowerCase()},space`,
    `https://source.unsplash.com/random/800x600/?${planet.name.toLowerCase()},astronomy`
  ];
  
  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % galleryImages.length);
  };
  
  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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
        <div className="container mx-auto px-4 py-3 flex items-center">
          <button 
            onClick={onBack}
            className="mr-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">{planet.name}</h1>
          <div 
            className="ml-3 w-3 h-3 rounded-full" 
            style={{ backgroundColor: planet.color }}
          />
          <span className="ml-2 text-sm text-gray-400">
            {planet.type.charAt(0).toUpperCase() + planet.type.slice(1)}
          </span>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'facts' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('facts')}
          >
            Fun Facts
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'gallery' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('gallery')}
          >
            Gallery
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Planet image and description */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="bg-gray-800 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="w-4/5 h-4/5 relative"
                    >
                      <img 
                        src={planet.texture} 
                        alt={planet.name} 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-xl font-bold mb-3 flex items-center">
                    <Info size={18} className="mr-2 text-blue-400" />
                    About {planet.name}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {planet.description}
                  </p>
                  
                  {/* Key stats grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    {planet.diameter && (
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center text-blue-400 mb-1">
                          <Ruler size={16} className="mr-2" />
                          <span className="text-sm font-medium">Diameter</span>
                        </div>
                        <div className="text-lg font-bold">{planet.diameter.toLocaleString()} km</div>
                      </div>
                    )}
                    
                    {planet.mass && (
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center text-blue-400 mb-1">
                          <Scale size={16} className="mr-2" />
                          <span className="text-sm font-medium">Mass</span>
                        </div>
                        <div className="text-lg font-bold">{planet.mass.toExponential(2)} kg</div>
                      </div>
                    )}
                    
                    {planet.temperature !== undefined && (
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center text-blue-400 mb-1">
                          <Thermometer size={16} className="mr-2" />
                          <span className="text-sm font-medium">Temperature</span>
                        </div>
                        <div className="text-lg font-bold">{planet.temperature}°C</div>
                      </div>
                    )}
                    
                    {planet.orbitalPeriod && (
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center text-blue-400 mb-1">
                          <Orbit size={16} className="mr-2" />
                          <span className="text-sm font-medium">Orbital Period</span>
                        </div>
                        <div className="text-lg font-bold">{planet.orbitalPeriod} Earth days</div>
                      </div>
                    )}
                    
                    {planet.rotationPeriod && (
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center text-blue-400 mb-1">
                          <Clock size={16} className="mr-2" />
                          <span className="text-sm font-medium">Rotation Period</span>
                        </div>
                        <div className="text-lg font-bold">
                          {Math.abs(planet.rotationPeriod)} Earth hours
                          {planet.rotationPeriod < 0 ? ' (retrograde)' : ''}
                        </div>
                      </div>
                    )}
                    
                    {planet.distanceFromSun && (
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center text-blue-400 mb-1">
                          <Orbit size={16} className="mr-2" />
                          <span className="text-sm font-medium">Distance from Sun</span>
                        </div>
                        <div className="text-lg font-bold">{planet.distanceFromSun} million km</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Additional information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Atmosphere */}
                {planet.atmosphere && planet.atmosphere.length > 0 && (
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-3 flex items-center">
                      <Droplets size={18} className="mr-2 text-blue-400" />
                      Atmosphere
                    </h3>
                    <ul className="space-y-2">
                      {planet.atmosphere.map((gas, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                          <span>{gas}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Moons and Rings */}
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <Moon size={18} className="mr-2 text-blue-400" />
                    Satellites
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Moons:</span>
                      <span className="font-bold">{planet.moons || 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Rings:</span>
                      <span className="font-bold">{planet.rings ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'facts' && (
            <motion.div
              key="facts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Sparkles size={18} className="mr-2 text-yellow-400" />
                Fun Facts about {planet.name}
              </h2>
              
              {planet.funFacts && planet.funFacts.length > 0 ? (
                <div className="space-y-4">
                  {planet.funFacts.map((fact, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.1 }
                      }}
                      className="bg-gray-800 p-4 rounded-lg"
                    >
                      <div className="flex">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                          <span className="font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-300">{fact}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <p className="text-gray-400">No fun facts available for {planet.name}.</p>
                </div>
              )}
            </motion.div>
          )}
          
          {activeTab === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-6">Gallery</h2>
              
              <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
                <img 
                  src={galleryImages[imageIndex]} 
                  alt={`${planet.name} - Image ${imageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-sm">
                  {imageIndex + 1} / {galleryImages.length}
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImageIndex(idx)}
                    className={`w-20 h-20 flex-shrink-0 rounded overflow-hidden ${
                      idx === imageIndex ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PlanetDetail;