var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var resultado = req.body.resultadoServer;
    var usuarioID = req.body.idUsuarioServer;
    var fk_quiz = 1;
    var perfil = req.body.resultadoServer;
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    quizModel.cadastrar(resultado, usuarioID)
        .then(() => {
            return quizModel.registrarTentativa(usuarioID, fk_quiz, resultado); 
        })
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro da posicao! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrar
}