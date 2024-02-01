var express = require("express");
let CitiesController = require("../controllers/cities");

var router = express.Router();

/* GET cities listing. */
router.get("/", CitiesController.getCityByName);

module.exports = router;
