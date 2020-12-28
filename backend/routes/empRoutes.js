const router = require("express").Router();

const {
	getAllEmployees,
	getEmpById,
} = require("../controller/empController.js");

router.route("/").get(getAllEmployees);
router.route("/:id").get(getEmpById);

module.exports = router;
