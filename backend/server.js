const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001; // Puedes cambiar el puerto si es necesario

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tu_basede_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir el modelo de datos
const InscripcionSchema = new mongoose.Schema({
  nombrePadre: String,
  correo: String,
  telefono: String,
  nombreHijo: String,
  curso: String,
});

const Inscripcion = mongoose.model('Inscripcion', InscripcionSchema);

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar la inscripción desde el formulario
app.post('/api/inscripciones', async (req, res) => {
  try {
    const nuevaInscripcion = new Inscripcion(req.body);
    await nuevaInscripcion.save();
    res.status(201).json({ mensaje: 'Inscripción exitosa' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
