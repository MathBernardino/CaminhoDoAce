var database = require("../database/config")

function cadastrar(resultado, usuarioID) {
    console.log("Resultado:", resultado, "| UsuarioID:", usuarioID);

    var instrucaoSql = `
        UPDATE usuario SET posicao = '${resultado}' WHERE id = '${usuarioID}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    cadastrar
};