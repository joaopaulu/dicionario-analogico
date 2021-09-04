import { Dependency } from './dependency';

export type TematicResponse = {
  content: Tematic[];
  totalPages: number;
};

export type Tematic = {
  id: number;
  nome: string;
  descricao: string;
  informacaoGramatical: string;
  tipoDependencia: Dependency[];
  genero: string;
};
