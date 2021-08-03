export type DependencyResponse = {
  content: Dependency[];
  totalPages: number;
};

export type Dependency = {
  id: number;
  sigla: string;
  descricao: string;
};
