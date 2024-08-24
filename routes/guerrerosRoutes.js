const express = require("express");
const router = express.Router();
const guerrerosController = require("../controller/guerrerosController");

router.get("/guerreros", guerrerosController.getAllGuerreros);
router.get("/guerreros/:id", guerrerosController.getGuerreroById);
router.post("/guerreros", guerrerosController.createGuerrero);
router.put("/guerreros/:id", guerrerosController.updateGuerrero);
router.delete("/guerreros/:id", guerrerosController.deleteGuerrero);

module.exports = router;
