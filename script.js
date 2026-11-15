
/* =========================================================
   BEYOND EARTH
   ANA.NASA⁵ - NASA Space Apps Challenge 2026
   Junior Astronaut Mission Trainer
========================================================= */

/* ===================== NASA IMAGES ===================== */

const NASA_IMAGES = {
  mars: "https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg",
  venus: "https://images-assets.nasa.gov/image/PIA00271/PIA00271~orig.jpg",
  europa: "https://images-assets.nasa.gov/image/PIA19048/PIA19048~orig.jpg",
  titan: "https://images-assets.nasa.gov/image/PIA06230/PIA06230~orig.jpg"
};

/* ===================== WORLD INFORMATION ===================== */

const worlds = {
  mars: {
    name: "MARS",
    subtitle: "THE RED PLANET",
    image: NASA_IMAGES.mars,
    description:
      "Mars is a cold desert world with a thin atmosphere. Scientists study it to understand whether life could ever have existed there and whether humans may explore it in the future.",
    facts: [
      {
        title: "A RED WORLD",
        text: "Mars looks red because iron minerals in its soil have oxidized, creating a rusty appearance."
      },
      {
        title: "GIANT VOLCANO",
        text: "Olympus Mons is the largest known volcano in the Solar System, standing about 22 kilometers high."
      },
      {
        title: "TWO MOONS",
        text: "Mars has two small moons called Phobos and Deimos."
      },
      {
        title: "VERY COLD",
        text: "The average temperature is about minus 60 degrees Celsius, although temperatures vary by location and season."
      },
      {
        title: "THIN ATMOSPHERE",
        text: "Mars has a very thin atmosphere made mostly of carbon dioxide. It cannot provide breathable air for humans."
      },
      {
        title: "WATER ICE",
        text: "Water ice exists at the Martian poles and beneath parts of the surface."
      }
    ],
    systems: [
      {
        title: "OXYGEN SUPPLY",
        text: "Astronauts need life-support systems to provide breathable oxygen. NASA's MOXIE experiment demonstrated oxygen production from Martian carbon dioxide.",
        icon: "🫁"
      },
      {
        title: "WATER MANAGEMENT",
        text: "Water would need to be carefully recycled. Ice deposits may become a possible local water resource after suitable processing.",
        icon: "💧"
      },
      {
        title: "FOOD PRODUCTION",
        text: "Protected greenhouses and controlled growing systems could help astronauts produce fresh food.",
        icon: "🌱"
      },
      {
        title: "ENERGY",
        text: "Solar panels and other power systems could provide electricity, with energy storage for periods of reduced sunlight.",
        icon: "⚡"
      },
      {
        title: "RADIATION PROTECTION",
        text: "Mars has no global magnetic field like Earth's. Habitats need shielding to reduce astronaut exposure to radiation.",
        icon: "🛡️"
      },
      {
        title: "TEMPERATURE CONTROL",
        text: "Insulated habitats and heating systems would help protect astronauts from the planet's extreme cold.",
        icon: "🌡️"
      }
    ],
    sources: [
      ["NASA Mars Exploration", "https://science.nasa.gov/mars/"],
      ["NASA Solar System - Mars", "https://solarsystem.nasa.gov/planets/mars/overview/"],
      ["NASA Image Library", "https://images.nasa.gov/"]
    ],
    questions: [
      {
        q: "Why does Mars look red?",
        options: [
          "Because of iron minerals in its soil",
          "Because its oceans are red",
          "Because it is very close to the Sun",
          "Because of red clouds"
        ],
        answer: "Because of iron minerals in its soil",
        explanation: "Iron minerals in Martian soil have oxidized, giving the surface its rusty red color."
      },
      {
        q: "What is the name of the largest volcano on Mars?",
        options: ["Mount Everest", "Olympus Mons", "Mauna Loa", "Elysium Mons"],
        answer: "Olympus Mons",
        explanation: "Olympus Mons is about 22 kilometers high and is the largest known volcano in the Solar System."
      },
      {
        q: "What are the two moons of Mars called?",
        options: ["Europa and Titan", "Io and Ganymede", "Phobos and Deimos", "Triton and Charon"],
        answer: "Phobos and Deimos",
        explanation: "Mars has two small natural satellites: Phobos and Deimos."
      },
      {
        q: "What is the main gas in the Martian atmosphere?",
        options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"],
        answer: "Carbon dioxide",
        explanation: "The Martian atmosphere is mostly carbon dioxide and is far too thin to breathe."
      },
      {
        q: "What is the approximate average temperature on Mars?",
        options: ["20°C", "Minus 60°C", "100°C", "Minus 150°C"],
        answer: "Minus 60°C",
        explanation: "Mars is a cold planet with an average temperature of approximately minus 60 degrees Celsius."
      },
      {
        q: "What did NASA's MOXIE experiment demonstrate?",
        options: [
          "Making liquid water",
          "Growing trees",
          "Producing oxygen from carbon dioxide",
          "Creating artificial gravity"
        ],
        answer: "Producing oxygen from carbon dioxide",
        explanation: "MOXIE demonstrated that oxygen can be produced from the carbon dioxide in Mars' atmosphere."
      },
      {
        q: "Where can water ice be found on Mars?",
        options: [
          "Only in its atmosphere",
          "At the poles and beneath parts of the surface",
          "Only inside volcanoes",
          "Nowhere on Mars"
        ],
        answer: "At the poles and beneath parts of the surface",
        explanation: "Scientists have found evidence of water ice at the poles and underground."
      },
      {
        q: "Why would astronauts need radiation shielding on Mars?",
        options: [
          "Because Mars has no sunlight",
          "Because Mars has strong oceans",
          "Because its gravity is too high",
          "Because it lacks Earth's global magnetic protection"
        ],
        answer: "Because it lacks Earth's global magnetic protection",
        explanation: "Mars does not have a global magnetic field like Earth, so radiation protection is important."
      },
      {
        q: "What could help astronauts grow food on Mars?",
        options: [
          "Protected greenhouses",
          "Open-air farms without protection",
          "Ocean farming",
          "Natural rainforests"
        ],
        answer: "Protected greenhouses",
        explanation: "Controlled greenhouses could provide suitable conditions for growing food."
      },
      {
        q: "What is an important challenge for a Mars habitat?",
        options: [
          "Avoiding Earth's tides",
          "Managing extreme temperatures",
          "Protecting against tropical storms",
          "Preventing ocean waves"
        ],
        answer: "Managing extreme temperatures",
        explanation: "Mars can be extremely cold, so habitats need insulation and temperature-control systems."
      }
    ]
  },

  venus: {
    name: "VENUS",
    subtitle: "THE HOTTEST PLANET",
    image: NASA_IMAGES.venus,
    description:
      "Venus is Earth's neighboring planet. Although similar in size to Earth, its surface is extremely hot and its atmosphere is dense and dominated by carbon dioxide.",
    facts: [
      {
        title: "EXTREME HEAT",
        text: "Venus has an average surface temperature of about 465 degrees Celsius, hot enough to melt lead."
      },
      {
        title: "THICK ATMOSPHERE",
        text: "Its atmosphere is mostly carbon dioxide, creating an intense greenhouse effect."
      },
      {
        title: "CRUSHING PRESSURE",
        text: "Surface pressure on Venus is about 92 times the pressure at Earth's sea level."
      },
      {
        title: "ACID CLOUDS",
        text: "Venus has clouds containing sulfuric acid droplets."
      },
      {
        title: "SLOW ROTATION",
        text: "Venus rotates very slowly and in the opposite direction to most planets."
      },
      {
        title: "VOLCANIC LANDSCAPE",
        text: "Its surface contains mountains, volcanic plains and many features shaped by volcanic activity."
      }
    ],
    systems: [
      {
        title: "EXTREME HEAT PROTECTION",
        text: "A surface habitat would need advanced thermal protection and cooling technology to withstand the extreme temperatures.",
        icon: "🌡️"
      },
      {
        title: "PRESSURE CONTROL",
        text: "Any surface exploration system would need a strong pressure-resistant structure.",
        icon: "🛡️"
      },
      {
        title: "BREATHABLE AIR",
        text: "Venus' atmosphere is not breathable. Astronauts would require sealed life-support systems.",
        icon: "🫁"
      },
      {
        title: "ACID RESISTANCE",
        text: "Equipment operating in Venus' clouds would need materials designed to resist corrosive sulfuric acid droplets.",
        icon: "🧪"
      },
      {
        title: "ENERGY",
        text: "Exploration systems would need reliable energy sources designed for Venus' demanding environment.",
        icon: "⚡"
      },
      {
        title: "COMMUNICATION",
        text: "Reliable communication systems would be necessary to transmit scientific data between spacecraft and Earth.",
        icon: "📡"
      }
    ],
    sources: [
      ["NASA Venus Exploration", "https://science.nasa.gov/venus/"],
      ["NASA Solar System - Venus", "https://solarsystem.nasa.gov/planets/venus/overview/"],
      ["NASA Image Library", "https://images.nasa.gov/"]
    ],
    questions: [
      {
        q: "What is the approximate surface temperature of Venus?",
        options: ["15°C", "100°C", "465°C", "Minus 60°C"],
        answer: "465°C",
        explanation: "Venus has an average surface temperature of about 465 degrees Celsius."
      },
      {
        q: "What is the main gas in Venus' atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"],
        answer: "Carbon dioxide",
        explanation: "Venus' atmosphere is dominated by carbon dioxide."
      },
      {
        q: "Why is Venus so hot?",
        options: [
          "It has a strong greenhouse effect",
          "It has many oceans",
          "It is the largest planet",
          "It has no clouds"
        ],
        answer: "It has a strong greenhouse effect",
        explanation: "Its thick carbon dioxide atmosphere traps heat through an intense greenhouse effect."
      },
      {
        q: "How does surface pressure on Venus compare with Earth?",
        options: [
          "It is about the same",
          "It is lower",
          "It is about 92 times higher",
          "There is no pressure"
        ],
        answer: "It is about 92 times higher",
        explanation: "The pressure at Venus' surface is approximately 92 times Earth's sea-level pressure."
      },
      {
        q: "What is found in the clouds of Venus?",
        options: ["Freshwater", "Sulfuric acid droplets", "Liquid oxygen", "Snow"],
        answer: "Sulfuric acid droplets",
        explanation: "Venus' clouds contain droplets of sulfuric acid."
      },
      {
        q: "Does Venus rotate in the same direction as most planets?",
        options: [
          "Yes, exactly the same",
          "It does not rotate",
          "Only during daytime",
          "No, it rotates in the opposite direction"
        ],
        answer: "No, it rotates in the opposite direction",
        explanation: "Venus has retrograde rotation, meaning it spins in the opposite direction to most planets."
      },
      {
        q: "What would a surface habitat on Venus need?",
        options: [
          "Advanced heat and pressure protection",
          "A swimming pool",
          "An open roof",
          "Only ordinary clothing"
        ],
        answer: "Advanced heat and pressure protection",
        explanation: "Extreme heat and crushing pressure make surface exploration very challenging."
      },
      {
        q: "Which material challenge is important in Venus' clouds?",
        options: [
          "Protection from ocean salt",
          "Protection from sulfuric acid",
          "Protection from snow",
          "Protection from freshwater"
        ],
        answer: "Protection from sulfuric acid",
        explanation: "Sulfuric acid droplets can damage materials that are not designed to resist them."
      },
      {
        q: "What type of atmosphere does Venus have?",
        options: [
          "A very thin atmosphere",
          "No atmosphere",
          "A thick atmosphere",
          "An atmosphere made only of oxygen"
        ],
        answer: "A thick atmosphere",
        explanation: "Venus has a dense atmosphere that creates very high surface pressure."
      },
      {
        q: "Why is Venus important to planetary science?",
        options: [
          "It helps scientists study climate and greenhouse effects",
          "It is the only planet with rings",
          "It has Earth's largest ocean",
          "It is outside the Solar System"
        ],
        answer: "It helps scientists study climate and greenhouse effects",
        explanation: "Studying Venus helps scientists understand atmospheres and extreme greenhouse warming."
      }
    ]
  },

  europa: {
    name: "EUROPA",
    subtitle: "THE OCEAN MOON",
    image: NASA_IMAGES.europa,
    description:
      "Europa is one of Jupiter's largest moons. Beneath its icy surface, scientists believe there may be a vast salty ocean, making it an important place to investigate the possibility of habitable environments.",
    facts: [
      {
        title: "GLOBAL OCEAN",
        text: "Scientists have strong evidence that Europa has a salty ocean beneath its icy outer shell."
      },
      {
        title: "ICE COVER",
        text: "Europa's surface is covered by water ice and crossed by long cracks and reddish-brown markings."
      },
      {
        title: "JUPITER'S MOON",
        text: "Europa is one of the four large Galilean moons discovered by Galileo Galilei in 1610."
      },
      {
        title: "EXTREME RADIATION",
        text: "Europa is exposed to intense radiation trapped in Jupiter's magnetic environment."
      },
      {
        title: "POSSIBLE HABITABILITY",
        text: "Its ocean may contain conditions relevant to life, but no life has been discovered there."
      },
      {
        title: "NASA EXPLORATION",
        text: "NASA's Europa Clipper mission is designed to investigate Europa's habitability."
      }
    ],
    systems: [
      {
        title: "RADIATION PROTECTION",
        text: "Exploration equipment and any future habitat would need strong shielding against Jupiter's intense radiation environment.",
        icon: "🛡️"
      },
      {
        title: "PLANETARY PROTECTION",
        text: "Spacecraft must be designed to reduce the risk of contaminating Europa with Earth-based microorganisms.",
        icon: "🔬"
      },
      {
        title: "TEMPERATURE CONTROL",
        text: "Europa's extremely cold environment requires insulation and reliable heating systems.",
        icon: "🌡️"
      },
      {
        title: "ENERGY SUPPLY",
        text: "Reliable power systems are needed to operate equipment in a distant environment with limited sunlight.",
        icon: "⚡"
      },
      {
        title: "SCIENTIFIC RESEARCH",
        text: "Robotic instruments could study the icy surface and investigate the ocean beneath it.",
        icon: "🧪"
      },
      {
        title: "COMMUNICATION",
        text: "Communication systems must send scientific information across the great distance between Jupiter and Earth.",
        icon: "📡"
      }
    ],
    sources: [
      ["NASA Europa Science", "https://science.nasa.gov/jupiter/moons/europa/"],
      ["NASA Europa Clipper", "https://europa.nasa.gov/"],
      ["NASA Image Library", "https://images.nasa.gov/"]
    ],
    questions: [
      {
        q: "Europa is a moon of which planet?",
        options: ["Saturn", "Mars", "Jupiter", "Neptune"],
        answer: "Jupiter",
        explanation: "Europa is one of Jupiter's major moons."
      },
      {
        q: "What is believed to exist beneath Europa's icy surface?",
        options: [
          "A large salty ocean",
          "A desert of sand",
          "A forest",
          "A layer of liquid metal"
        ],
        answer: "A large salty ocean",
        explanation: "Evidence suggests that a global salty ocean may exist beneath Europa's ice."
      },
      {
        q: "What covers most of Europa's surface?",
        options: ["Rocky sand", "Water ice", "Liquid methane", "Thick vegetation"],
        answer: "Water ice",
        explanation: "Europa's outer surface is made mostly of water ice."
      },
      {
        q: "Why is Europa scientifically interesting?",
        options: [
          "It has the highest mountains",
          "It is the hottest moon",
          "It has Earth's atmosphere",
          "It may have conditions suitable for life"
        ],
        answer: "It may have conditions suitable for life",
        explanation: "Its possible subsurface ocean makes Europa an important target in the search for habitable environments."
      },
      {
        q: "What is a major environmental danger near Europa?",
        options: [
          "Intense radiation",
          "Tropical storms",
          "Ocean tides from Earth",
          "Volcanic ash from Mars"
        ],
        answer: "Intense radiation",
        explanation: "Jupiter's magnetic environment exposes Europa to intense radiation."
      },
      {
        q: "What is NASA's Europa Clipper mission designed to investigate?",
        options: [
          "The rings of Saturn",
          "The surface of Mars",
          "Europa's habitability",
          "The atmosphere of Venus"
        ],
        answer: "Europa's habitability",
        explanation: "Europa Clipper will study Europa's surface, ice shell and environment to investigate its potential habitability."
      },
      {
        q: "What does planetary protection aim to prevent?",
        options: [
          "The moon from rotating",
          "Unwanted contamination from Earth",
          "The ocean from freezing",
          "Jupiter from producing radiation"
        ],
        answer: "Unwanted contamination from Earth",
        explanation: "Planetary protection helps prevent Earth organisms from contaminating other worlds."
      },
      {
        q: "Who discovered Europa along with the other large Galilean moons?",
        options: ["Isaac Newton", "Albert Einstein", "Edwin Hubble", "Galileo Galilei"],
        answer: "Galileo Galilei",
        explanation: "Galileo Galilei observed Europa and Jupiter's other large moons in 1610."
      },
      {
        q: "Why would a future Europa mission need heating systems?",
        options: [
          "Because Europa is extremely cold",
          "Because Europa is too close to the Sun",
          "Because its oceans are boiling",
          "Because it has a hot atmosphere"
        ],
        answer: "Because Europa is extremely cold",
        explanation: "Europa's distant location and icy environment make temperature control essential."
      },
      {
        q: "Has life been discovered on Europa?",
        options: [
          "Yes, many animals have been found",
          "Yes, plants have been confirmed",
          "No, life has not been discovered there",
          "Europa is known to be inhabited"
        ],
        answer: "No, life has not been discovered there",
        explanation: "Europa is interesting because it may have habitable conditions, but life has not been confirmed."
      }
    ]
  },

  titan: {
    name: "TITAN",
    subtitle: "THE MYSTERIOUS MOON",
    image: NASA_IMAGES.titan,
    description:
      "Titan is Saturn's largest moon. It has a thick nitrogen-rich atmosphere, rivers and lakes of liquid methane and ethane, and a landscape that makes it one of the most fascinating worlds to explore.",
    facts: [
      {
        title: "THICK ATMOSPHERE",
        text: "Titan has a dense atmosphere made mostly of nitrogen, unlike most moons in the Solar System."
      },
      {
        title: "METHANE LAKES",
        text: "Titan has lakes and seas of liquid methane and ethane on its extremely cold surface."
      },
      {
        title: "ORGANIC CHEMISTRY",
        text: "Its atmosphere contains complex organic molecules that are important for studying prebiotic chemistry."
      },
      {
        title: "EXTREME COLD",
        text: "Titan's surface temperature is around minus 179 degrees Celsius."
      },
      {
        title: "LOW GRAVITY",
        text: "Titan's surface gravity is much weaker than Earth's, making movement very different."
      },
      {
        title: "DRAGONFLY MISSION",
        text: "NASA's Dragonfly mission is planned to explore Titan using a rotorcraft lander."
      }
    ],
    systems: [
      {
        title: "OXYGEN SUPPLY",
        text: "Titan's atmosphere is not breathable. Astronauts would need sealed life-support systems and oxygen supplies.",
        icon: "🫁"
      },
      {
        title: "EXTREME COLD",
        text: "Habitats and equipment need strong insulation and heating to operate in Titan's extremely cold environment.",
        icon: "🌡️"
      },
      {
        title: "ENERGY",
        text: "A mission needs a dependable power source that can work far from the Sun.",
        icon: "⚡"
      },
      {
        title: "LIQUID METHANE",
        text: "Titan's surface liquids are methane and ethane, not water. Equipment must be designed for this unusual environment.",
        icon: "🧪"
      },
      {
        title: "TRANSPORTATION",
        text: "Vehicles and aerial exploration systems could help travel across Titan's varied terrain.",
        icon: "🚁"
      },
      {
        title: "SCIENTIFIC DISCOVERY",
        text: "Instruments can study Titan's atmosphere, surface chemistry and landscapes to understand complex organic processes.",
        icon: "🔬"
      }
    ],
    sources: [
      ["NASA Titan Science", "https://science.nasa.gov/saturn/moons/titan/"],
      ["NASA Dragonfly Mission", "https://science.nasa.gov/mission/dragonfly/"],
      ["NASA Image Library", "https://images.nasa.gov/"]
    ],
    questions: [
      {
        q: "Titan is the largest moon of which planet?",
        options: ["Jupiter", "Neptune", "Saturn", "Uranus"],
        answer: "Saturn",
        explanation: "Titan is Saturn's largest moon and one of the most interesting worlds in the Solar System."
      },
      {
        q: "What is the main gas in Titan's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon monoxide", "Helium"],
        answer: "Nitrogen",
        explanation: "Titan's thick atmosphere is made mostly of nitrogen."
      },
      {
        q: "What liquids form lakes and seas on Titan?",
        options: [
          "Freshwater",
          "Liquid oxygen",
          "Liquid iron",
          "Liquid methane and ethane"
        ],
        answer: "Liquid methane and ethane",
        explanation: "Titan has lakes and seas of liquid methane and ethane on its cold surface."
      },
      {
        q: "What is the approximate surface temperature of Titan?",
        options: ["Minus 179°C", "25°C", "100°C", "465°C"],
        answer: "Minus 179°C",
        explanation: "Titan's surface is extremely cold, around minus 179 degrees Celsius."
      },
      {
        q: "What is NASA's Dragonfly mission?",
        options: [
          "A mission to Venus",
          "A mission to study Earth's oceans",
          "A rotorcraft mission to explore Titan",
          "A mission to explore Mars' moons"
        ],
        answer: "A rotorcraft mission to explore Titan",
        explanation: "Dragonfly is a planned NASA mission that will use a rotorcraft lander to explore Titan."
      },
      {
        q: "Can humans breathe Titan's atmosphere?",
        options: [
          "Yes, it is mostly oxygen",
          "No, it is not breathable",
          "Yes, without equipment",
          "Only during the daytime"
        ],
        answer: "No, it is not breathable",
        explanation: "Titan's atmosphere is mostly nitrogen and does not provide breathable oxygen."
      },
      {
        q: "What makes Titan interesting for organic chemistry?",
        options: [
          "Its complex organic molecules",
          "Its large forests",
          "Its liquid oxygen oceans",
          "Its warm tropical climate"
        ],
        answer: "Its complex organic molecules",
        explanation: "Titan's atmosphere contains complex organic molecules that help scientists study prebiotic chemistry."
      },
      {
        q: "Why would a Titan habitat need strong insulation?",
        options: [
          "Because Titan is very hot",
          "Because Titan has strong sunlight",
          "Because Titan has no atmosphere",
          "Because Titan is extremely cold"
        ],
        answer: "Because Titan is extremely cold",
        explanation: "The extreme cold makes thermal protection and heating systems essential."
      },
      {
        q: "What is unusual about Titan's surface lakes?",
        options: [
          "They are made of liquid methane and ethane",
          "They are made of lava",
          "They are made of liquid oxygen",
          "They are made of molten iron"
        ],
        answer: "They are made of liquid methane and ethane",
        explanation: "Unlike Earth's lakes, Titan's surface lakes contain liquid hydrocarbons."
      },
      {
        q: "Which statement about Titan is correct?",
        options: [
          "It has no atmosphere",
          "It has a thick nitrogen-rich atmosphere",
          "It is hotter than Venus",
          "It is a planet orbiting the Sun directly"
        ],
        answer: "It has a thick nitrogen-rich atmosphere",
        explanation: "Titan is a moon of Saturn with a thick atmosphere dominated by nitrogen."
      }
    ]
  }
};

