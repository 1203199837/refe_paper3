const profiles = [
  {
    name: "Dr. Elena Rossi",
    affiliation: "Politecnico di Milano",
    fields: "AI Ethics, Explainable ML, Public Policy",
    goal: "Cerco co-autori per paper su governance algoritmica in PA.",
    compatibility: 92,
  },
  {
    name: "Prof. Marco Bianchi",
    affiliation: "Sapienza Università di Roma",
    fields: "Digital Humanities, NLP, Computational Linguistics",
    goal: "Progetto interdisciplinare su analisi semantica di corpora storici.",
    compatibility: 88,
  },
  {
    name: "Dr. Aisha Rahman",
    affiliation: "University of Amsterdam",
    fields: "Climate Policy, Data Science, Urban Resilience",
    goal: "Team per call Horizon su adattamento urbano e AI predittiva.",
    compatibility: 86,
  },
];

let pointer = 0;
let matches = 0;

const card = document.getElementById("matchCard");
const status = document.getElementById("demoStatus");

function renderCard() {
  const profile = profiles[pointer];

  if (!profile) {
    card.innerHTML = `
      <h3>Nessun altro profilo</h3>
      <p>Hai completato il feed demo. Premi “Ricomincia” per riprovare.</p>
      <p><strong>Match ottenuti:</strong> ${matches}</p>
    `;
    return;
  }

  card.innerHTML = `
    <h3>${profile.name}</h3>
    <p><strong>Affiliazione:</strong> ${profile.affiliation}</p>
    <p><strong>Aree:</strong> ${profile.fields}</p>
    <p><strong>Obiettivo:</strong> ${profile.goal}</p>
    <p><strong>Compatibilità NLP:</strong> ${profile.compatibility}%</p>
  `;
}

function likeProfile() {
  const profile = profiles[pointer];
  if (!profile) return;

  matches += 1;
  status.textContent = `✅ Match con ${profile.name}! Chat riservata attivata.`;
  pointer += 1;
  renderCard();
}

function skipProfile() {
  const profile = profiles[pointer];
  if (!profile) return;

  status.textContent = `⏭️ Hai saltato ${profile.name}.`;
  pointer += 1;
  renderCard();
}

function resetDemo() {
  pointer = 0;
  matches = 0;
  status.textContent = "Demo resettata. Inizia un nuovo ciclo di matching.";
  renderCard();
}

document.getElementById("likeBtn").addEventListener("click", likeProfile);
document.getElementById("skipBtn").addEventListener("click", skipProfile);
document.getElementById("resetBtn").addEventListener("click", resetDemo);

document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", () => {
    const selector = el.getAttribute("data-scroll");
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

renderCard();
