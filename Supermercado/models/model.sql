use supermercado;

DROP TABLE produtos;
DROP TABLE vendas;
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

CREATE TABLE IF NOT EXISTS vendas(
id_venda INT NOT NULL AUTO_INCREMENT,
produto INT NOT NULL,
funcionario INT NOT NULL,
PRIMARY KEY(id_venda),
FOREIGN KEY(produto) REFERENCES produtos(id_produto),
FOREIGN KEY(funcionario) REFERENCES funcionarios(id_funcionario)
);

CREATE TABLE IF NOT EXISTS vendas_produto(
id_venda_produto INT NOT NULL AUTO_INCREMENT,
item INT NOT NULL,
venda INT NOT NULL,
PRIMARY KEY(id_venda_produto),
FOREIGN KEY(item) REFERENCES produtos(id_produto),
FOREIGN KEY(funcionario) REFERENCES funcionarios(id_funcionario)
);


INSERT INTO produtos(nome_produto, quantidade, valor_unitario) VALUES("Arroz","100","25.00");
INSERT INTO produtos(nome_produto, quantidade, valor_unitario) VALUES("Feijao","50","13.00");
INSERT INTO produtos(nome_produto, quantidade, valor_unitario) VALUES("Macarrao","25","5.00");
INSERT INTO produtos(nome_produto, quantidade, valor_unitario) VALUES("Trigo","40","8.00");

INSERT INTO funcionarios(nome_funcionario,cargo_funcionario, senha) VALUES("Maria","caixa","caixa");
INSERT INTO funcionarios(nome_funcionario,cargo_funcionario, senha) VALUES("Lina","adm","adm");

INSERT INTO vendas(produto, funcionario) VALUES(1,1);
INSERT INTO vendas(produto, funcionario) VALUES(2,2);
INSERT INTO vendas(produto, funcionario) VALUES(2,1);
INSERT INTO vendas(produto, funcionario) VALUES(1,2);
