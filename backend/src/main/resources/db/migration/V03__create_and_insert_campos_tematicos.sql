CREATE TABLE campos_tematicos (
  id bigserial NOT NULL,
  nome varchar(100) NOT NULL,
  descricao text DEFAULT NULL,
  informacao_gramatical varchar(45) DEFAULT NULL,
  tipo_dependencia int DEFAULT NULL,
  genero char(4) DEFAULT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE,
  updated_at TIMESTAMP WITHOUT TIME ZONE,
  PRIMARY KEY (id)
);

INSERT INTO campos_tematicos (id, nome, descricao, informacao_gramatical, tipo_dependencia, genero, created_at, updated_at)
VALUES
(1,'transporte','veículo utilizado para locomoção de passageiros ou carga. (MV)','s.',1,'m.','2016-01-27','2018-01-17'),
(5,'corpo Humano','estrutura física de um organismo vivo com funções fisiológicas, constituído por cabeça, tronco e membros.','s.',1,'m.','2016-01-27','2018-01-17'),
(9,'lazer','atividade em momento de descontração para descanso, entretenimento e diversão. (DBO)','s.','1','f.','2016-01-27','2018-01-18'),
(12,'trabalho','1 ocupação, esforço físico e/ou mental a fim de alcançar determinado objetivo. (ACM) 2 atividade remunerada ou não. (ACM)','s.',1,'m.','2016-01-27','2018-01-17'),
(14,'vestuário','peça de roupa para cobrir o corpo humano. (MV)','s.',1,'m.','2016-01-27','2018-01-17'),
(15,'estudo','1 processo de exercer atividades de aprendizagem e de conhecimento para compreender algo que se desconhece ou de que se tem pouco conhecimento. (APP) 2 conhecimento adquirido pela aplicação da inteligência. (APP)','s.',1,'m.','2016-01-27','2018-01-17'),
(16,'habitação','lugar onde se vive. (MV)','s.',1,'f.','2016-03-05','2018-01-17'),
(17,'família','grupo de pessoas ligadas por laços sanguíneos, casamento, união estável, afinidade  ou adoção, para cuidar um do outro. (MV)','s.',1,'f.','2016-03-16','2018-03-13'),
(18,'animal','ser vivo que se locomove. (MV)','s.',1,'m.','2016-03-16','2018-01-17'),
(19,'alimentação','abastecimento com substâncias para nutrição. (ILM)','s.',1,'f.','2016-04-26','2018-01-17');