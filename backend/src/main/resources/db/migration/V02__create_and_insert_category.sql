CREATE TABLE categorias (
  id bigserial NOT NULL,
  descricao varchar(255) DEFAULT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE,
  updated_at TIMESTAMP WITHOUT TIME ZONE,
  PRIMARY KEY (id)
);

INSERT INTO categorias (descricao, created_at)
VALUES 
('S. substantivo', NOW()),
('Adj. adjetivo', NOW()),
('V. verbo', NOW()),
('Adv. advérbio', NOW()),
('Conj. conjunção', NOW()),
('Inter. interjeição', NOW()),
('Prep. Preposição', NOW()),
('Art. Artigo', NOW()),
('Num. Numeral', NOW()),
('Pron. Dem. Pronome demonstrativo', NOW()),
('Pron. de trat. Pronome de tratamento', NOW()),
('Pron. indef. Pronome indefinido', NOW()),
('Pron. pess. Pronome pessoal', NOW()),
('Pron. rel. Pronome relativo', NOW());

