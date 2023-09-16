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

const encontrarPessoa = (nome) => {
  // Seu codigo aqui...
  const encontrarPessoa = objeto.funcionarios
    .filter((pessoa) => pessoa.nome === nome || pessoa.sobrenome === nome)
  return encontrarPessoa;
};

console.log(encontrarPessoa('Souza'));

module.exports = encontrarPessoa;
