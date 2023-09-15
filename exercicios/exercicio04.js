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

const pessoaMaisVelha = () => {
  // Seu codigo aqui...
  const idades = pessoas.reduce((acumulador, valorAtual) => {
    if (acumulador.idade > valorAtual.idade) return acumulador;
    return valorAtual;
  })
  return idades;
};

// console.log(pessoaMaisVelha());

const pessoaMaisNova = () => {
  // Seu codigo aqui...
  const pessoasx = pessoas.reduce((acumulador, valorAtual) => {
    if (acumulador.idade < valorAtual.idade) return acumulador;
    return valorAtual;
  })
  return pessoasx;
};

console.log(pessoaMaisNova());

module.exports = {
  pessoaMaisVelha,
  pessoaMaisNova,
};
