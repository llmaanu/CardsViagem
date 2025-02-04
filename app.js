"use strict";

const disciplinas = [
    {nome: "PWBE", cor: 'yellow'},
    {nome: "PWFE", cor: 'red'},
    {nome: "PPDM", cor: 'blue'},
    {nome: "PRO", cor: 'pink'},
    {nome: "SOP", cor: 'green'}
]


function criarItemMenu(disciplina) {
  const listaMenu = document.getElementById("menu");
  const novoItem = document.createElement("li");
  const novoLink = document.createElement("a");
  document.documentElement.style.setProperty('--cor-hover', disciplina.cor)

  novoLink.href = "#";
  novoLink.textContent = disciplina;

  novoItem.appendChild(novoLink);
  listaMenu.appendChild(novoItem);
}

disciplinas.forEach(criarItemMenu);
