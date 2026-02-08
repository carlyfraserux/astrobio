// STELLAR CLASSIFICATION
const starData = {
    O: {
        title: "O-Type Star",
        desc: " Extremely hot, massive stars with very short lifespans. This makes them unstable for supporting life.",
        temp: " 30,000+ K",
        life: " Millions of years",
        habit: " Very Unlikely",
    },
    B: {
        title: "B-Type Star",
        desc: " Hot, luminous stars with intense radiation output. Strong radiation makes planetary habitability unlikely.",
        temp: " 10,000–30,000 K",
        life: " Tens of millions of years",
        habit: " Very Unlikely",
    },
    A: {
        title: "A-Type Star",
        desc: " Bright white stars with relatively short lifespans, which may be too short for life to develop.",
        temp: " 7,500–10,000 K",
        life: " Hundreds of millions of years",
        habit: " Unlikely",
    },
    F: {
        title: "F-Type Star",
        desc: " Warm stars with higher energy output than the Sun. Higher radiation may challenge long-term habitability.",
        temp: " 6,000–7,500 K",
        life: " 2–4 billion years",
        habit: " Moderate",
    },
    G: {
        title: "G-Type Star",
        desc: " Sun-like stars with balanced energy and stable output. This type is a primary focus of Astrobio research.",
        temp: " 5,200–6,000 K",
        life: " 10 billion years",
        habit: " Excellent",
    },
    K: {
        title: "K-Type Star",
        desc: " Cool, long-lived stars with stable radiation environments for long-term habitability. Exciting prospects for Astrobio research.",
        temp: " 3,700–5,200 K",
        life: " 20–40 billion years",
        habit: " Excellent",
    },
    M: {
        title: "M-Type Star",
        desc: " Small, cool red dwarfs with extreme longevity. Higher stellar activity and close habitable zones pose risks for habitability.",
        temp: " 2,400–3,700 K",
        life: " Trillions of years",
        habit: " Challenging",
    }
};
document.querySelectorAll(".star-btn").forEach(button => {
    button.addEventListener("click", () => {
        const star = starData[button.dataset.star];
        document.getElementById("modalTitle").textContent = star.title;
        document.getElementById("modalDescription").textContent = star.desc;
        document.getElementById("modalTemp").textContent = star.temp;
        document.getElementById("modalLife").textContent = star.life;
        document.getElementById("modalHabit").textContent = star.habit;
        document.getElementById("modalNote").textContent = star.note;
        const modal = new bootstrap.Modal(document.getElementById("starModal"));
        modal.show();
    });
});


// EXOPLANET CLASSIFCATION
const planetData = {
    "Terrestrial": {
        desc: "Rocky, Earth-like planets with solid surfaces.",
        radius: "0.5–1.5 Earth radii",
        radiusPx: 60,
        mass: "0.1–5 Earth masses",
        atmosphere: "Thin to moderate",
        orbit: "Varies (habitable zone possible)",
        habitability: "Possible"
    },
    "Super-Earth": {
        desc: "Large rocky planets, may retain dense atmospheres.",
        radius: "1.5–2.5 Earth radii",
        radiusPx: 80,
        mass: "5–10 Earth masses",
        atmosphere: "Moderate to thick",
        orbit: "Varies (habitable zone possible)",
        habitability: "Possible"
    },
    "Mini-Neptune": {
        desc: "Small gas planets with deep atmospheres.",
        radius: "2.5–4 Earth radii",
        radiusPx: 100,
        mass: "10–20 Earth masses",
        atmosphere: "Thick H/He",
        orbit: "Close to star",
        habitability: "Unlikely"
    },
    "Gas Giant": {
        desc: "Jupiter- or Saturn-like planets.",
        radius: "4–15 Earth radii",
        radiusPx: 140,
        mass: "20–3000 Earth masses",
        atmosphere: "Thick H/He",
        orbit: "Varies",
        habitability: "Unlikely"
    },
    "Ice Giant": {
        desc: "Neptune- or Uranus-like planets.",
        radius: "3–6 Earth radii",
        radiusPx: 120,
        mass: "10–50 Earth masses",
        atmosphere: "Water, ammonia, methane",
        orbit: "Far from star",
        habitability: "Very unlikely"
    },
    "Hot Jupiter": {
        desc: "Gas giants with extremely short orbital periods.",
        radius: "10–15 Earth radii",
        radiusPx: 160,
        mass: "100–1000 Earth masses",
        atmosphere: "Thick, hot H/He",
        orbit: "Very close to star",
        habitability: "No"
    },
    "Rogue": {
        desc: "Free-floating planets wandering through space.",
        radius: "Varies",
        radiusPx: 90,
        mass: "Varies",
        atmosphere: "Varies",
        orbit: "No host star",
        habitability: "No"
    }
};
const diagramContainer = document.querySelector('.exoplanet-diagram');
Object.entries(planetData).forEach(([type, data]) => {
    const btn = document.createElement('button');
    btn.className = `planet-btn ${type.toLowerCase().replace(/ /g,'-')}`;
    btn.dataset.planet = type;
    btn.style.width = `${data.radiusPx}px`;
    btn.style.height = `${data.radiusPx}px`;
    btn.textContent = type;
    diagramContainer.appendChild(btn);
});
diagramContainer.addEventListener('click', e => {
    if (!e.target.classList.contains('planet-btn')) return;
    const type = e.target.dataset.planet;
    const data = planetData[type];
    const planetModal = new bootstrap.Modal(document.getElementById('planetModal'));
    document.getElementById('planetModalTitle').textContent = type;
    document.getElementById('planetModalNote').textContent = data.desc;
    document.getElementById('planetModalRadius').textContent = data.radius;
    document.getElementById('planetModalMass').textContent = data.mass;
    document.getElementById('planetModalAtmosphere').textContent = data.atmosphere;
    document.getElementById('planetModalOrbit').textContent = data.orbit;
    document.getElementById('planetModalHabit').textContent = data.habitability;
    planetModal.show();
});