/* ===================== HELPER FUNCTIONS ===================== */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function shuffleArray(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function scrollToElement(element) {
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/* ===================== VISUAL INFORMATION ===================== */

function getFactIcon(title) {
  const text = title.toLowerCase();

  if (text.includes("red")) return "🔴";
  if (text.includes("volcano")) return "🌋";
  if (text.includes("moon")) return "🌑";
  if (text.includes("cold") || text.includes("heat")) return "🌡️";
  if (text.includes("atmosphere")) return "☁️";
  if (text.includes("water") || text.includes("ocean")) return "💧";
  if (text.includes("ice")) return "❄️";
  if (text.includes("radiation")) return "☢️";
  if (text.includes("acid")) return "🧪";
  if (text.includes("rotation")) return "🪐";
  if (text.includes("pressure")) return "⬇️";
  if (text.includes("chemistry")) return "⚗️";
  if (text.includes("gravity")) return "🌍";
  if (text.includes("mission")) return "🚀";

  return "✦";
}

function highlightImportantText(text) {
  let safe = escapeHTML(text);

  const terms = [
    "465 degrees Celsius",
    "92 times",
    "minus 179 degrees Celsius",
    "minus 60 degrees Celsius",
    "22 kilometers",
    "iron minerals",
    "carbon dioxide",
    "water ice",
    "liquid methane",
    "liquid ethane",
    "sulfuric acid",
    "nitrogen",
    "oxygen",
    "Olympus Mons",
    "Phobos",
    "Deimos",
    "MOXIE",
    "Europa Clipper",
    "Dragonfly",
    "global ocean",
    "Galilean moons",
    "radiation",
    "greenhouse effect",
    "organic molecules"
  ];

  terms.forEach(term => {
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedTerm})`, "gi");

    safe = safe.replace(
      regex,
      '<strong class="fact-highlight">$1</strong>'
    );
  });

  return safe;
}

/* ===================== STAR CELEBRATION ===================== */

function celebrateQuestion(amount = 18) {
  const container = document.createElement("div");
  container.className = "star-burst-container";
  document.body.appendChild(container);

  for (let i = 0; i < amount; i++) {
    const star = document.createElement("span");
    star.className = "screen-star";
    star.textContent = "★";

    star.style.setProperty("--start-x", `${Math.random() * 100}vw`);
    star.style.setProperty("--start-y", `${Math.random() * 100}vh`);
    star.style.setProperty("--star-x", `${(Math.random() - 0.5) * 300}px`);
    star.style.setProperty("--star-y", `${(Math.random() - 0.5) * 300}px`);
    star.style.setProperty("--star-size", `${14 + Math.random() * 25}px`);
    star.style.setProperty("--star-duration", `${1 + Math.random() * 1.2}s`);

    container.appendChild(star);
  }

  setTimeout(() => container.remove(), 2500);
}

/* ===================== WORLD PAGE ===================== */

let currentWorldKey = null;
let currentQuiz = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let questionAnswered = false;

function openWorld(worldKey) {
  const world = worlds[worldKey];
  const mount = document.getElementById("worldMount");

  if (!world || !mount) return;

  currentWorldKey = worldKey;

  const factsHTML = world.facts.map((fact, index) => `
    <article class="fact-card visual-fact-card">
      <div class="fact-icon" aria-hidden="true">${getFactIcon(fact.title)}</div>
      <div class="fact-number">${String(index + 1).padStart(2, "0")}</div>
      <h4>${escapeHTML(fact.title)}</h4>
      <p>${highlightImportantText(fact.text)}</p>
    </article>
  `).join("");

  const systemsHTML = world.systems.map(system => `
    <article class="system-card visual-system-card">
      <div class="system-icon" aria-hidden="true">${system.icon}</div>
      <h4>${escapeHTML(system.title)}</h4>
      <p>${highlightImportantText(system.text)}</p>
    </article>
  `).join("");

  const sourcesHTML = world.sources.map(source => `
    <a href="${escapeHTML(source[1])}" target="_blank" rel="noopener noreferrer">
      ${escapeHTML(source[0])} ↗
    </a>
  `).join("");

  mount.innerHTML = `
    <section class="world-page" id="${worldKey}">

     <div class="world-hero">
  <div class="world-planet-background">
    <img src="${world.image}" alt="${escapeHTML(world.name)}">
  </div>

  <div class="world-hero-overlay"></div>

  <div class="world-hero-content">
          <button class="world-back-button" id="backToWorlds">
            ← BACK TO WORLDS
          </button>

          <p class="world-kicker">${escapeHTML(world.subtitle)}</p>
          <h1>${escapeHTML(world.name)}</h1>
          <p>${escapeHTML(world.description)}</p>
        </div>
      </div>

      <section class="world-content-section">
        <div class="section-heading">
          <p class="section-kicker">DISCOVER THE WORLD</p>
          <h2>PLANETARY PROFILE</h2>
          <p>Explore the facts that make ${escapeHTML(world.name)} unique.</p>
        </div>

        <div class="world-facts-grid">
          ${factsHTML}
        </div>
      </section>

      <section class="world-content-section survival-section">
        <div class="section-heading">
          <p class="section-kicker">MISSION PREPARATION</p>
          <h2>WHAT WOULD ASTRONAUTS NEED?</h2>
          <p>Explore the systems and technologies needed for this environment.</p>
        </div>

        <div class="survival-grid">
          ${systemsHTML}
        </div>
      </section>

      <section class="quiz-section" id="worldQuiz">
        <div class="section-heading">
          <p class="section-kicker">TEST YOUR KNOWLEDGE</p>
          <h2>${escapeHTML(world.name)} ASTRONAUT QUIZ</h2>
          <p>Answer 10 questions to complete your training.</p>
        </div>

        <div class="quiz-progress">
          <div class="quiz-progress-track">
            <div id="quizProgressBar" class="quiz-progress-bar"></div>
          </div>
          <p id="quizProgressText">QUESTION 1 OF 10</p>
        </div>

        <div id="quizQuestions"></div>
        <div id="quizResult"></div>
      </section>

      <section class="idea-section">
        <div class="section-heading">
          <p class="section-kicker">YOUR TURN, ASTRONAUT</p>
          <h2>SHARE YOUR MISSION IDEA</h2>
          <p>Imagine a solution that could help astronauts explore ${escapeHTML(world.name)}.</p>
        </div>

        <form id="ideaForm">
          <label for="ideaTitle">YOUR IDEA TITLE</label>
          <input id="ideaTitle" type="text" maxlength="100"
            placeholder="Give your idea a name..." required>

          <label for="ideaDescription">DESCRIBE YOUR IDEA</label>
          <textarea id="ideaDescription" rows="5" maxlength="1000"
            placeholder="How would your idea help astronauts?" required></textarea>

          <button type="submit">PREVIEW MY IDEA</button>
        </form>

        <div id="ideaPreview"></div>
        <p class="idea-note">
          This is a local preview only. Your idea is not sent to NASA or stored online.
        </p>
      </section>

      <section class="world-sources">
        <h2>NASA SCIENCE REFERENCES</h2>
        <p>Learn more from these NASA resources:</p>
        <div class="source-links">${sourcesHTML}</div>
      </section>

    </section>
  `;

  document.getElementById("backToWorlds")
    ?.addEventListener("click", closeWorld);

  document.getElementById("ideaForm")
    ?.addEventListener("submit", handleIdeaSubmit);

  initializeQuiz(worldKey);

  history.pushState({ world: worldKey }, "", `#${worldKey}`);
  scrollToElement(mount);
}

/* ===================== QUIZ SYSTEM ===================== */

function initializeQuiz(worldKey) {
  const world = worlds[worldKey];
  if (!world) return;

  currentQuiz = world.questions.map(question => ({
    ...question,
    shuffledOptions: shuffleArray(
      question.options.map(option => ({
        text: option,
        isCorrect: option === question.answer
      }))
    )
  }));

  currentQuestionIndex = 0;
  currentScore = 0;
  questionAnswered = false;

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById("quizQuestions");
  const progressBar = document.getElementById("quizProgressBar");
  const progressText = document.getElementById("quizProgressText");
  const result = document.getElementById("quizResult");

  if (!container || !currentQuiz.length) return;

  if (result) result.innerHTML = "";

  const question = currentQuiz[currentQuestionIndex];
  questionAnswered = false;

  const questionNumber = currentQuestionIndex + 1;

  if (progressBar) {
    progressBar.style.width = `${(questionNumber / currentQuiz.length) * 100}%`;
  }

  if (progressText) {
    progressText.textContent =
      `QUESTION ${questionNumber} OF ${currentQuiz.length}`;
  }

  const optionsHTML = question.shuffledOptions.map((option, index) => `
    <button
      type="button"
      class="quiz-option"
      data-option-index="${index}"
    >
      <span class="quiz-option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${escapeHTML(option.text)}</span>
    </button>
  `).join("");

  container.innerHTML = `
    <div class="quiz-question-card">
      <p class="quiz-question-number">
        QUESTION ${questionNumber}
      </p>

      <h3>${escapeHTML(question.q)}</h3>

      <div class="quiz-options">
        ${optionsHTML}
      </div>

      <div id="quizFeedback" class="quiz-feedback" aria-live="polite"></div>

      <button id="nextQuizButton" class="next-question-button" hidden>
        ${questionNumber === currentQuiz.length ? "SEE MY RESULT" : "NEXT QUESTION →"}
      </button>
    </div>
  `;

  container.querySelectorAll(".quiz-option").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.optionIndex);
      selectQuizAnswer(index);
    });
  });

  document.getElementById("nextQuizButton")
    ?.addEventListener("click", nextQuizQuestion);
}

