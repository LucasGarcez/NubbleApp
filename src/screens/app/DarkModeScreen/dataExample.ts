export type Batata = {
  id: string;
  especie: string;
  cor?: string;
};
export const batatas: Batata[] = [
  {id: '1', especie: 'batata doce', cor: 'laranja'},
  {id: '2', especie: 'batata inglesa'},
  {id: '3', especie: 'batata baroa'},
];

export type Pessoa = {
  cpf: string;
  nome: string;
  idade: number;
  contanto?: {
    email: string;
    telefone?: string;
  };
};

export const pessoas: Pessoa[] = [
  {
    cpf: '123',
    nome: 'João',
    idade: 25,
    contanto: {email: 'joao@gmail.com', telefone: '123456789'},
  },
  {cpf: '456', nome: 'Maria', idade: 30, contanto: {email: 'maria@gmail.com'}},
  {cpf: '789', nome: 'José', idade: 35},
];
