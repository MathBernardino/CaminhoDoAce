var database = require("../database/config");

function contarUsuario(idUsuario) {

  var instrucaoSql = `SELECT COUNT(*) AS Usuarios FROM usuario;
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contarPerfis() { // Os Perfis no caso são 'Levantador', 'Libero', 'Ace'

  var instrucaoSql = `
        SELECT perfil, COUNT(*) AS quantidade
        FROM tentativa
        GROUP BY perfil;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contarTentativas() {

  var instrucaoSql = `SELECT COUNT(*) AS tentattivas FROM tentativa;
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  contarPerfis,
  contarTentativas,
  contarUsuario
}