function selectQuizAnswer(optionIndex) {
  if (questionAnswered) return;

  const question = currentQuiz[currentQuestionIndex];
  const selected = question.shuffledOptions[optionIndex];
  const feedback = document.getElementById("quizFeedback");
  const nextButton = document.getElementById("nextQuizButton");

  if (!selected || !feedback) return;

  questionAnswered = true;

  const optionButtons = document.querySelectorAll(".quiz-option");

  optionButtons.forEach((button, index) => {
    button.disabled = true;

    const option = question.shuffledOptions[index];

    if (option.isCorrect) {
      button.classList.add("correct");
    } else if (index === optionIndex) {
      button.classList.add("incorrect");
    }
  });

  if (selected.isCorrect) {
    currentScore++;

    feedback.innerHTML = `
      <div class="quiz-correct-message">
        <strong>✓ CORRECT! WELL DONE, ASTRONAUT!</strong>
        <p>${escapeHTML(question.explanation)}</p>
      </div>
    `;

    celebrateQuestion(28);
  } else {
    feedback.innerHTML = `
      <div class="quiz-wrong-message">
        <strong>✕ NOT QUITE! KEEP LEARNING.</strong>
        <p><strong>Correct answer:</strong> ${escapeHTML(question.answer)}</p>
        <p>${escapeHTML(question.explanation)}</p>
      </div>
    `;
  }

  if (nextButton) nextButton.hidden = false;
}

