  CREATE TABLE `pedidos` (
  `num_pedidos` INT NOT NULL AUTO_INCREMENT,
  `nome_cliente` VARCHAR(200) NOT NULL,
  `endereco` VARCHAR(200) NOT NULL,
  `telefone` VARCHAR(15) NOT NULL,
  `nome_produto` VARCHAR(45) NOT NULL,
  `valor_unitario` DECIMAL(8,2) NOT NULL,
  `quantidade` TINYINT NOT NULL,
  `valor_total` DECIMAL(8,2) NOT NULL,
  `pedidoscol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`num_pedidos`))ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE = utf8_bin;
