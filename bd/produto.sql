-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 19, 2020 at 02:57 AM
-- Server version: 8.0.21-0ubuntu0.20.04.4
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fseletro`
--

-- --------------------------------------------------------

--
-- Table structure for table `produto`
--

CREATE TABLE `produto` (
  `idproduto` int NOT NULL,
  `categoria` varchar(45) COLLATE utf8_bin NOT NULL,
  `descricao` varchar(150) COLLATE utf8_bin NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(255) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`) VALUES
(1, 'geladeira', 'Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V', '2069.89', '1969.89', 'img/Geladeira01_1.png'),
(2, 'geladeira', 'Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Evox - 110v', '2448.99', '2348.99', 'img/Geladeira02_1.png'),
(3, 'geladeira', 'Geladeira Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v', '5258.99', '5199.99', 'img/Geladeira03_1.png'),
(4, 'fogao', 'Fogão Brastemp 5 Bocas BFS5N - Inox', '1599.89', '1499.89', 'img/Fogao01_1.png'),
(5, 'fogao', 'Fogão de Piso Mesa de Vidro Electrolux 5', '1848.89', '1748.89', 'img/Fogao02_1.png'),
(6, 'microondas', 'Microondas 25L Espelhado Pme25 Philco 127V', '679.99', '579.99', 'img/Microondas01_1.png'),
(7, 'microondas', 'Micro-ondas Consul Espelhado 32 Litros - CMS45 240v', '4100.00', '4000.00', 'img/Microondas02_1.png'),
(8, 'microondas', 'Micro-ondas Brastemp Espelhado Grill 32', '1173.81', '1073.81', 'img/Microondas03_1.png'),
(9, 'lavadoura', 'Máquina De Lavar Roupas Midea Storm', '3099.00', '2999.00', 'img/Lavadoura01_1.png'),
(10, 'lavadoura', 'Lavadora de Roupas Brastemp 12Kg', '2099.99', '1999.99', 'img/Lavadoura02_1.png'),
(11, 'lavaLoucas', 'Lava-Louças Electrolux Inox 14 Serviços LV14X', '4423.90', '4323.90', 'img/Lava_louca01_1.png'),
(12, 'lavaLoucas', 'Lava Louças Brastemp 10 Serviços BLF10 Branca 110V', '3699.89', '3599.89', 'img/Lava_louca02_1.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`),
  ADD UNIQUE KEY `imagem` (`imagem`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