function nextQuizQuestion() {
  if (!questionAnswered) return;

  currentQuestionIndex++;

  if (currentQuestionIndex >= currentQuiz.length) {
    showQuizResult();
  } else {
    renderQuizQuestion();
  }
}

function showQuizResult() {
  const container = document.getElementById("quizQuestions");
  const result = document.getElementById("quizResult");
  const progressText = document.getElementById("quizProgressText");

  if (container) container.innerHTML = "";
  if (progressText) progressText.textContent = "MISSION QUIZ COMPLETED";

  let title = "";
  let message = "";
  let stars = 3;

  if (currentScore === 10) {
    title = "EXCELLENT! STAR ASTRONAUT!";
    message = "Perfect score! You are ready for your next mission!";
    stars = 100;
  } else if (currentScore >= 8) {
    title = "GREAT JOB, ASTRONAUT!";
    message = "Amazing work! Your space knowledge is impressive.";
    stars = 35;
  } else if (currentScore >= 6) {
    title = "NICE WORK! KEEP IMPROVING!";
    message = "You are making progress. Keep exploring and learning!";
    stars = 3;
  } else {
    title = "TIME TO TRAIN AGAIN!";
    message = "Read the planet information again and give the mission another try!";
    stars = 3;
  }

  if (result) {
    result.innerHTML = `
      <div class="quiz-result-card">
        <div class="result-stars">★ ★ ★</div>
        <p class="section-kicker">MISSION REPORT</p>
        <h2>${title}</h2>
        <div class="quiz-score">${currentScore} / ${currentQuiz.length}</div>
        <h3>YOU GOT ${currentScore} ANSWERS CORRECT!</h3>
        <p>${message}</p>

        <button id="retryQuizButton" class="retry-quiz-button">
          TRY AGAIN ↻
        </button>
      </div>
    `;

    document.getElementById("retryQuizButton")
      ?.addEventListener("click", () => initializeQuiz(currentWorldKey));
  }

  celebrateQuestion(stars);
  scrollToElement(result);
}

