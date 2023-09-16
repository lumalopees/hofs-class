/* eslint-disable no-console */
const objeto = {
  doguinhos: [
    {
      nome: 'Rex',
      idade: 2,
      raca: 'Pug',
    },
    {
      nome: 'Bolinha',
      idade: 3,
      raca: 'Poodle',
    },
    {
      nome: 'Pé de Pano',
      idade: 10,
      raca: 'Vira-lata',
    },
    {
      nome: 'Scooby',
      idade: 7,
      raca: 'Dogue-alemão',
    },
  ],
};

const primeiroAnimalEncontrado = () => {
  // Seu codigo aqui...
  const encontra = objeto.doguinhos.filter((elemento) => elemento.idade > 5)
    .find((elemento2) => elemento2).raca;
  return encontra;
};

console.log(primeiroAnimalEncontrado());

module.exports = primeiroAnimalEncontrado;
