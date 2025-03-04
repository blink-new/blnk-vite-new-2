import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import { Vector3 } from 'three';
import { motion } from 'framer-motion';
import { solarSystemData } from '../data/solarSystem';
import { CelestialBodyData } from '../types/solarSystem';

interface PlanetProps {
  planet: CelestialBodyData;
  position: [number, number, number];
  scale: number;
  orbitRadius: number;
  orbitSpeed: number;
  showOrbits: boolean;
  isSelected: boolean;
  isPaused: boolean;
  simulationSpeed: number;
  onSelect: (planet: CelestialBodyData) => void;
}

const Planet = ({ 
  planet, 
  position, 
  scale, 
  orbitRadius, 
  orbitSpeed, 
  showOrbits, 
  isSelected, 
  isPaused,
  simulationSpeed,
  onSelect 
}: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Line>(null);
  const [hovered, setHovered] = useState(false);
  const [angle, setAngle] = useState(Math.random() * Math.PI * 2);
  
  // Load texture
  const texture = useTexture(planet.texture || '');
  
  // Update position based on orbit
  useFrame((_, delta) => {
    if (meshRef.current && !isPaused) {
      // Update orbit angle
      const newAngle = angle + (orbitSpeed * delta * simulationSpeed * 0.1);
      setAngle(newAngle);
      
      // Calculate new position
      const x = Math.sin(newAngle) * orbitRadius;
      const z = Math.cos(newAngle) * orbitRadius;
      
      meshRef.current.position.x = x;
      meshRef.current.position.z = z;
      
      // Rotate planet
      meshRef.current.rotation.y += delta * simulationSpeed * 0.5;
    }
  });
  
  // Create orbit path
  const orbitPoints = [];
  const segments = 64;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    orbitPoints.push(
      new Vector3(Math.sin(theta) * orbitRadius, 0, Math.cos(theta) * orbitRadius)
    );
  }
  
  return (
    <>
      {/* Orbit line */}
      {showOrbits && (
        <line ref={orbitRef}>
          <bufferGeometry attach="geometry" />
          <lineBasicMaterial 
            attach="material" 
            color={isSelected ? "#ffffff" : "#666666"} 
            opacity={isSelected ? 0.8 : 0.3} 
            transparent 
          />
        </line>
      )}
      
      {/* Planet */}
      <mesh
        ref={meshRef}
        position={position}
        scale={[scale, scale, scale]}
        onClick={() => onSelect(planet)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          map={texture} 
          emissive={hovered || isSelected ? planet.color : undefined}
          emissiveIntensity={hovered ? 0.5 : isSelected ? 0.3 : 0}
        />
      </mesh>
      
      {/* Planet label */}
      {(hovered || isSelected) && (
        <Html position={[meshRef.current?.position.x || 0, (meshRef.current?.position.y || 0) + scale * 1.5, meshRef.current?.position.z || 0]}>
          <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
            {planet.name}
          </div>
        </Html>
      )}
    </>
  );
};

// HTML content in 3D space
const Html = ({ children, position }: { children: React.ReactNode, position: [number, number, number] }) => {
  const { camera } = useThree();
  const [pos, setPos] = useState([0, 0, 0]);
  
  useFrame(() => {
    // Project 3D position to 2D screen space
    const vector = new Vector3(position[0], position[1], position[2]);
    vector.project(camera);
    
    setPos([
      (vector.x * 0.5 + 0.5) * window.innerWidth,
      (-vector.y * 0.5 + 0.5) * window.innerHeight,
      0
    ]);
  });
  
  return (
    <div style={{
      position: 'absolute',
      left: pos[0],
      top: pos[1],
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
      pointerEvents: 'none'
    }}>
      {children}
    </div>
  );
};

// Sun component with glow effect
const Sun = ({ scale }: { scale: number }) => {
  const sunData = solarSystemData.find(body => body.id === 'sun')!;
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(sunData.texture || '');
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });
  
  return (
    <group>
      {/* Sun glow */}
      <mesh>
        <sphereGeometry args={[scale * 1.2, 32, 32]} />
        <meshBasicMaterial color={sunData.color} transparent opacity={0.1} />
      </mesh>
      
      {/* Sun surface */}
      <mesh ref={meshRef} scale={[scale, scale, scale]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial 
          map={texture} 
          emissive={sunData.color} 
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
};

interface SolarSystem3DProps {
  showOrbits: boolean;
  isRealisticScale: boolean;
  selectedPlanet: string | null;
  isPaused: boolean;
  simulationSpeed: number;
  onSelectPlanet: (planet: CelestialBodyData) => void;
}

const SolarSystem3D = ({ 
  showOrbits, 
  isRealisticScale, 
  selectedPlanet,
  isPaused,
  simulationSpeed,
  onSelectPlanet 
}: SolarSystem3DProps) => {
  const controlsRef = useRef<any>(null);
  
  // Scale factors
  const baseScale = isRealisticScale ? 0.00001 : 1;
  const sunScale = 0.5;
  const distanceScale = isRealisticScale ? 1 : 0.3;
  
  // Focus on selected planet
  useEffect(() => {
    if (selectedPlanet && controlsRef.current) {
      const planet = solarSystemData.find(p => p.id === selectedPlanet);
      if (planet && planet.id !== 'sun') {
        // Calculate position based on orbit
        const orbitRadius = (planet.distanceFromSun || 0) * distanceScale * 0.01;
        controlsRef.current.target.set(0, 0, 0);
        // Animate to new position
        setTimeout(() => {
          controlsRef.current.target.set(orbitRadius, 0, 0);
        }, 100);
      } else {
        // Focus on sun
        controlsRef.current.target.set(0, 0, 0);
      }
    }
  }, [selectedPlanet, distanceScale]);
  
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />
        
        {/* Background stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Sun */}
        <Sun scale={sunScale} />
        
        {/* Planets */}
        {solarSystemData
          .filter(body => body.type !== 'star')
          .map((planet) => {
            const planetScale = (planet.diameter / 12756) * 0.1 * baseScale; // Earth = 0.1
            const orbitRadius = (planet.distanceFromSun || 0) * distanceScale * 0.01;
            const orbitSpeed = 1 / (planet.orbitalPeriod || 365);
            
            return (
              <Planet
                key={planet.id}
                planet={planet}
                position={[orbitRadius, 0, 0]}
                scale={planetScale}
                orbitRadius={orbitRadius}
                orbitSpeed={orbitSpeed}
                showOrbits={showOrbits}
                isSelected={selectedPlanet === planet.id}
                isPaused={isPaused}
                simulationSpeed={simulationSpeed}
                onSelect={onSelectPlanet}
              />
            );
          })}
        
        {/* Controls */}
        <OrbitControls 
          ref={controlsRef} 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={1}
          maxDistance={50}
        />
      </Canvas>
    </div>
  );
};

export default SolarSystem3D;