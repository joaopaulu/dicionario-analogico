export type ArmasResponse = {
  content: Arma[];
  totalPages: number;
};

export type Arma = {
  id: number;
  descricao: string;
};
