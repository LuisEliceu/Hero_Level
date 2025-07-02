// Lista de heróis com nome e XP
const herois = [
  { nome: "Aragorn", xp: 7200 },
  { nome: "Legolas", xp: 8500 },
  { nome: "Gimli", xp: 3000 },
  { nome: "Boromir", xp: 950 },
  { nome: "Gandalf", xp: 12000 }
];

// Função que determina o nível com base na XP
function determinarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else return "Radiante";
}

// Percorre cada herói e exibe a mensagem
for (let heroi of herois) {
  let nivel = determinarNivel(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
