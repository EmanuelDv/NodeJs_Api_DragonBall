const Guerreros = require("../models/guerrerosModel");

const getAllGuerreros = (req, res) => {
  Guerreros.getAll((err, results) => {
    if (err) {
      console.error("Error al obtener los guerreros:", err);
      return res.status(500).json({ error: "Error al obtener los guerreros" });
    }
    res.json(results);
  });
};

const getGuerreroById = (req, res) => {
  const id = req.params.id;
  Guerreros.getById(id, (err, result) => {
    if (err) {
      console.error("Error al obtener el guerrero:", err);
      return res.status(500).json({ error: "Error al obtener el guerrero" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Guerrero no encontrado" });
    }
    res.json(result[0]);
  });
};

const createGuerrero = (req, res) => {
  const data = req.body;
  Guerreros.create(data, (err, result) => {
    if (err) {
      console.error("Error al crear el guerrero:", err);
      return res.status(500).json({ error: "Error al crear el guerrero" });
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

const updateGuerrero = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Guerreros.update(id, data, (err, result) => {
    if (err) {
      console.error("Error al actualizar el guerrero:", err);
      return res.status(500).json({ error: "Error al actualizar el guerrero" });
    }
    res.status(200).json({ message: "Guerrero actualizado correctamente" });
  });
};

const deleteGuerrero = (req, res) => {
  const id = req.params.id;
  Guerreros.delete(id, (err, result) => {
    if (err) {
      console.error("Error al eliminar el guerrero:", err);
      return res.status(500).json({ error: "Error al eliminar el guerrero" });
    }
    res.status(200).json({ message: "Guerrero eliminado correctamente" });
  });
};

module.exports = {
  getAllGuerreros,
  getGuerreroById,
  createGuerrero,
  updateGuerrero,
  deleteGuerrero,
};
