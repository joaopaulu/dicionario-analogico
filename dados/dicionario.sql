CREATE DATABASE  IF NOT EXISTS `dicionario_analogico` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `dicionario_analogico`;
-- MySQL dump 10.13  Distrib 5.5.47, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: dicionario_analogico
-- ------------------------------------------------------
-- Server version	5.5.46-0ubuntu0.14.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `campos_tematicos`
--

DROP TABLE IF EXISTS `campos_tematicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campos_tematicos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `user_id_created` int(11) NOT NULL,
  `created` date DEFAULT NULL,
  `user_id_modified` int(11) NOT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_campos_tematicos_usuarios1_idx` (`user_id_created`),
  CONSTRAINT `fk_campos_tematicos_usuarios1` FOREIGN KEY (`user_id_created`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campos_tematicos`
--

LOCK TABLES `campos_tematicos` WRITE;
/*!40000 ALTER TABLE `campos_tematicos` DISABLE KEYS */;
INSERT INTO `campos_tematicos` VALUES (1,'Transporte','Transportes em geral',3,'2016-01-27',3,'2016-01-27'),(2,'Alimentação','Alimentação',4,'2016-01-27',4,'2016-01-27'),(3,'Atividades comerciais','Atividades comerciais',4,'2016-01-27',4,'2016-01-27'),(4,'Atividades domésticas','Atividades domésticas',4,'2016-01-27',4,'2016-01-27'),(5,'Corpo Humano','Corpo Humano',4,'2016-01-27',4,'2016-01-27'),(6,'Educação','Educação',4,'2016-01-27',4,'2016-01-27'),(7,'Esportes','Esportes',4,'2016-01-27',4,'2016-01-27'),(8,'Festividades','Festividades',4,'2016-01-27',4,'2016-01-27'),(9,'Lazer','Lazer',4,'2016-01-27',4,'2016-01-27'),(10,'Moradia','Moradia',4,'2016-01-27',4,'2016-01-27'),(11,'Tempo','Tempo',4,'2016-01-27',4,'2016-01-27'),(12,'Trabalho','Trabalho',4,'2016-01-27',4,'2016-01-27'),(13,'Relações sociais','Relações sociais',4,'2016-01-27',4,'2016-01-27'),(14,'Vestimenta','Vestimenta',4,'2016-01-27',4,'2016-01-27'),(15,'Viagem','Viagem',4,'2016-01-27',4,'2016-01-27');
/*!40000 ALTER TABLE `campos_tematicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `user_id_created` int(11) NOT NULL,
  `created` date DEFAULT NULL,
  `user_id_modified` int(11) NOT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categorias_usuarios1_idx` (`user_id_created`),
  CONSTRAINT `fk_categorias_usuarios1` FOREIGN KEY (`user_id_created`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (2,'S. substantivo',4,'2016-01-28',4,'2016-01-28'),(3,'Adj. adjetivo',4,'2016-01-28',4,'2016-01-28'),(4,'V. verbo',4,'2016-01-28',4,'2016-01-28'),(5,'Adv. advérbio',4,'2016-01-28',4,'2016-01-28'),(6,'Conj. conjunção',4,'2016-01-28',4,'2016-01-28'),(7,'Inter. interjeição',4,'2016-01-28',4,'2016-01-28'),(8,'Prep. Preposição',4,'2016-01-28',4,'2016-01-28'),(9,'Art. Artigo',4,'2016-01-28',4,'2016-01-28'),(10,'Num. Numeral',4,'2016-01-28',4,'2016-01-28'),(11,'Pron. Dem. Pronome demonstrativo',4,'2016-01-28',4,'2016-01-28'),(12,'Pron. de trat. Pronome de tratamento',4,'2016-01-28',4,'2016-01-28'),(13,'Pron. indef. Pronome indefinido',4,'2016-01-28',4,'2016-01-28'),(14,'Pron. pess. Pronome pessoal',4,'2016-01-28',4,'2016-01-28'),(15,'Pron. rel. Pronome relativo',4,'2016-01-28',4,'2016-01-28');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias_has_verbetes`
--

DROP TABLE IF EXISTS `categorias_has_verbetes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias_has_verbetes` (
  `categoria_gramatical_id` int(11) NOT NULL,
  `verbete_id` int(11) NOT NULL,
  PRIMARY KEY (`categoria_gramatical_id`,`verbete_id`),
  KEY `fk_categoria_gramatical_has_verbete_verbete1_idx` (`verbete_id`),
  KEY `fk_categoria_gramatical_has_verbete_categoria_gramatical1_idx` (`categoria_gramatical_id`),
  CONSTRAINT `fk_categoria_gramatical_has_verbete_categoria_gramatical1` FOREIGN KEY (`categoria_gramatical_id`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_categoria_gramatical_has_verbete_verbete1` FOREIGN KEY (`verbete_id`) REFERENCES `verbetes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias_has_verbetes`
--

LOCK TABLES `categorias_has_verbetes` WRITE;
/*!40000 ALTER TABLE `categorias_has_verbetes` DISABLE KEYS */;
INSERT INTO `categorias_has_verbetes` VALUES (2,6),(3,6),(3,7),(4,7),(2,8),(2,9),(7,9),(2,10),(3,10),(2,11),(3,11);
/*!40000 ALTER TABLE `categorias_has_verbetes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equivalentes`
--

DROP TABLE IF EXISTS `equivalentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equivalentes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(45) DEFAULT NULL COMMENT 'Inglês\nFrancês\nEspanhol\nItaliano\nJaponês\nLibras',
  `user_id_created` int(11) NOT NULL,
  `created` date DEFAULT NULL,
  `user_id_modified` int(11) NOT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_equivalentes_usuarios1_idx` (`user_id_created`),
  CONSTRAINT `fk_equivalentes_usuarios1` FOREIGN KEY (`user_id_created`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equivalentes`
--

LOCK TABLES `equivalentes` WRITE;
/*!40000 ALTER TABLE `equivalentes` DISABLE KEYS */;
INSERT INTO `equivalentes` VALUES (4,'Inglês',4,'2016-01-31',4,'2016-01-31'),(5,'Francês',4,'2016-01-31',4,'2016-01-31'),(6,'Espanhol',4,'2016-01-31',4,'2016-01-31'),(7,'Italiano',4,'2016-01-31',4,'2016-01-31'),(8,'Japonês',4,'2016-01-31',4,'2016-01-31'),(9,'Libras',4,'2016-01-31',4,'2016-01-31');
/*!40000 ALTER TABLE `equivalentes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `created` date DEFAULT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','$2y$10$PbyoUTMj016MTGwzakFf4.ivW69io4mV//b/kTuAwIzHYigUHlcau','admin','thiagobarso@gmail.com','2016-01-26','2016-01-26'),(3,'João Paulo','12345678','admin','jptick@gmail.com',NULL,'2016-01-31'),(4,'jp','$2y$10$mowCzDvOj1mnoPmRleVQaeCcCd31wk.0UL89EaV6M8w9tLtHjzS22','admin','jp@gmail.com','2016-01-27','2016-01-27');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verbetes`
--

DROP TABLE IF EXISTS `verbetes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `verbetes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) NOT NULL,
  `separacao_silabica` varchar(255) NOT NULL,
  `pronuncia` varchar(45) DEFAULT NULL,
  `genero` char(15) DEFAULT NULL,
  `transitividade_verbal` char(10) DEFAULT NULL,
  `variantes` varchar(255) DEFAULT NULL,
  `definicao` varchar(45) NOT NULL,
  `fonte_definicao` varchar(45) NOT NULL,
  `abv_fonte_definicao` varchar(45) NOT NULL,
  `contexto` varchar(45) NOT NULL,
  `fonte_contexto` varchar(45) NOT NULL,
  `data_publicacao_fonte_contexto` date NOT NULL,
  `abv_fonte_contexto` varchar(45) DEFAULT NULL,
  `remissao` varchar(45) DEFAULT NULL,
  `campo_tematico_id` int(11) NOT NULL,
  `notas` varchar(45) DEFAULT NULL,
  `fonte_nota` varchar(45) DEFAULT NULL,
  `autor` varchar(45) NOT NULL,
  `abv_autor` varchar(45) DEFAULT NULL,
  `equivalente_id` int(11) NOT NULL,
  `fraseologia` varchar(45) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `ilustracao` varchar(400) DEFAULT NULL,
  `user_id_created` int(11) NOT NULL,
  `created` date DEFAULT NULL,
  `user_id_modified` int(11) NOT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_verbete_campos_tematicos1_idx` (`campo_tematico_id`),
  KEY `fk_verbete_equivalentes1_idx` (`equivalente_id`),
  KEY `fk_verbetes_usuarios1_idx` (`user_id_created`),
  CONSTRAINT `fk_verbetes_usuarios1` FOREIGN KEY (`user_id_created`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_verbete_campos_tematicos1` FOREIGN KEY (`campo_tematico_id`) REFERENCES `campos_tematicos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_verbete_equivalentes1` FOREIGN KEY (`equivalente_id`) REFERENCES `equivalentes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verbetes`
--

LOCK TABLES `verbetes` WRITE;
/*!40000 ALTER TABLE `verbetes` DISABLE KEYS */;
INSERT INTO `verbetes` VALUES (6,'teste','teste','','','','','teste','teste','tes','teste','test','2016-02-01','','',1,'','','test','',4,'',NULL,'',1,'2016-02-01',1,'2016-02-01'),(7,'teste','teste','','','','','teste','teste','teste','teste','test','2016-02-01','','',1,'','','teste','',4,'',NULL,'',1,'2016-02-01',1,'2016-02-01'),(8,'asd','33dd','','M','','','asd','asd','asd','asd','asd','2016-02-22','asd','',1,'','','asd','',4,'','2021-01-01',NULL,1,'2016-02-22',1,'2016-02-22'),(9,'asdsssssssssssssssssssss','teste','','M','','test','teste','teste','teste','teste','test','2016-02-22','','',1,'','','test','',4,'',NULL,NULL,1,'2016-02-22',1,'2016-02-22'),(10,'teste_ilustracao','123','','M','','','123','123','123','123','123','2016-02-22','','',1,'','','123','',4,'',NULL,'b917ce0d-5636-4306-8d3a-8135a490f773-paralele',1,'2016-02-22',1,'2016-02-22'),(11,'asdasd','123','','M','','','123','123','123','123','123','2016-02-22','','',1,'','','123','',4,'',NULL,'6f760f7e-83dd-4167-b8ea-b18075c25a2d-paralelepipedo-retangulo.jpg',1,'2016-02-22',1,'2016-02-22');
/*!40000 ALTER TABLE `verbetes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-02-22 16:48:28
