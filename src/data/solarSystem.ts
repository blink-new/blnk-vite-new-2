import { CelestialBodyData } from '../types/solarSystem';

export const solarSystemData: CelestialBodyData[] = [
  {
    id: 'sun',
    name: 'Sun',
    type: 'star',
    diameter: 1392700,
    mass: 1989000000000000000000000000000,
    distanceFromSun: 0,
    orbitalPeriod: 0,
    rotationPeriod: 609.12,
    temperature: 5778,
    color: '#FDB813',
    texture: '/textures/planets/sun.jpg',
    description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun radiates energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.',
    funFacts: [
      'The Sun accounts for 99.86% of the mass in the solar system.',
      'The Sun has a surface temperature of about 5,778 K (5,505°C, 9,941°F).',
      'Light from the Sun takes about 8 minutes to reach Earth.',
      'The Sun is classified as a G-type main-sequence star, or G dwarf star, or more informally, a yellow dwarf.'
    ]
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'planet',
    diameter: 4879,
    mass: 330110000000000000000000,
    distanceFromSun: 57.9,
    orbitalPeriod: 88,
    rotationPeriod: 1407.6,
    temperature: 167,
    color: '#A5A5A5',
    texture: '/textures/planets/mercury.jpg',
    description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.',
    funFacts: [
      'Mercury has no atmosphere, which means there is no wind or weather.',
      'Mercury has a large iron core, which generates a magnetic field about 1% as strong as that of Earth.',
      'Despite being the closest planet to the Sun, Mercury is not the hottest planet; Venus is hotter due to its dense atmosphere.',
      'A day on Mercury (from sunrise to sunrise) lasts 176 Earth days.'
    ]
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'planet',
    diameter: 12104,
    mass: 4867500000000000000000000,
    distanceFromSun: 108.2,
    orbitalPeriod: 224.7,
    rotationPeriod: -5832.5,
    temperature: 464,
    color: '#E6C229',
    texture: '/textures/planets/venus.jpg',
    description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.',
    funFacts: [
      'Venus rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east.',
      'Venus has the longest rotation period (243 Earth days) of any planet in the Solar System.',
      'Venus has the most circular orbit of any planet, with an eccentricity of less than 1%.',
      'Venus has a thick atmosphere consisting mainly of carbon dioxide, which traps heat in a runaway greenhouse effect.'
    ]
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    diameter: 12756,
    mass: 5972200000000000000000000,
    distanceFromSun: 149.6,
    orbitalPeriod: 365.2,
    rotationPeriod: 23.9,
    temperature: 15,
    color: '#1F7CDA',
    texture: '/textures/planets/earth.jpg',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.',
    funFacts: [
      'Earth is the only planet not named after a god.',
      'Earth is the densest planet in the Solar System.',
      'Earth has a powerful magnetic field created by the nickel-iron core that deflects destructive solar winds.',
      '71% of Earth\'s surface is covered in water.'
    ]
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'planet',
    diameter: 6792,
    mass: 641710000000000000000000,
    distanceFromSun: 227.9,
    orbitalPeriod: 687,
    rotationPeriod: 24.6,
    temperature: -65,
    color: '#E27B58',
    texture: '/textures/planets/mars.jpg',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the "Red Planet".',
    funFacts: [
      'Mars has the largest dust storms in the solar system, which can last for months and cover the entire planet.',
      'Mars has two moons, Phobos and Deimos, which may be captured asteroids.',
      'Mars has the tallest mountain in the solar system, Olympus Mons, which is 21 km high and 600 km in diameter.',
      'Mars has a thin atmosphere made mostly of carbon dioxide.'
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'planet',
    diameter: 142984,
    mass: 1898200000000000000000000000,
    distanceFromSun: 778.6,
    orbitalPeriod: 4331,
    rotationPeriod: 9.9,
    temperature: -110,
    color: '#C88B3A',
    texture: '/textures/planets/jupiter.jpg',
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.',
    funFacts: [
      'Jupiter has the shortest day of all the planets, rotating once every 9.9 hours.',
      'Jupiter has a Great Red Spot, which is a giant storm that has been raging for at least 400 years.',
      'Jupiter has 79 known moons, the most of any planet in the Solar System.',
      'Jupiter\'s magnetic field is 14 times stronger than Earth\'s.'
    ]
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'planet',
    diameter: 120536,
    mass: 568340000000000000000000000,
    distanceFromSun: 1433.5,
    orbitalPeriod: 10747,
    rotationPeriod: 10.7,
    temperature: -140,
    color: '#E4CD7B',
    texture: '/textures/planets/saturn.jpg',
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.',
    funFacts: [
      'Saturn has the most extensive ring system of any planet in the Solar System.',
      'Saturn is the least dense planet in the Solar System and would float in water if there were an ocean large enough.',
      'Saturn has 82 known moons, second only to Jupiter.',
      'Saturn\'s moon Titan is the second-largest moon in the Solar System and has a thick atmosphere.'
    ]
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'planet',
    diameter: 51118,
    mass: 86810000000000000000000000,
    distanceFromSun: 2872.5,
    orbitalPeriod: 30589,
    rotationPeriod: -17.2,
    temperature: -195,
    color: '#93C1C9',
    texture: '/textures/planets/uranus.jpg',
    description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.',
    funFacts: [
      'Uranus rotates on its side, with an axial tilt of 98 degrees.',
      'Uranus was the first planet discovered with a telescope, by William Herschel in 1781.',
      'Uranus has 27 known moons, all named after characters from the works of William Shakespeare and Alexander Pope.',
      'Uranus has 13 known rings, which are dark and narrow compared to Saturn\'s.'
    ]
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'planet',
    diameter: 49528,
    mass: 102413000000000000000000000,
    distanceFromSun: 4495.1,
    orbitalPeriod: 59800,
    rotationPeriod: 16.1,
    temperature: -200,
    color: '#3E66F9',
    texture: '/textures/planets/neptune.jpg',
    description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.',
    funFacts: [
      'Neptune was the first planet to be predicted mathematically before it was actually observed.',
      'Neptune has the strongest winds in the Solar System, reaching speeds of 2,100 km/h (1,300 mph).',
      'Neptune has 14 known moons, the largest of which is Triton.',
      'Neptune has 5 main rings and 4 prominent ring arcs.'
    ]
  },
  {
    id: 'pluto',
    name: 'Pluto',
    type: 'dwarf planet',
    diameter: 2376,
    mass: 13030000000000000000000,
    distanceFromSun: 5906.4,
    orbitalPeriod: 90560,
    rotationPeriod: -153.3,
    temperature: -225,
    color: '#A68A7B',
    texture: '/textures/planets/pluto.jpg',
    description: 'Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first Kuiper belt object to be discovered and is the largest known dwarf planet. Pluto was discovered by Clyde Tombaugh in 1930 and was originally considered to be the ninth planet from the Sun.',
    funFacts: [
      'Pluto was reclassified from a planet to a dwarf planet in 2006.',
      'Pluto has five known moons: Charon, Nix, Hydra, Kerberos, and Styx.',
      'Pluto\'s orbit is highly eccentric and inclined, crossing Neptune\'s orbit.',
      'Pluto has a heart-shaped glacier on its surface, called Tombaugh Regio.'
    ]
  }
];