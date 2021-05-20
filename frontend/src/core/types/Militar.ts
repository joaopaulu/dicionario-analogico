import { Arma } from './Arma';
import { Om } from './Om';
import { Posto } from './Posto';

export type MilitaresResponse = {
  content: Militar[];
  totalPages: number;
};

export type Militar = {
  id: number;
  nomeCompleto: string;
  nomeGuerra: string;
  idtMilitar: string;
  apresentacao: string;
  turma: string;
  omAtual: Om;
  omFutura: Om;
  armas: Arma;
  postos: Posto;
};
