var database = require("../database/config")

function cadastrar(resultado, idUsuarioVincular) {
    console.log("Resultado:", resultado, "| UsuarioID:", idUsuarioVincular);

    var instrucaoSql = `
        UPDATE usuario SET posicao = '${resultado}' WHERE id = '${idUsuarioVincular}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    cadastrar
};