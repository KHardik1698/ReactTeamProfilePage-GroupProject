const express = require("express");
const dotenv = require("dotenv");
const empRoute = require("./routes/empRoutes.js");
dotenv.config({
	path: `${__dirname}/config.env`,
});
const app = express();
app.use(express.json());
app.use("/employees", empRoute);
app.listen(process.env.PORT, () => {
	console.log(`Server started at PORT ${process.env.PORT}`);
});
