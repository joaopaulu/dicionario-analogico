create table dependencies (
    id  bigserial not null,
    sigla varchar(10) not null,
    descricao varchar(255) not null,
    primary key (id)
);

INSERT INTO dependencies VALUES
(1,'hip.','hipônimo'),
(2,'mer.','merônimo'),
(3,'con1.','conceito conexo 1'),
(4,'con2.','conceito conexo 2'),
(5,'con3.','conceito conexo 3'),
(6,'con4.','conceito conexo 4'),
(7,'con5.','conceito conexo 5'),
(8,'con6.','conceito conexo 6'),
(9,'ver.','Verbo'),
(10,'sin.','Sinônimos'),
(11,'con7.','conceito conexo 7'),
(12,'con8.','conceito conexo 8'),
(13,'con9.','conceito conexo 9'),
(14,'con10.','conceito conexo 10'),
(15,'con11.','conceito conexo 11'),
(16,'con12.','conceito conexo 12'),
(17,'con13.','conceito conexo 13'),
(18,'con14.','conceito conexo 14'),
(19,'con15.','conceito conexo 15'),
(20,'con16.','conceito conexo 16'),
(21,'con17.','conceito conexo 17'),
(22,'con18.','conceito conexo 18'),
(23,'con19.','conceito conexo 19'),
(24,'con20.','conceito conexo 20');