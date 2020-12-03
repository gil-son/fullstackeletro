CREATE TABLE `pedido` (
  `num_pedido` int NOT NULL,
  `nome_cliente` varchar(200) COLLATE utf8_bin NOT NULL,
  `endereco` varchar(200) COLLATE utf8_bin NOT NULL,
  `telefone` varchar(10) COLLATE utf8_bin NOT NULL,
  `nome_produto` varchar(255) COLLATE utf8_bin NOT NULL,
  `valor_unitario` decimal(8,2) NOT NULL,
  `quantidade` tinyint NOT NULL,
  `valor_total` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `pedido`
  ADD PRIMARY KEY (`num_pedido`);
  
ALTER TABLE `pedido`
  MODIFY `num_pedido` int NOT NULL AUTO_INCREMENT;

  