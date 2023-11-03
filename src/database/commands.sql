INSERT INTO produtos(nome, descricao) VALUES (
    "banana",
    "hhah"
);

CREATE TABLE produtos(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(100),
    PRIMARY KEY (id)
);