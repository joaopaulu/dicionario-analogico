CREATE TABLE categorias (
  id bigserial NOT NULL,
  descricao varchar(255) DEFAULT NULL,
  abreviacao varchar(20) DEFAULT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE,
  updated_at TIMESTAMP WITHOUT TIME ZONE,
  PRIMARY KEY (id)
);

INSERT INTO categorias VALUES
(2,'S. substantivo','s.','2016-01-28','2018-01-06'),
(3,'Adj. adjetivo','adj.','2016-01-28','2018-01-06'),
(4,'V. verbo','v.','2016-01-28','2018-01-06'),
(5,'Adv. advérbio','adv.','2016-01-28','2018-01-06'),
(6,'Conj. conjunção','conj.','2016-01-28','2018-01-06'),
(7,'Inter. interjeição','inter.','2016-01-28','2018-01-06'),
(8,'Prep. Preposição','prep.','2016-01-28','2018-01-06'),
(9,'Art. Artigo','art.','2016-01-28','2018-01-06'),
(10,'Num. Numeral','num.','2016-01-28','2018-01-06'),
(11,'Pron. Dem. Pronome demonstrativo','pron. dem.','2016-01-28','2018-01-06'),
(12,'Pron. de trat. Pronome de tratamento','pron. de trat.','2016-01-28','2018-01-06'),
(13,'Pron. indef. Pronome indefinido','pron. indef.','2016-01-28','2018-01-06'),
(14,'Pron. pess. Pronome pessoal','pron. pess.','2016-01-28','2018-01-06'),
(15,'Pron. rel. Pronome relativo','pron. rel.','2016-01-28','2018-01-06');

