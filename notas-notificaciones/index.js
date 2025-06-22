require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Datos simulados de estudiantes
let estudiantes = [
  { codigo: "2025001", nombre: "Yuli Salinas", correo: "yuli@example.com", nota: 3.5 }
];

// Ruta para actualizar nota y enviar notificación
app.post('/actualizar-nota', (req, res) => {
  const { codigo, nuevaNota } = req.body;
  const estudiante = estudiantes.find(e => e.codigo === codigo);

  if (!estudiante) {
    return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
  }

  estudiante.nota = nuevaNota;
  enviarCorreo(estudiante.correo, estudiante.nombre, nuevaNota);
  res.json({ mensaje: `Nota actualizada para ${estudiante.nombre} y notificación enviada.` });
});

// Función para enviar correo
function enviarCorreo(destino, nombre, nota) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: destino,
    subject: 'Actualización de nota académica',
    text: `Hola ${nombre}, tu nota ha sido actualizada. Nueva calificación: ${nota}.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('Error al enviar correo:', error);
    }
    console.log('Correo enviado:', info.response);
  });
}

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});