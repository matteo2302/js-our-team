console.log("JSOK");
//fase 0
const cards = document.getElementById("cards");
let workers = [
  {
    img: "wayne-barnett-founder-ceo.jpg",
    nome: "Wayne Barnett",
    lavoro: "Founder & CEO",
  },
  {
    img: "angela-caroll-chief-editor.jpg",
    nome: "Angela Caroll",
    lavoro: "Chief Editor",
  },
  {
    img: "walter-gordon-office-manager.jpg",
    nome: "Walter Gordon",
    lavoro: "Office Manager",
  },
  {
    img: "angela-lopez-social-media-manager.jpg",
    nome: "Angela Lopez",
    lavoro: "Social Media Manager",
  },
  {
    img: "scott-estrada-developer.jpg",
    nome: "Scott Estrada",
    lavoro: "Developer",
  },
  {
    img: "barbara-ramos-graphic-designer.jpg",
    nome: "Barbara Ramos",
    lavoro: "Graphic Designer",
  },
];
//creo un ciclo che crea le cards in base agli oggetti
let workerlist = "";
for (let worker of workers) {
  workerlist = `<div class="card"><img src="img/${worker.img}" />
    <h3>${worker.nome}</h3>
    <p>${worker.lavoro}</p><div>`;
  cards.innerHTML += workerlist;
}
