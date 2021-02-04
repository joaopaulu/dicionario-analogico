CREATE TABLE campos_tematicos (
  id bigserial NOT NULL,
  nome varchar(100) NOT NULL,
  descricao text DEFAULT NULL,
  informacao_gramatical varchar(45) DEFAULT NULL,
  tipo_dependencia char(10) DEFAULT NULL,
  genero char(4) DEFAULT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE,
  updated_at TIMESTAMP WITHOUT TIME ZONE,
  PRIMARY KEY (id)
);

INSERT INTO campos_tematicos (nome, descricao, informacao_gramatical, tipo_dependencia, genero, created_at)
VALUES 
('Transporte','Veículo utilizado para locomoção de passageiros ou carga. (MV)','s.','1','m.', NOW()),
('Corpo Humano','Estrutura física de um organismo vivo com funções fisiológicas, constituído por cabeça, tronco e membros.','s.','1','m.', NOW()),
('Lazer','Atividade em momento de descontração para descanso, entretenimento e diversão. (DBO)','s.','1','f.',NOW()),
('Trabalho','1 Ocupação, esforço físico e/ou mental a fim de alcançar determinado objetivo. (ACM) 2 atividade remunerada ou não. (ACM)','s.','1','m.', NOW()),
('Vestuário','peça de roupa para cobrir o corpo humano. (MV)','s.','1','m.', NOW()),
('Estudo','1 processo de exercer atividades de aprendizagem e de conhecimento para compreender algo que se desconhece ou de que se tem pouco conhecimento. (APP) 2 conhecimento adquirido pela aplicação da inteligência. (APP)','s.','1','m.', NOW()),
('Habitação','lugar onde se vive. (MV)','s.','1','f.', NOW()),
('Família','grupo de pessoas ligadas por laços sanguíneos, casamento, união estável, afinidade  ou adoção, para cuidar um do outro. (MV)','s.','1','f.',NOW()),
('Animal','ser vivo que se locomove. (MV)','s.','1','m.', NOW()),
('Alimentação','abastecimento com substâncias para nutrição. (ILM)','s.','1','f.', NOW());