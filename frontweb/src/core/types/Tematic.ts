export type TematicResponse = {
  content: Tematic[];
  totalPages: number;
};

export type Tematic = {
  id: number;
  nome: string;
  descricao: string;
  informacaoGramatical: string;
  tipoDependencia: string;
  genero: string;
};
