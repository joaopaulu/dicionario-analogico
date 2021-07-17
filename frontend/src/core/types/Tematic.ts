export type TematicResponse = {
  content: Tematic[];
  totalPages: number;
};

export type Tematic = {
  id: number;
  nome: string;
  descricao: string;
  informacao_gramatical: string;
  tipo_dependendia: string;
  genero: string;
};
