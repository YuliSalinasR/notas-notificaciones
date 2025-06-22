# Sistema de Notificación de Notas

Este proyecto simula una funcionalidad para actualizar la nota de un estudiante y enviarle una notificación por correo electrónico.

## Tecnologías usadas

- Node.js
- Express
- Nodemailer
- dotenv

## Instrucciones

1. Clona el repositorio o descomprime el archivo.
2. Instala las dependencias con `npm install`.
3. Configura el archivo `.env` con tu correo de Gmail y contraseña de aplicación.
4. Ejecuta el servidor con `npm start`.
5. Usa Postman para probar la ruta `POST /actualizar-nota`.

### Ejemplo de cuerpo JSON

```json
{
  "codigo": "2025001",
  "nuevaNota": 4.7
}
```