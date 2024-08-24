const mysql = require("mysql2");

const connection = mysql.createConnection({
  
  host: "bikijnhaqj2ofbj3vqnj-mysql.services.clever-cloud.com",
  user: "uu2spnj3tuvrpbcx",
  password: "GaINSnyVbc49MoFNJVGg",
  database: "bikijnhaqj2ofbj3vqnj",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  } else {
    console.log("Connected to the database.");
  }
});

module.exports = connection;
