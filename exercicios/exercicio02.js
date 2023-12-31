const { log } = require("console");

/* eslint-disable no-console */
const pessoas = [
  {
    nome: 'João',
    sobrenome: 'Silva',
    sexo: 'M',
    idade: 48,
  },
  {
    nome: 'Maria',
    sobrenome: 'Souza',
    sexo: 'F',
    idade: 32,
  },
  {
    nome: 'Antônio',
    sobrenome: 'Aguiar',
    sexo: 'M',
    idade: 24,
  },
  {
    nome: 'Joana',
    sobrenome: 'Pereira',
    sexo: 'F',
    idade: 18,
  },
];

const mulheres = () => pessoas.filter(({ sexo }) => sexo === 'F')

console.log(mulheres());

module.exports = mulheres;
