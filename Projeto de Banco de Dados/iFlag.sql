-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: 127.0.0.1    Database: iflag
-- ------------------------------------------------------
-- Server version	5.7.27-log

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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `ID_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nome_categoria` varchar(255) NOT NULL,
  `descricao` text,
  PRIMARY KEY (`ID_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Computadores','Produtos relacionados a computadores'),(2,'Perif√©ricos','Produtos relacionados a perif√©ricos de computador'),(3,'Acess√≥rios','Produtos relacionados a acess√≥rios de computador'),(4,'Componentes','Produtos relacionados a componentes de computador');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `ID_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `endereco` text NOT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Jo√£o Silva','Rua das Flores, 123','11 99999-9999','joao.silva@email.com'),(2,'Maria Silva','Rua das Rosas, 456','11 88888-8888','maria.silva@email.com'),(3,'Pedro Oliveira','Avenida dos P√°ssaros, 789','11 77777-7777','pedro.oliveira@email.com'),(4,'Ana Paula','Rua dos Jardins, 101','11 66666-6666','ana.paula@email.com');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itens_do_pedido`
--

DROP TABLE IF EXISTS `itens_do_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `itens_do_pedido` (
  `ID_item_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `ID_produto` int(11) NOT NULL,
  `ID_pedido` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  PRIMARY KEY (`ID_item_pedido`),
  KEY `ID_pedido` (`ID_pedido`),
  KEY `ID_produto` (`ID_produto`),
  CONSTRAINT `itens_do_pedido_ibfk_1` FOREIGN KEY (`ID_pedido`) REFERENCES `pedidos` (`ID_pedido`),
  CONSTRAINT `itens_do_pedido_ibfk_2` FOREIGN KEY (`ID_produto`) REFERENCES `produtos` (`ID_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itens_do_pedido`
--

LOCK TABLES `itens_do_pedido` WRITE;
/*!40000 ALTER TABLE `itens_do_pedido` DISABLE KEYS */;
INSERT INTO `itens_do_pedido` VALUES (1,1,1,1,2500.00),(2,2,2,2,400.00),(3,3,3,1,200.00),(4,4,4,3,300.00);
/*!40000 ALTER TABLE `itens_do_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamentos`
--

DROP TABLE IF EXISTS `pagamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagamentos` (
  `ID_pagamento` int(11) NOT NULL AUTO_INCREMENT,
  `data_pagamento` date NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `forma_pagamento` varchar(255) NOT NULL,
  `ID_pedido` int(11) NOT NULL,
  PRIMARY KEY (`ID_pagamento`),
  KEY `ID_pedido` (`ID_pedido`),
  CONSTRAINT `pagamentos_ibfk_1` FOREIGN KEY (`ID_pedido`) REFERENCES `pedidos` (`ID_pedido`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamentos`
--

LOCK TABLES `pagamentos` WRITE;
/*!40000 ALTER TABLE `pagamentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos` (
  `ID_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `data_pedido` date NOT NULL,
  `ID_cliente` int(11) NOT NULL,
  `endereco_entrega` text NOT NULL,
  `status_pedido` varchar(255) NOT NULL,
  PRIMARY KEY (`ID_pedido`),
  KEY `ID_cliente` (`ID_cliente`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`ID_cliente`) REFERENCES `clientes` (`ID_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'2022-01-01',1,'Rua das Flores, 123','Entregue'),(2,'2022-02-01',2,'Rua das Rosas, 456','Em processo'),(3,'2022-03-01',3,'Avenida dos P√°ssaros, 789','Entregue'),(4,'2022-04-01',4,'Rua dos Jardins, 101','Em processo');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produtos` (
  `ID_produto` int(11) NOT NULL AUTO_INCREMENT,
  `nome_produto` varchar(255) NOT NULL,
  `descricao` text,
  `preco` decimal(10,2) NOT NULL,
  `quantidade_estoque` int(11) NOT NULL,
  `ID_categoria` int(11) NOT NULL,
  PRIMARY KEY (`ID_produto`),
  KEY `ID_categoria` (`ID_categoria`),
  CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`ID_categoria`) REFERENCES `categorias` (`ID_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Computador Desktop i7','Computador desktop com processador i7',2500.00,10,1),(2,'Teclado Mec√¢nico RGB','Teclado mec√¢nico com ilumina√ß√£o RGB',200.00,15,2),(3,'Mouse Gamer RGB','Mouse gamer com ilumina√ß√£o RGB',150.00,20,2),(4,'Fonte de Alimenta√ß√£o 750W','Fonte de alimenta√ß√£o com 750W de pot√™ncia',300.00,5,4),(5,'Placa de V√≠deo RTX 3080','Placa de v√≠deo com GPU RTX 3080',5000.00,8,4),(6,'Headset Gamer 7.1','Headset gamer com som 7.1 surround',250.00,25,3),(7,'Cooler para Processador','Cooler para processador de alta performance',100.00,30,4),(8,'Gabinete ATX','Gabinete ATX para computador',200.00,40,3);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefone_do_cliente`
--

DROP TABLE IF EXISTS `telefone_do_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefone_do_cliente` (
  `ID_Telefone` int(11) NOT NULL AUTO_INCREMENT,
  `Numero_Telefone` varchar(20) NOT NULL,
  `ID_Cliente` int(11) NOT NULL,
  PRIMARY KEY (`ID_Telefone`),
  KEY `ID_Cliente` (`ID_Cliente`),
  CONSTRAINT `telefone_do_cliente_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `clientes` (`ID_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefone_do_cliente`
--

LOCK TABLES `telefone_do_cliente` WRITE;
/*!40000 ALTER TABLE `telefone_do_cliente` DISABLE KEYS */;
INSERT INTO `telefone_do_cliente` VALUES (1,'(11) 1111-1111',1),(2,'(22) 2222-2222',2),(3,'(33) 3333-3333',3),(4,'(44) 4444-4444',4);
/*!40000 ALTER TABLE `telefone_do_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `ID_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `array_acesso` varchar(255) NOT NULL,
  `senha` varbinary(256) NOT NULL,
  PRIMARY KEY (`ID_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Jo√£o da Silva','joao.silva@email.com','1111111111','õä¡ü\“ê\È\Ê6b\ﬂ7'),(2,'Maria Lu√≠za','maria.luiza@email.com','1111111111','•q/Ãç†b\Œiÿ™\0ê9å'),(3,'Pedro Ant√¥nio','pedro.antonio@email.com','1111111111','o\‚Rü˝µ™@¡}µ?c±');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-15 20:49:30
