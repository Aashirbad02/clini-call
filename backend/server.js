const dotenv = require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cookieParser());

require("./db/conn");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://clinicall.onrender.com"],
  })
);
app.use(require("./router/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
