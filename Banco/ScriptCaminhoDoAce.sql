CREATE DATABASE CaminhoDoAce;
USE CaminhoDoAce;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(40) NOT NULL,
senha VARCHAR(30) NOT NULL,
posicao CHAR(10), 
CONSTRAINT chkPosicao CHECK (posicao IN('Levantador', 'Libero', 'Ace'))
);