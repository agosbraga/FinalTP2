import InventoryService from "../services/InventoryService.js";

class InventoryController {
  service = new InventoryService();

  agregarJuego = (req, res) => {
    try {
      const { nombre, categoria, precio, cantidad } = req.body;
      const nuevoJuego = this.service.agregarJuegoService(nombre, categoria, precio, cantidad);
      res.status(201).send({ success: true, data: nuevoJuego });
    } catch (error) {
      res.status(400).send({ success: false, errorMsg: error.message });
    }
  };

  registrarVenta = (req, res) => {
    try {
      const { idJuego, cantidadVendida } = req.body;
      const venta = this.service.registrarVentaService(idJuego, cantidadVendida);
      res.status(200).send({ success: true, data: venta });
    } catch (error) {
      res.status(400).send({ success: false, errorMsg: error.message });
    }
  };

  listarInventario = (req, res) => {
    try {
      const inventario = this.service.listarInventarioService();
      res.status(200).send({ success: true, data: inventario });
    } catch (error) {
      res.status(500).send({ success: false, errorMsg: error.message });
    }
  };
}

export default InventoryController;
