const db = require("../config/db");

const Guerreros = {
  getAll: (callback) => {
    db.query("SELECT * FROM guerreros", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM guerreros WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO guerreros SET ?", data, callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE guerreros SET ? WHERE id = ?", [data, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM guerreros WHERE id = ?", [id], callback);
  },
};

module.exports = Guerreros;
