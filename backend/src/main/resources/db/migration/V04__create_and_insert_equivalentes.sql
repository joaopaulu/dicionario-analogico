CREATE TABLE equivalentes (
  id bigserial NOT NULL,
  descricao varchar(30) DEFAULT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE,
  updated_at TIMESTAMP WITHOUT TIME ZONE,
  PRIMARY KEY (id)
);

INSERT INTO equivalentes (descricao, created_at)
VALUES 
('Inglês', NOW()),
('Francês', NOW()),
('Espanhol', NOW()),
('Italiano', NOW()),
('Japonês', NOW()),
('Libras', NOW()),
('Sem Equivalentes', NOW()),
('Português', NOW());
