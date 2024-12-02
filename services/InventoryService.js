import JuegosModel from "../models/JuegosModel.js";
import VentasModel from "../models/VentasModel.js";

class InventoryService {
  juegosModel = new JuegosModel();
  ventasModel = new VentasModel();

  validateJuego(nombre, categoria, precio, cantidad) {
    if (!nombre || typeof nombre !== "string") throw new Error("Nombre inválido");
    if (!categoria || typeof categoria !== "string") throw new Error("Categoría inválida");
    if (isNaN(precio) || precio <= 0) throw new Error("Precio inválido");
    if (isNaN(cantidad) || cantidad < 0) throw new Error("Cantidad inválida");
  }

  agregarJuegoService(nombre, categoria, precio, cantidad) {
    this.validateJuego(nombre, categoria, precio, cantidad);
    return this.juegosModel.agregarJuego(nombre, categoria, precio, cantidad);
  }

  registrarVentaService(idJuego, cantidadVendida) {
    if (!idJuego || isNaN(cantidadVendida) || cantidadVendida <= 0)
      throw new Error("Datos de venta inválidos");

    this.juegosModel.actualizarStock(idJuego, cantidadVendida); // Actualiza el stock
    return this.ventasModel.registrarVenta(idJuego, cantidadVendida); // Registra la venta
  }

  listarInventarioService() {
    return this.juegosModel.listarInventario();
  }
}

export default InventoryService;