/* ===================== IDEA FORM ===================== */

function handleIdeaSubmit(event) {
  event.preventDefault();

  const title = document.getElementById("ideaTitle")?.value.trim();
  const description = document.getElementById("ideaDescription")?.value.trim();
  const preview = document.getElementById("ideaPreview");

  if (!title || !description || !preview) return;

  preview.innerHTML = `
    <div class="idea-preview-card">
      <p class="section-kicker">YOUR MISSION IDEA</p>
      <h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(description)}</p>
      <p class="idea-note">
        Your idea is displayed as a preview on this page only.
        It has not been submitted to NASA.
      </p>
    </div>
  `;

  scrollToElement(preview);
}

/* ===================== NAVIGATION ===================== */

function closeWorld() {
  const mount = document.getElementById("worldMount");

  if (mount) mount.innerHTML = "";

  currentWorldKey = null;

  if (location.hash && worlds[location.hash.slice(1)]) {
    history.pushState({}, "", location.pathname + location.search);
  }

  scrollToElement(document.getElementById("worlds"));
}

function initializeNavigation() {
  document.querySelectorAll("[data-world]").forEach(button => {
    button.addEventListener("click", () => {
      openWorld(button.dataset.world);
    });
  });

  document.getElementById("startMissionButton")
    ?.addEventListener("click", () => openMissionTrainer());

  document.querySelectorAll('a[href="#mission"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      openMissionTrainer();
    });
  });
}

