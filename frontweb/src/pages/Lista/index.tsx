import './styles.scss';

const Lista = () => (
  <main className="container card-base">
    <article className="blog-post">
      <h1 className="text-center blog-post-title mt-5">
        Lista de abreviaturas
      </h1>
      <h2 className="text-center blog-post-title mt-5">
        Lista de abreviatura dos nomes dos colaboradores
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Abreviatura</th>
            <th scope="col">Colaboradores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AGD</td>
            <td>Amanda Gabriela Duarte Prudencio </td>
          </tr>
          <tr>
            <td>APP</td>
            <td>Amanda Pereira Peres</td>
          </tr>
          <tr>
            <td>ACM</td>
            <td>Ana Carolina Moreira da Nóbrega</td>
          </tr>
          <tr>
            <td>CF</td>
            <td>Cristiany Fernandes Guimarães da Cunha</td>
          </tr>
          <tr>
            <td>CLS</td>
            <td>Cleide Lemes da Silva</td>
          </tr>
          <tr>
            <td>DBO</td>
            <td>Danielle Brito de Arruda Oliveira</td>
          </tr>
          <tr>
            <td>GK</td>
            <td>Grace Kelly Valeras da Silva</td>
          </tr>
          <tr>
            <td>FSL</td>
            <td>Fernanda Souza de Lima</td>
          </tr>
          <tr>
            <td>IML</td>
            <td>Iorrane Meneses Linhares</td>
          </tr>
          <tr>
            <td>JSA</td>
            <td>Jaqueline Suzamar Alves dos Santos</td>
          </tr>
          <tr>
            <td>MPG</td>
            <td>Ana Carolina Moreira da Nóbrega</td>
          </tr>
          <tr>
            <td>RC</td>
            <td>Rebeca Carvalho</td>
          </tr>
          <tr>
            <td>RPS</td>
            <td>Rodrigo Pereira de Sousa</td>
          </tr>
          <tr>
            <td>SMR</td>
            <td>Sthéfanie Mamede Ribeiro</td>
          </tr>
          <tr>
            <td>TOM</td>
            <td>Thaís de Oliveira Monteiro</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-center blog-post-title mt-5">
        Lista de abreviaturas
      </h2>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>DH</td>
            <td>Dicionário Houaiss Eletrônico de Língua Portuguesa</td>
          </tr>
          <tr>
            <td>CAPES</td>
            <td>Coordenação de Aperfeiçoamento de Pessoal de Nível Superior</td>
          </tr>
          <tr>
            <td>CTB</td>
            <td>Código de Trânsito do Brasil</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-center blog-post-title mt-5">
        Lista de abreviaturas das marcas de uso
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Abreviatura</th>
            <th scope="col">Marcas de uso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hum.</td>
            <td>humorístico</td>
          </tr>
          <tr>
            <td>pej.</td>
            <td>pejorativo</td>
          </tr>
          <tr>
            <td>inf.</td>
            <td>informal</td>
          </tr>
          <tr>
            <td>fig.</td>
            <td>figurado</td>
          </tr>
          <tr>
            <td>gír.</td>
            <td>gíria</td>
          </tr>
          <tr>
            <td>tabu.</td>
            <td>tabuísmo</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-center blog-post-title mt-5">
        Lista de abreviatura das marcas terminológicas
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Abreviatura</th>
            <th scope="col">Área de Especialidade</th>
            <th scope="col">Abreviatura</th>
            <th scope="col">Área de Especialidade</th>
            <th scope="col">Abreviatura</th>
            <th scope="col">Área de Especialidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Adm</td>
            <td>Administração</td>
            <td>Enol</td>
            <td>Enologia</td>
            <td>Mod</td>
            <td>Moda</td>
          </tr>
          <tr>
            <td>Agr</td>
            <td>Agricultura</td>
            <td>Esp</td>
            <td>Esporte</td>
            <td>Mus</td>
            <td>Música</td>
          </tr>
          <tr>
            <td>Alim</td>
            <td>Alimentação</td>
            <td>Est</td>
            <td>Estatística</td>
            <td>Museol</td>
            <td>Museologia</td>
          </tr>
          <tr>
            <td>Anat</td>
            <td>Anatomia</td>
            <td>Ét</td>
            <td>Ética</td>
            <td>Nobil</td>
            <td>Nobiliarquia</td>
          </tr>
          <tr>
            <td>Antrop</td>
            <td>Antropologia</td>
            <td>Fil</td>
            <td>Filosofia</td>
            <td>Nums</td>
            <td>Numismática</td>
          </tr>
          <tr>
            <td>Arq</td>
            <td>Arquitetura</td>
            <td>Filat</td>
            <td>Filatelia</td>
            <td>Orto</td>
            <td>Ortografia</td>
          </tr>
          <tr>
            <td>Arqueol</td>
            <td>Arqueologia</td>
            <td>Fin</td>
            <td>Finanças</td>
            <td>Paleogr</td>
            <td>Paleografia</td>
          </tr>
          <tr>
            <td>Art</td>
            <td>Artes</td>
            <td>Fís</td>
            <td>Física</td>
            <td>Pec</td>
            <td>Pecuária</td>
          </tr>
          <tr>
            <td>Astro</td>
            <td>Astronomia</td>
            <td>Folc</td>
            <td>Folclore</td>
            <td>Pet</td>
            <td>Petrologia (litologia)</td>
          </tr>
          <tr>
            <td>Astrol</td>
            <td>Astrologia</td>
            <td>Fon</td>
            <td>Fonética</td>
            <td>Pirot</td>
            <td>Pirotecnia</td>
          </tr>
          <tr>
            <td>Astronau</td>
            <td>Astronáutica</td>
            <td>Fonogr</td>
            <td>Fonográfica (Industria)</td>
            <td>Pol</td>
            <td>Política</td>
          </tr>
          <tr>
            <td>Aut</td>
            <td>Automação</td>
            <td>Fot</td>
            <td>Fotografia</td>
            <td>Perfm</td>
            <td>Perfumaria</td>
          </tr>
          <tr>
            <td>Automat</td>
            <td>Automatismo</td>
            <td>Gem</td>
            <td>Gemologia</td>
            <td>Procdad</td>
            <td>Processamento de dados</td>
          </tr>
          <tr>
            <td>Bibl</td>
            <td>Bibliologia</td>
            <td>Geo</td>
            <td>Geografia</td>
            <td>Pesc</td>
            <td>Pesca</td>
          </tr>
          <tr>
            <td>Bio</td>
            <td>Biologia</td>
            <td>Geol</td>
            <td>Geologia</td>
            <td>Psic</td>
            <td>Psicologia</td>
          </tr>
          <tr>
            <td>Caligr</td>
            <td>Caligrafia</td>
            <td>Gram</td>
            <td>Gramática</td>
            <td>Pub</td>
            <td>Publicidade</td>
          </tr>
          <tr>
            <td>Cer</td>
            <td>Cerâmica</td>
            <td>Grav</td>
            <td>Gravura</td>
            <td>Quím</td>
            <td>Química</td>
          </tr>
          <tr>
            <td>Ciber</td>
            <td>Cibernética</td>
            <td>Her</td>
            <td>Heráldica</td>
            <td>Rád</td>
            <td>Rádio</td>
          </tr>
          <tr>
            <td>Cine</td>
            <td>Cinema</td>
            <td>Hidrlol</td>
            <td>Hidrologia</td>
            <td>Rec. Hum</td>
            <td>Recursos Humanos</td>
          </tr>
          <tr>
            <td>Cir</td>
            <td>Cirurgia</td>
            <td>Higro</td>
            <td>Higrologia</td>
            <td>Rod</td>
            <td>Rodovia</td>
          </tr>
          <tr>
            <td>Clim</td>
            <td>Climatologia</td>
            <td>Hist</td>
            <td>História</td>
            <td>Rel</td>
            <td>Religião</td>
          </tr>
          <tr>
            <td>Cer</td>
            <td>Cerâmica</td>
            <td>Grav</td>
            <td>Gravura</td>
            <td>Quím</td>
            <td>Química</td>
          </tr>
          <tr>
            <td>Com</td>
            <td>Comércio</td>
            <td>Hort</td>
            <td>Horticultura</td>
            <td>Seg</td>
            <td>Seguros</td>
          </tr>
          <tr>
            <td>Comp. Graf</td>
            <td>Arte Gráfica</td>
            <td>Hotel</td>
            <td>Hotelaria</td>
            <td>Seric</td>
            <td>Sericultura</td>
          </tr>
          <tr>
            <td>Comn</td>
            <td>Comunicação</td>
            <td>Icon</td>
            <td>Iconografia</td>
            <td>Sid</td>
            <td>Siderúrgica</td>
          </tr>
          <tr>
            <td>Const</td>
            <td>Construção</td>
            <td>Ind</td>
            <td>Indústria</td>
            <td>Socioling</td>
            <td>Sociolinguística</td>
          </tr>
          <tr>
            <td>Cont</td>
            <td>Contabilidade</td>
            <td>Infor.</td>
            <td>Informática</td>
            <td>Sociol</td>
            <td>Sociologia</td>
          </tr>
          <tr>
            <td>Cosmet</td>
            <td>Cosmética</td>
            <td>Jor</td>
            <td>Jornalismo</td>
            <td>Taqui</td>
            <td>Taquigrafia</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>Costura</td>
            <td>Lud</td>
            <td>Ludologia</td>
            <td>Taur</td>
            <td>Tauromaquia</td>
          </tr>
          <tr>
            <td>Cript</td>
            <td>Criptografia</td>
            <td>Ling</td>
            <td>Linguística</td>
            <td>Teatr</td>
            <td>Teatro</td>
          </tr>
          <tr>
            <td>Cul</td>
            <td>Culinária</td>
            <td>Lit</td>
            <td>Literatura</td>
            <td>Tec</td>
            <td>Tecnologia</td>
          </tr>
          <tr>
            <td>Curt</td>
            <td>Cutelaria</td>
            <td>Maçon</td>
            <td>Maçonaria</td>
            <td>Topog</td>
            <td>Topografia</td>
          </tr>
          <tr>
            <td>Decor</td>
            <td>Decoração</td>
            <td>Mat</td>
            <td>Matemática</td>
            <td>Tur</td>
            <td>Turismo</td>
          </tr>
          <tr>
            <td>Des</td>
            <td>Desenho</td>
            <td>Mater</td>
            <td>Materiais</td>
            <td>Transp</td>
            <td>Transporte</td>
          </tr>
          <tr>
            <td>Dipl</td>
            <td>Diplomacia</td>
            <td>Mec</td>
            <td>Mecânica</td>
            <td>Ufo</td>
            <td>Ufologia</td>
          </tr>
          <tr>
            <td>Dir</td>
            <td>Direito</td>
            <td>Med</td>
            <td>Medicina</td>
            <td>Urb</td>
            <td>Urbanismo</td>
          </tr>
          <tr>
            <td>Danç</td>
            <td>Dança</td>
            <td>Meteo</td>
            <td>Meteorologia</td>
            <td>Vest</td>
            <td>Vestuário</td>
          </tr>
          <tr>
            <td>Doc</td>
            <td>Documentação</td>
            <td>Metal</td>
            <td>Metalúrgica</td>
            <td>Venat</td>
            <td>Arte Venatória</td>
          </tr>
          <tr>
            <td>Econ</td>
            <td>Economia</td>
            <td>Metr</td>
            <td>Metrologia</td>
            <td>Vet</td>
            <td>Veterinária</td>
          </tr>
          <tr>
            <td>Edit</td>
            <td>Editoração</td>
            <td>Mid</td>
            <td>Mídia</td>
            <td>Zoo</td>
            <td>Zoologia</td>
          </tr>
          <tr>
            <td>Educ</td>
            <td>Educação</td>
            <td>Mil</td>
            <td>Militar</td>
            <td>Zootec</td>
            <td>Zootecnia</td>
          </tr>
          <tr>
            <td>Eletr</td>
            <td>Eletricidade</td>
            <td>Miner</td>
            <td>Mineralogia</td>
            <td>Encad</td>
            <td>Encadernação</td>
          </tr>
          <tr>
            <td>Mit</td>
            <td>Mitologia</td>
            <td>Eng</td>
            <td>Engenharia</td>
            <td>Mkt</td>
            <td>Marketing</td>
          </tr>
        </tbody>
      </table>
    </article>
  </main>
);

export default Lista;
