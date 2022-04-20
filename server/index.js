const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Killer12!",
  database: "cloneDataBase",
});

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM customer_registration";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { firstName, lastName, email, phone, nickName } = req.body;
  const sqlInsert =
    "INSERT INTO customer_registration (firstName, lastName, email, phone, nickName) VALUES (?,?,?,?,?)";
  db.query(
    sqlInsert,
    [firstName, lastName, email, phone, nickName],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    }
  );
  res.send("Customer created");
});

app.post("/api/waiver", (req, res) => {
  const userSignature = req.body.userSignature;
  const sqlInsert = "INSERT INTO waiver_signature (userSignature) VALUES (?)";
  db.query(sqlInsert, userSignature, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("Signature created");
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
