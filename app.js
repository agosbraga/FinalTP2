import express from "express";
import inventoryRoutes from "./routes/inventoryRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", inventoryRoutes);

app.listen(8080, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:8080`);
});
