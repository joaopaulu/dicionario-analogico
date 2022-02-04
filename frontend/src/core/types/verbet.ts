import {Dependency} from "./dependency";
import {User} from "./user";
import {Tematic} from "./tematic";

export type VerbetResponse = {
    content: Verbet[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
};

export type Verbet = {
    id: number;
    descricao: string;
    separacaoSilabica: string;
    pronuncia: string;
    genero: string;
    transitividadeVerbal: string;
    variantes: string;
    definicao: string;
    fonteDefinicao: string;
    abvFonteContexto: string;
    notas: string;
    fonteNota: string;
    autor: string;
    abvAutor: string;
    fraseologia: string;
    data: string;
    ilustracao: string;
    equiEspanhol: string;
    equiFrances: string;
    equiIngles: string;
    equiItaliano: string;
    equiJapones: string;
    equiLibras: string;
    userIdCreated: User;
    userIdModified: User;
    tematics: Tematic;
    dependente: Dependency;


};
