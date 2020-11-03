-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: fseletro
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `idproduto` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `descricao` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`idproduto`),
  UNIQUE KEY `imagem` (`imagem`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'geladeira','Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V',2069.89,1969.89,'img/Geladeira01_1.png'),(2,'geladeira','Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Evox - 110v',2448.99,2348.99,'img/Geladeira02_1.png'),(3,'geladeira','Geladeira Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v',5258.99,5199.99,'img/Geladeira03_1.png'),(4,'fogao','Fogão Brastemp 5 Bocas BFS5N - Inox',1599.89,1499.89,'img/Fogao01_1.png'),(5,'fogao','Fogão de Piso Mesa de Vidro Electrolux 5',1848.89,1748.89,'img/Fogao02_1.png'),(6,'microondas','Microondas 25L Espelhado Pme25 Philco 127V',679.99,579.99,'img/Microondas01_1.png'),(7,'microondas','Micro-ondas Consul Espelhado 32 Litros - CMS45 240v',4100.00,4000.00,'img/Microondas02_1.png'),(8,'microondas','Micro-ondas Brastemp Espelhado Grill 32',1173.81,1073.81,'img/Microondas03_1.png'),(9,'lavadoura','Máquina De Lavar Roupas Midea Storm',3099.00,2999.00,'img/Lavadoura01_1.png'),(10,'lavadoura','Lavadora de Roupas Brastemp 12Kg',2099.99,1999.99,'img/Lavadoura02_1.png'),(11,'lavaLoucas','Lava-Louças Electrolux Inox 14 Serviços LV14X',4423.90,4323.90,'img/Lava_louca01_1.png'),(12,'lavaLoucas','Lava Louças Brastemp 10 Serviços BLF10 Branca 110V',3699.89,3599.89,'img/Lava_louca02_1.png');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-02 22:12:52
