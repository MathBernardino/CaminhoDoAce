var database = require("../database/config")

function cadastrar(resultado, idUsuarioVincular) {
    console.log("Resultado:", resultado, "| UsuarioID:", idUsuarioVincular);

    var instrucaoSql = `
        UPDATE usuario SET posicao = '${resultado}' WHERE id = '${idUsuarioVincular}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarTentativa(fk_usuario, fk_quiz, perfil) {
    var instrucaoSql = `
        INSERT INTO tentativa (fk_usuario, fk_quiz, perfil, qtd_tentativa)
        VALUES ('${fk_usuario}', '${fk_quiz}', '${perfil}', 1)
        ON DUPLICATE KEY UPDATE
            perfil = '${perfil}',
            qtd_tentativa = qtd_tentativa + 1;
    `;
    console.log("Executando: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    registrarTentativa
};