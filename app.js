"use strict";

const disciplinas = [
    {nome: "PWBE", cor: 'yellow' , icon: 'pwbe.png'},
    {nome: "PWFE", cor: 'red', icon: 'pwfe.png'},
    {nome: "PPDM", cor: 'blue', },
    {nome: "PRO", cor: 'pink'},
    {nome: "SOP", cor: 'green'}
]


function criarItemMenu(disciplina) {
  const listaMenu = document.getElementById("menu");
  const novoItem = document.createElement("li");
  const novoLink = document.createElement("a");
  const novaimagem

  novoLink.href = "#";
  novoLink.textContent = disciplina.nome
  novoLink.style='--cor-hover: ${disciplina.cor}'

  novoItem.appendChild(novoLink);
  listaMenu.appendChild(novoItem);
}

disciplinas.forEach(criarItemMenu);
