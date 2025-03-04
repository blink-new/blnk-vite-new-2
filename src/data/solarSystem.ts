import { CelestialBodyData } from '../types/solarSystem';

export const solarSystemData: CelestialBodyData[] = [
  {
    id: 'sun',
    name: 'Sun',
    type: 'star',
    diameter: 1392700,
    mass: 1.989e30,
    temperature: 5500,
    color: '#FDB813',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/sun.jpg',
    description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun radiates energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.',
    funFacts: [
      'The Sun accounts for 99.86% of the mass in the solar system.',
      'The Sun is 109 times wider than the Earth and 330,000 times as massive.',
      'The Sun\'s core can reach 15 million degrees Celsius.',
      'Light from the Sun takes eight minutes to reach Earth.'
    ],
    position: 0
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'planet',
    diameter: 4879,
    mass: 3.3011e23,
    gravity: 3.7,
    distanceFromSun: 57.9,
    orbitalPeriod: 88,
    rotationPeriod: 1408,
    temperature: 167,
    atmosphere: ['Minimal - Traces of Oxygen, Sodium, Hydrogen, Helium'],
    moons: 0,
    rings: false,
    color: '#A9A9A9',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/mercury.jpg',
    description: 'Mercury is the smallest and innermost planet in the Solar System. It has a rocky body like Earth and is the closest planet to the Sun. Mercury has no atmosphere to retain heat, resulting in extreme temperature variations, from scorching hot during the day to freezing cold at night.',
    funFacts: [
      'Mercury has no atmosphere, which means there is no wind or weather.',
      'Despite being the closest planet to the Sun, Venus is actually hotter than Mercury.',
      'A day on Mercury (sunrise to sunrise) lasts 176 Earth days.',
      'Mercury has a very eccentric orbit, meaning it\'s not perfectly circular.'
    ],
    position: 1
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'planet',
    diameter: 12104,
    mass: 4.8675e24,
    gravity: 8.87,
    distanceFromSun: 108.2,
    orbitalPeriod: 224.7,
    rotationPeriod: -5832,
    temperature: 464,
    atmosphere: ['Carbon Dioxide', 'Nitrogen', 'Sulfur Dioxide'],
    moons: 0,
    rings: false,
    color: '#E6E6FA',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/venus.jpg',
    description: 'Venus is the second planet from the Sun and is Earth\'s closest planetary neighbor. It\'s one of the four inner, terrestrial planets, and it\'s often called Earth\'s twin because it\'s similar in size and density. Venus has a thick, toxic atmosphere filled with carbon dioxide and clouds of sulfuric acid.',
    funFacts: [
      'Venus rotates backward compared to other planets.',
      'A day on Venus is longer than a year on Venus.',
      'Venus is the hottest planet in our solar system due to its thick atmosphere.',
      'The atmospheric pressure on Venus is 92 times greater than Earth\'s.'
    ],
    position: 2
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    diameter: 12756,
    mass: 5.97237e24,
    gravity: 9.8,
    distanceFromSun: 149.6,
    orbitalPeriod: 365.2,
    rotationPeriod: 24,
    temperature: 15,
    atmosphere: ['Nitrogen', 'Oxygen', 'Argon', 'Carbon Dioxide'],
    moons: 1,
    rings: false,
    color: '#0077FF',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth.jpg',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth\'s surface is covered with water. Earth\'s atmosphere consists of 78% nitrogen, 21% oxygen, and 1% other gases which is perfect for supporting life.',
    funFacts: [
      'Earth is the only planet not named after a god.',
      'Earth is the densest planet in the Solar System.',
      'The Earth\'s rotation is gradually slowing down.',
      'Earth has a powerful magnetic field that protects us from solar radiation.'
    ],
    position: 3
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'planet',
    diameter: 6792,
    mass: 6.4171e23,
    gravity: 3.71,
    distanceFromSun: 227.9,
    orbitalPeriod: 687,
    rotationPeriod: 24.7,
    temperature: -65,
    atmosphere: ['Carbon Dioxide', 'Nitrogen', 'Argon'],
    moons: 2,
    rings: false,
    color: '#FF5733',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/mars.jpg',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. Mars is often called the "Red Planet" because of its reddish appearance, which is due to iron oxide (rust) on its surface.',
    funFacts: [
      'Mars has the largest dust storms in the solar system.',
      'Mars has two moons named Phobos and Deimos.',
      'Mars has the tallest mountain in the solar system - Olympus Mons.',
      'A year on Mars is almost twice as long as a year on Earth.'
    ],
    position: 4
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'planet',
    diameter: 142984,
    mass: 1.8982e27,
    gravity: 24.79,
    distanceFromSun: 778.6,
    orbitalPeriod: 4331,
    rotationPeriod: 9.9,
    temperature: -110,
    atmosphere: ['Hydrogen', 'Helium', 'Methane', 'Ammonia'],
    moons: 79,
    rings: true,
    color: '#F5DEB3',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/jupiter.jpg',
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.',
    funFacts: [
      'Jupiter has the shortest day of all the planets, rotating once every 9.8 hours.',
      'The Great Red Spot on Jupiter is a storm that has been raging for at least 400 years.',
      'Jupiter has the strongest magnetic field of any planet.',
      'If Jupiter were hollow, more than 1,300 Earths could fit inside it.'
    ],
    position: 5
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'planet',
    diameter: 120536,
    mass: 5.6834e26,
    gravity: 10.44,
    distanceFromSun: 1433.5,
    orbitalPeriod: 10747,
    rotationPeriod: 10.7,
    temperature: -140,
    atmosphere: ['Hydrogen', 'Helium', 'Methane'],
    moons: 82,
    rings: true,
    color: '#F4A460',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/saturn.jpg',
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. Saturn is known for its prominent ring system, which is composed mainly of ice particles, with a smaller amount of rocky debris and dust.',
    funFacts: [
      'Saturn\'s rings are made up of billions of ice particles, ranging in size from tiny dust grains to large boulders.',
      'Saturn has 82 moons with confirmed orbits, more than any other planet in our solar system.',
      'Saturn is the least dense planet in our solar system - it would float in water if there were an ocean large enough.',
      'A day on Saturn is only 10.7 hours long.'
    ],
    position: 6
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'planet',
    diameter: 51118,
    mass: 8.6810e25,
    gravity: 8.69,
    distanceFromSun: 2872.5,
    orbitalPeriod: 30589,
    rotationPeriod: -17.2,
    temperature: -195,
    atmosphere: ['Hydrogen', 'Helium', 'Methane'],
    moons: 27,
    rings: true,
    color: '#ADD8E6',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/uranus.jpg',
    description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.',
    funFacts: [
      'Uranus rotates on its side, with its axis pointing nearly towards the Sun.',
      'Uranus was the first planet discovered using a telescope.',
      'Uranus has 13 known rings, which are very faint compared to Saturn\'s.',
      'The atmosphere of Uranus contains "ice" in the form of water, ammonia, and methane, giving it a blue-green color.'
    ],
    position: 7
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'planet',
    diameter: 49528,
    mass: 1.02413e26,
    gravity: 11.15,
    distanceFromSun: 4495.1,
    orbitalPeriod: 59800,
    rotationPeriod: 16.1,
    temperature: -200,
    atmosphere: ['Hydrogen', 'Helium', 'Methane'],
    moons: 14,
    rings: true,
    color: '#4169E1',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/neptune.jpg',
    description: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.',
    funFacts: [
      'Neptune has the strongest winds in the Solar System, reaching speeds of 2,100 km/h (1,300 mph).',
      'Neptune takes 165 Earth years to orbit the Sun.',
      'Neptune was predicted to exist through mathematical calculations before it was actually discovered.',
      'Neptune has a Great Dark Spot, similar to Jupiter\'s Great Red Spot, which is a storm system.'
    ],
    position: 8
  },
  {
    id: 'pluto',
    name: 'Pluto',
    type: 'dwarf-planet',
    diameter: 2376,
    mass: 1.303e22,
    gravity: 0.62,
    distanceFromSun: 5906.4,
    orbitalPeriod: 90560,
    rotationPeriod: -153.3,
    temperature: -225,
    atmosphere: ['Nitrogen', 'Methane', 'Carbon Monoxide'],
    moons: 5,
    rings: false,
    color: '#DEB887',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/pluto.jpg',
    description: 'Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first and the largest Kuiper belt object to be discovered. After Pluto was discovered in 1930, it was declared to be the ninth planet from the Sun. Beginning in the 1990s, its status as a planet was questioned, and in 2006 it was reclassified as a dwarf planet.',
    funFacts: [
      'Pluto was considered the ninth planet until 2006 when it was reclassified as a dwarf planet.',
      'Pluto is smaller than Earth\'s moon.',
      'Pluto has a heart-shaped glacier that\'s the size of Texas and Oklahoma combined.',
      'Pluto takes 248 Earth years to complete one orbit around the Sun.'
    ],
    position: 9
  }
];

export const getPlanetById = (id: string): CelestialBodyData | undefined => {
  return solarSystemData.find(planet => planet.id === id);
};

export const getPlanetByName = (name: string): CelestialBodyData | undefined => {
  return solarSystemData.find(planet => planet.name.toLowerCase() === name.toLowerCase());
};

export const getPlanets = (): CelestialBodyData[] => {
  return solarSystemData.filter(body => body.type === 'planet' || body.type === 'dwarf-planet');
};

export const getStar = (): CelestialBodyData | undefined => {
  return solarSystemData.find(body => body.type === 'star');
};