function handleInitialHash() {
  const key = location.hash.replace("#", "");

  if (worlds[key]) {
    openWorld(key);
  } else if (key === "mission") {
    openMissionTrainer();
  }
}

window.addEventListener("popstate", () => {
  const key = location.hash.replace("#", "");

  if (worlds[key]) {
    openWorld(key);
  } else {
    const mount = document.getElementById("worldMount");
    if (mount) mount.innerHTML = "";
  }
});

/* ===================== MISSION TRAINER ===================== */

const missionChallenges = {
  mars: [
    {
      title: "OXYGEN SUPPLY",
      question: "How could astronauts get breathable oxygen on Mars?",
      options: [
        "Use a life-support system and investigate oxygen production from atmospheric carbon dioxide",
        "Breathe the Martian atmosphere directly",
        "Collect oxygen from Mars' oceans",
        "Open the habitat windows"
      ],
      answer: 0,
      explanation: "Mars' atmosphere is mostly carbon dioxide and cannot be breathed. Life-support systems are essential."
    },
    {
      title: "WATER MANAGEMENT",
      question: "What is a sensible way to manage water in a Mars habitat?",
      options: [
        "Use water once and discard it",
        "Recycle water and investigate accessible ice deposits",
        "Depend on rainfall",
        "Use methane as drinking water"
      ],
      answer: 1,
      explanation: "Water recycling reduces the amount that must be transported from Earth."
    },
    {
      title: "FOOD PRODUCTION",
      question: "Which system could help provide fresh food?",
      options: [
        "Open fields without protection",
        "Ocean farming",
        "Controlled greenhouses",
        "Natural forests"
      ],
      answer: 2,
      explanation: "Controlled growing environments can protect plants and regulate important conditions."
    },
    {
      title: "ENERGY",
      question: "What could provide electricity on Mars?",
      options: [
        "Ocean tides",
        "Earth's power grid",
        "Lightning storms",
        "Solar panels with energy storage"
      ],
      answer: 3,
      explanation: "Solar panels can generate electricity, while storage helps when sunlight is reduced."
    },
    {
      title: "RADIATION",
      question: "What could reduce astronaut exposure to radiation?",
      options: [
        "Protective shielding around habitats",
        "Removing all windows",
        "Using ordinary paper walls",
        "Turning off the lights"
      ],
      answer: 0,
      explanation: "Habitat shielding and careful site selection can help reduce radiation exposure."
    },
    {
      title: "TEMPERATURE",
      question: "What would help keep a Mars habitat warm?",
      options: [
        "Open doors",
        "Insulation and heating systems",
        "Watering the walls",
        "Removing the roof"
      ],
      answer: 1,
      explanation: "Insulation and heating systems help maintain safe indoor temperatures."
    }
  ],

  europa: [
    {
      title: "RADIATION",
      question: "What is a major hazard around Europa?",
      options: [
        "Tropical storms",
        "High humidity",
        "Intense radiation from Jupiter's environment",
        "Earthquakes from Earth"
      ],
      answer: 2,
      explanation: "Jupiter's radiation environment is a major challenge for spacecraft near Europa."
    },
    {
      title: "PLANETARY PROTECTION",
      question: "Why must spacecraft be carefully cleaned before exploring Europa?",
      options: [
        "To make them lighter",
        "To increase sunlight",
        "To change their color",
        "To reduce the risk of contaminating Europa"
      ],
      answer: 3,
      explanation: "Planetary protection helps prevent Earth organisms from contaminating potentially habitable environments."
    },
    {
      title: "TEMPERATURE",
      question: "What would equipment need to work in Europa's cold environment?",
      options: [
        "Insulation and temperature control",
        "Open-air cooling",
        "No protection",
        "Only ordinary clothing"
      ],
      answer: 0,
      explanation: "Europa's icy environment requires systems that can operate in extreme cold."
    },
    {
      title: "ENERGY",
      question: "Why is energy planning important for a Europa mission?",
      options: [
        "Because Europa is inside Earth",
        "Because sunlight is weaker so far from the Sun",
        "Because Europa has a power grid",
        "Because all machines work without power"
      ],
      answer: 1,
      explanation: "A distant mission needs reliable energy systems suitable for its environment."
    },
    {
      title: "SCIENTIFIC RESEARCH",
      question: "What makes Europa especially interesting to scientists?",
      options: [
        "Its forests",
        "Its breathable atmosphere",
        "Its possible subsurface ocean",
        "Its tropical climate"
      ],
      answer: 2,
      explanation: "A possible salty ocean beneath the ice makes Europa an important target for habitability research."
    },
    {
      title: "COMMUNICATION",
      question: "Why does a Europa spacecraft need communication equipment?",
      options: [
        "To create oxygen",
        "To melt the ice",
        "To change its orbit",
        "To send scientific data back to Earth"
      ],
      answer: 3,
      explanation: "Communication systems allow spacecraft to transmit observations and receive instructions."
    }
  ],

  titan: [
    {
      title: "OXYGEN",
      question: "Can astronauts breathe Titan's atmosphere?",
      options: [
        "No, they need a life-support system",
        "Yes, it is mostly oxygen",
        "Yes, without equipment",
        "Only during the daytime"
      ],
      answer: 0,
      explanation: "Titan's atmosphere is mostly nitrogen and is not breathable by humans."
    },
    {
      title: "EXTREME COLD",
      question: "What is important for a habitat on Titan?",
      options: [
        "Air conditioning only",
        "Strong insulation and heating",
        "Open windows",
        "A swimming pool"
      ],
      answer: 1,
      explanation: "Titan's surface is around minus 179 degrees Celsius, so thermal protection is essential."
    },
    {
      title: "ENERGY",
      question: "Why would a Titan mission need a dependable energy source?",
      options: [
        "Because Titan is inside the Sun",
        "Because Titan has Earth's power grid",
        "Because sunlight is weak at Saturn's distance",
        "Because energy is not needed"
      ],
      answer: 2,
      explanation: "Saturn is far from the Sun, so missions need carefully planned power systems."
    },
    {
      title: "SURFACE LIQUIDS",
      question: "What are Titan's lakes mainly made of?",
      options: [
        "Freshwater",
        "Liquid oxygen",
        "Molten rock",
        "Liquid methane and ethane"
      ],
      answer: 3,
      explanation: "Titan has lakes and seas of liquid methane and ethane."
    },
    {
      title: "TRANSPORTATION",
      question: "What type of vehicle is planned for NASA's Dragonfly mission?",
      options: [
        "A rotorcraft lander",
        "A submarine",
        "A passenger train",
        "A sailing ship"
      ],
      answer: 0,
      explanation: "Dragonfly is designed as a rotorcraft lander that will explore multiple locations on Titan."
    },
    {
      title: "SCIENTIFIC DISCOVERY",
      question: "What could scientists study on Titan?",
      options: [
        "Earth's forests",
        "Complex organic chemistry",
        "The rings of Mars",
        "The oceans of Venus"
      ],
      answer: 1,
      explanation: "Titan's atmosphere and surface contain complex organic materials that help scientists study prebiotic chemistry."
    }
  ]
};

