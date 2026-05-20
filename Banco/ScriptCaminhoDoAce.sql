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

CREATE TABLE tentativa (
fk_usuario INT,
CONSTRAINT fk_tentativaUsuario FOREIGN KEY(fk_usuario) REFERENCES usuario(id),
fk_quiz INT,
CONSTRAINT fk_tentativaQuiz FOREIGN KEY(fk_quiz) REFERENCES quiz(id_quiz),
id_tentativa INT,
CONSTRAINT Pk_tentativa PRIMARY KEY(fk_usuario, fk_quiz, id_tentativa),
perfil CHAR(1),
CONSTRAINT chkPerfil CHECK (perfil IN('A' OR 'B' OR 'C')),
qtd_tentativa INT
);

CREATE TABLE quiz (
id_quiz INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(45),
dt_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE questao (
id_questao INT PRIMARY KEY,
fk_quiz INT,
CONSTRAINT fk_quizQuestao FOREIGN KEY (fk_quiz) REFERENCES quiz(id_quiz),
enunciado VARCHAR(90),
alternativa CHAR(1),
CONSTRAINT chkQuestao CHECK (alternativa IN('A' OR 'B' OR'C'))
);
