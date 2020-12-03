SELECT * FROM fseletro.produto;


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


ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`),
  ADD UNIQUE KEY `imagem` (`imagem`);
  

ALTER TABLE `produto`
  MODIFY `idproduto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

  
  
