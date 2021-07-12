export type VerbetePage = {
  content?: Verbete[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size?: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty?: boolean;
};

export type Verbete = {
  id: number;
  descricao: string;
  separacaoSilabica: string;
  pronuncia: string;
  genero: string;
  transitividadeVerbal: string;
  variantes: string;
  definicao: string;
};