let missionWorld = "mars";
let missionIndex = 0;
let missionScore = 0;
let missionSelected = false;

function openMissionTrainer(worldKey = "mars") {
  if (!missionChallenges[worldKey]) {
    showMissionWorldSelection();
    return;
  }

  missionWorld = worldKey;
  missionIndex = 0;
  missionScore = 0;
  missionSelected = false;

  renderMissionChallenge();
}

function showMissionWorldSelection() {
  const mount = document.getElementById("worldMount");
  if (!mount) return;

  const availableWorlds = [
    ["mars", "MARS", "🔴"],
    ["europa", "EUROPA", "🧊"],
    ["titan", "TITAN", "🪐"]
  ];

  mount.innerHTML = `
    <section class="mission-trainer-page">
      <button class="world-back-button" id="closeMissionTrainer">
        ← BACK
      </button>

      <div class="section-heading">
        <p class="section-kicker">JUNIOR ASTRONAUT TRAINING</p>
        <h2>CHOOSE YOUR MISSION</h2>
        <p>Select a world and solve its exploration challenges.</p>
      </div>

      <div class="mission-world-grid">
        ${availableWorlds.map(([key, name, icon]) => `
          <button class="mission-world-card" data-mission-world="${key}">
            <span>${icon}</span>
            <strong>${name}</strong>
            <small>START TRAINING →</small>
          </button>
        `).join("")}
      </div>
    </section>
  `;

  document.getElementById("closeMissionTrainer")
    ?.addEventListener("click", closeWorld);

  mount.querySelectorAll("[data-mission-world]").forEach(button => {
    button.addEventListener("click", () => {
      openMissionTrainer(button.dataset.missionWorld);
    });
  });

  scrollToElement(mount);
}

