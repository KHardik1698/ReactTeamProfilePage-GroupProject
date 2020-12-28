const fs = require("fs");
const path = require("path");

const employees = path.join(__dirname, "..", "data", "employees.json");
const empData = JSON.parse(fs.readFileSync(employees, "utf-8"));
const getEmpById = (req, res) => {
	let emp = empData.find((emp) => {
		return emp.id === req.params.id;
	});

	if (emp) {
		res.status(200).json({
			status: "Successful",
			data: emp,
		});
	} else {
		res.status(200).json({
			status: "Employee not found",
		});
	}
};
const getAllEmployees = (req, res) => {
	console.log(req.query);
	/* if (req.query) {
		let emp = empData.filter((emp) => {
			return Object.keys(req.query).every((key) => {
				emp[key] = emp[key]
					.trim()
					.replace(/[_-\s]/g, "")
					.toLowerCase();

				req.query[key] = req.query[key]
					.trim()
					.replace(/[_-\s]/g, "")
					.toLowerCase();

				if (emp[key].includes(req.query[key])) {
					return emp[key];
				}
			});
		});

		if (emp < 1) {
			res.status(404).json({
				status: "Unsuccessful",
				data: "Employee not found",
			});
		} else {
			res.status(200).json({
				status: "Successful",
				data: emp,
			});
		}
	 } */
	//   else {
	res.status(200).json({
		status: "Successful",
		data: empData,
	});
	// }
};

module.exports = {
	getEmpById,
	getAllEmployees,
};
