use supermercado;

DROP TABLE produtos;
DROP TABLE funcionarios;

CREATE TABLE IF NOT EXISTS produtos(
id_produto INT NOT NULL AUTO_INCREMENT,
nome_produto VARCHAR(50) NOT NULL,
quantidade INT NOT NULL,
valor_unitario INT NOT NULL,
PRIMARY KEY(id_produto)
);

CREATE TABLE IF NOT EXISTS funcionarios(
id_funcionario INT NOT NULL AUTO_INCREMENT,
nome_funcionario VARCHAR(50) NOT NULL,
cargo_funcionario VARCHAR(30) NOT NULL,
senha VARCHAR(30) NOT NULL,
PRIMARY KEY(id_funcionario)
);

INSERT INTO produtos(nome_produto, quantidade, valor_unitario) VALUES("Arroz","100","25.00");
INSERT INTO produtos(nome_produto, quantidade, valor_unitario) VALUES("Feijao","50","13.00");
INSERT INTO produtos(nome_produto, quantidade, valor_unitario) VALUES("Macarrao","25","5.00");
INSERT INTO produtos(nome_produto, quantidade, valor_unitario) VALUES("Trigo","40","8.00");
INSERT INTO produtos(nome_produto, quantidade, valor_unitario) VALUES("Ovo","0","1.00");

INSERT INTO funcionarios(nome_funcionario,cargo_funcionario, senha) VALUES("Maria","caixa","caixa");
INSERT INTO funcionarios(nome_funcionario,cargo_funcionario, senha) VALUES("Lina","adm","adm");

