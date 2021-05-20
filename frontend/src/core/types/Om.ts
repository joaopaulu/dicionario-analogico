export type OmsResponse = {
  content: Om[];
  totalPages: number;
};

export type Om = {
  id: number;
  descricao: string;
};
