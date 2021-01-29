CREATE TABLE users (
  id bigserial NOT NULL ,
  name varchar(150) NOT NULL,
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  role varchar(5) NOT NULL default 'user',
  email varchar(200) NOT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE,
  updated_at TIMESTAMP WITHOUT TIME ZONE,
  PRIMARY KEY (id));