const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const empRoute = require("./routes/empRoutes.js");
dotenv.config({
  path: `${__dirname}/config.env`,
});
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/employees", empRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server started at PORT ${process.env.PORT}`);
});
