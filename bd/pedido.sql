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
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `num_pedido` int NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `endereco` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `telefone` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `nome_produto` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `valor_unitario` decimal(8,2) NOT NULL,
  `quantidade` tinyint NOT NULL,
  `valor_total` decimal(8,2) NOT NULL,
  PRIMARY KEY (`num_pedido`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,'Hevo','Rua Alivan','3339-33356','Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V',2069.89,1,2069.89),(2,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(3,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(4,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(5,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(6,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(7,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(8,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(9,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(10,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(11,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(12,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(13,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(14,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(15,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(16,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(17,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(18,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(19,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(20,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(21,'Lucas','Rua B','3232-3232','Lavadora de Roupas Brastemp 12Kg',2099.99,2,4199.98),(22,'aaa','rua a','12121212','Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V',2069.89,1,2069.89),(23,'wewew','wewewe','3232','Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V',2069.89,1,2069.89),(24,'Alana','wewe','3223','Máquina De Lavar Roupas Midea Storm',3099.00,1,3099.00),(25,'Hevo','Rua Alivan','333933356','Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V',2069.89,2,4139.78),(26,'Fulano','Rua alguma coisa','3333-3235','Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V',2069.89,10,20698.90);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-02 22:12:53
