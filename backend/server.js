const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

dotenv.config({ path: "./config.env" });

require("./db/conn");

//Convert JSON to objects
app.use(express.json());

// We link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT || 5000;

// app.get("/signin", (req, res) => {
//   res.send("Login");
// });
// app.get("/signup", (req, res) => {
//   res.send("Register Here");
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
