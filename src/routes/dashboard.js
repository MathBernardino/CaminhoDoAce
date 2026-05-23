var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/:empresaId", function (req, res) {
  dashboardController.buscarAquariosPorEmpresa(req, res);
});

module.exports = router;