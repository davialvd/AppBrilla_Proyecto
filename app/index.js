import express from "express";
import { regenerarDesdeAPI } from './modules/RegenerarDocumentos/controlador.js';

// Fix para __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Server
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("servidor corriendo en el puerto", app.get("port"));

// Configuration
app.use(express.static(__dirname + "/public"));

// Rutas de vistas
app.get("/", (req, res) => res.sendFile(__dirname + "/pages/login.html"));
app.get("/register", (req, res) => res.sendFile(__dirname + "/pages/register.html"));
app.get("/admin", (req, res) => res.sendFile(__dirname + "/pages/admin/admin.html"));
app.get("/modulos", (req, res) => res.sendFile(__dirname + "/pages/admin/modulos.html"));
app.get("/RegenerarDocumentos", (req, res) => res.sendFile(__dirname + "/pages/admin/regenerardocumentos.html"));

// ✅ Ruta API
app.get("/api/regenerar", regenerarDesdeAPI);