function renderMissionChallenge() {
  const mount = document.getElementById("worldMount");
  const challenges = missionChallenges[missionWorld];

  if (!mount || !challenges) return;

  if (missionIndex >= challenges.length) {
    showMissionResult();
    return;
  }

  const challenge = challenges[missionIndex];

  mount.innerHTML = `
    <section class="mission-trainer-page">
      <button class="world-back-button" id="closeMissionTrainer">
        ← BACK TO WEBSITE
      </button>

      <div class="section-heading">
        <p class="section-kicker">JUNIOR ASTRONAUT MISSION TRAINER</p>
        <h2>${missionWorld.toUpperCase()} MISSION</h2>
        <p>Challenge ${missionIndex + 1} of ${challenges.length}</p>
      </div>

      <div class="mission-challenge-card">
        <p class="section-kicker">${escapeHTML(challenge.title)}</p>
        <h3>${escapeHTML(challenge.question)}</h3>

        <div class="mission-options">
          ${challenge.options.map((option, index) => `
            <button class="mission-option" data-mission-option="${index}">
              <span>${String.fromCharCode(65 + index)}</span>
              ${escapeHTML(option)}
            </button>
          `).join("")}
        </div>

        <div id="missionFeedback" aria-live="polite"></div>

        <button id="nextMissionButton" hidden>
          ${missionIndex === challenges.length - 1 ? "FINISH MISSION" : "NEXT CHALLENGE →"}
        </button>
      </div>
    </section>
  `;

  document.getElementById("closeMissionTrainer")
    ?.addEventListener("click", closeWorld);

  mount.querySelectorAll("[data-mission-option]").forEach(button => {
    button.addEventListener("click", () => {
      selectMissionChoice(Number(button.dataset.missionOption));
    });
  });

  document.getElementById("nextMissionButton")
    ?.addEventListener("click", nextMissionChallenge);

  scrollToElement(mount);
}

function selectMissionChoice(index) {
  if (missionSelected) return;

  const challenge = missionChallenges[missionWorld][missionIndex];
  const feedback = document.getElementById("missionFeedback");
  const nextButton = document.getElementById("nextMissionButton");

  if (!challenge || !feedback) return;

  missionSelected = true;

  const buttons = document.querySelectorAll(".mission-option");

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;

    if (buttonIndex === challenge.answer) {
      button.classList.add("correct");
    } else if (buttonIndex === index) {
      button.classList.add("incorrect");
    }
  });

  if (index === challenge.answer) {
    missionScore++;

    feedback.innerHTML = `
      <div class="quiz-correct-message">
        <strong>✓ CORRECT DECISION!</strong>
        <p>${escapeHTML(challenge.explanation)}</p>
      </div>
    `;

    celebrateQuestion(18);
  } else {
    feedback.innerHTML = `
      <div class="quiz-wrong-message">
        <strong>✕ NOT THE BEST CHOICE.</strong>
        <p>${escapeHTML(challenge.explanation)}</p>
      </div>
    `;
  }

  if (nextButton) nextButton.hidden = false;
}

function nextMissionChallenge() {
  if (!missionSelected) return;

  missionIndex++;
  missionSelected = false;

  renderMissionChallenge();
}

function showMissionResult() {
  const mount = document.getElementById("worldMount");
  if (!mount) return;

  const total = missionChallenges[missionWorld].length;
  const percentage = Math.round((missionScore / total) * 100);

  mount.innerHTML = `
    <section class="mission-trainer-page">
      <div class="mission-result-card">
        <p class="section-kicker">MISSION REPORT</p>
        <h2>MISSION COMPLETED!</h2>
        <div class="quiz-score">${missionScore} / ${total}</div>
        <h3>${percentage}% SUCCESS</h3>
        <p>You completed the ${missionWorld.toUpperCase()} exploration challenges.</p>

        <button id="retryMissionButton">TRY AGAIN ↻</button>
        <button id="chooseAnotherMissionButton">CHOOSE ANOTHER WORLD</button>
      </div>
    </section>
  `;

  celebrateQuestion(missionScore === total ? 50 : 12);

  document.getElementById("retryMissionButton")
    ?.addEventListener("click", () => openMissionTrainer(missionWorld));

  document.getElementById("chooseAnotherMissionButton")
    ?.addEventListener("click", showMissionWorldSelection);

  scrollToElement(mount);
}

function closeMissionTrainer() {
  closeWorld();
}

function openMissionTrainerFromNavigation() {
  showMissionWorldSelection();
}

/* ===================== INITIALIZATION ===================== */

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  handleInitialHash();
});
