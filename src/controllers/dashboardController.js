var dashboardModel = require("../models/dashboardModel");

function contarPerfis(req, res) {
  dashboardModel.contarPerfis()
    .then(resultado => res.json(resultado))
    .catch(erro => {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}


function contarUsuarios(req, res) {
  dashboardModel.contarUsuarios()
    .then(resultado => res.json(resultado))
    .catch(erro => res.status(500).json(erro.sqlMessage));
}


function contarTentativas(req, res) {
  dashboardModel.contarTentativas()
    .then(resultado => res.json(resultado))
    .catch(erro => res.status(500).json(erro.sqlMessage));
}


module.exports = {
  contarPerfis,
  contarTentativas,
  contarUsuarios
}