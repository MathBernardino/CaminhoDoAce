var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.get("/perfis", function (req, res) {
    dashboardController.contarPerfis(req, res);
});

router.get("/usuarios", function (req, res) {
    dashboardController.contarUsuario(req, res);
});

router.get("/tentativas", function (req, res) {
    dashboardControllerr.contarTentativas(req, res);
});

module.exports = router;