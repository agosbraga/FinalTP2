import { Router } from "express";
import InventoryController from "../controllers/InventoryController.js";

const router = Router();
const controller = new InventoryController();

router.post("/juegos", controller.agregarJuego); // Crear un nuevo juego
router.post("/ventas", controller.registrarVenta); // Registrar una venta
router.get("/inventario", controller.listarInventario); // Listar el inventario

export default router;
