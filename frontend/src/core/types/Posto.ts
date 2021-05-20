export type PostosResponse = {
  content: Posto[];
  totalPages: number;
};

export type Posto = {
  id: number;
  sigla: string;
  descricao: string;
  antiguidade: number;
};
