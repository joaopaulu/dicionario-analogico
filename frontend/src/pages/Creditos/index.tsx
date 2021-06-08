import './styles.scss';

const Creditos = () => (
  <main className="container card-base">
    <article className="blog-post">
      <h1 className="text-center blog-post-title mt-5">Créditos</h1>
      <p className="text-justify lead mb-4 mt-5">
        A organização do Dicionário Informatizado Analógico de Língua Portuguesa
        foi feita com base na metodologia descrita na tese intitulada “Proposta
        de Dicionário Informatizado Analógico de Língua Portuguesa”, de
        Vilarinho (2013), sob orientação da Profª. Drª. Enilde Faulstich, nos
        projetos “Dicionário Informatizado Analógico de Língua Portuguesa”,
        “Dicionário de Aprendizagem da Língua Portuguesa”, apoiados pela
        Fundação de Apoio à Pesquisa do Distrito Federal (FAP-DF). As
        pesquisadoras envolvidas foram as Doutoras Michelle Vilarinho, Enilde
        Faulstich e Cleide Cruz. Os alunos de graduação do curso de Licenciatura
        em Letras Português do Brasil como Segunda Língua foram colaboradores da
        pesquisa. Na lista de abreviatura, há os nomes dos que contribuíram com
        o desenvolvimento do DAAPB.
      </p>
      <p className="text-justify lead mb-4 mt-5">
        Esses projetos estão vinculados ao projeto “Aplicação dos percursos
        metodológicos da Lexicologia, Lexicografia, Terminologia e da
        Terminografia para sistematização de lexemas e de termos”, coordenado
        pela Profª. Drª. Michelle Vilarinho, e ao projeto “Estudos de
        Lexicologia, Lexicografia e Terminologia”, coordenado Profª. Drª. Enilde
        Faulstich, e inscrito no Centro Nacional de Desenvolvimento Científico e
        Tecnológico (CNPq). Ambos são executados no Centro de Estudos Lexicais
        (Centro Lexterm), no âmbito da linha de pesquisa Léxico e Terminologia
        do Programa de Pós-Graduação em Linguística da Universidade de Brasília
        (UnB).
      </p>
      <p className="text-justify lead mb-4 mt-5">
        O site foi construído pelo Analista de Sistemas
        <a
          href="https://www.linkedin.com/in/joaopaulu/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          João Paulo Lima
        </a>{' '}
        .
      </p>
    </article>
  </main>
);

export default Creditos;
