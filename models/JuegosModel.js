class JuegosModel {
    juegos = [];
  
    generateId() {
      return Date.now().toString(); 
    }
  
    agregarJuego(nombre, categoria, precio, cantidad) {
      const nuevoJuego = {
        id: this.generateId(),
        nombre,
        categoria,
        precio,
        cantidad,
      };
      this.juegos.push(nuevoJuego);
      return nuevoJuego;
    }
  
    actualizarStock(idJuego, cantidadVendida) {
      const juego = this.juegos.find((j) => j.id === idJuego);
      if (!juego) throw new Error("Juego no encontrado");
      if (juego.cantidad < cantidadVendida) throw new Error("Stock insuficiente");
      juego.cantidad -= cantidadVendida;
      return juego;
    }
  
    listarInventario() {
      return this.juegos;
    }
  }
  
  export default JuegosModel;
  