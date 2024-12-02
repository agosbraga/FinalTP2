class VentasModel {
    ventas = [];
  
    generateId() {
      return Date.now().toString(); 
    }
  
    registrarVenta(idJuego, cantidadVendida) {
      const venta = {
        id: this.generateId(),
        idJuego,
        cantidadVendida,
      };
      this.ventas.push(venta);
      return venta;
    }
  
    listarVentas() {
      return this.ventas;
    }
  }
  
  export default VentasModel;
  