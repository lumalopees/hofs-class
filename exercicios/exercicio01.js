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

const emails = () => {
  // Seu codigo aqui...
  const people = pessoas.map((elemento) => `${elemento.nome.toLowerCase()}.${elemento.sobrenome.toLowerCase()}@aulao.com`)
  return people;
};

console.log(emails());

module.exports = emails;
