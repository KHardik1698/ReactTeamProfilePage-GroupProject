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
  res.status(200).json({
    status: "Successful",
    data: empData,
  });
};

module.exports = {
  getEmpById,
  getAllEmployees,
};
