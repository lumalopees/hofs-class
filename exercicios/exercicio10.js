/* eslint-disable no-console */
const objeto = {
  funcionarios: [
    {
      id: 1,
      nome: 'João',
      sobrenome: 'Silva',
    },
    {
      id: 2,
      nome: 'Maria',
      sobrenome: 'Souza',
    },
    {
      id: 3,
      nome: 'Antonio',
      sobrenome: 'Ferreira',
    },
    {
      id: 4,
      nome: 'Mariana',
      sobrenome: 'Almeida',
    },
  ],
};

const encontrarPessoa = (...parametros) => {
  // Seu codigo aqui...
  const encontre = objeto.funcionarios
    .filter((pessoas) => parametros.includes(pessoas.id) || parametros.includes(pessoas.nome) || parametros.includes(pessoas.sobrenome));
  return encontre;
};

console.log(encontrarPessoa(1, 'Antonio', 'Almeida'));

module.exports = encontrarPessoa;
