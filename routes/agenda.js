var express = require('express');
var router = express.Router();
let = turnos = [];
let siguienteId = 1;


/* GET home page. */
router.post('/', (req, res) => {
  const nuevoTurno = {
    id: siguienteId++,
    patente: req.body.patente.toUpperCase(),
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    fecha: req.body.fecha,
    hora: req.body.hora,
    motivo: req.body.motivo
  };

  turnos.push(nuevoTurno); // guardamos en el arreglo
  res.render('agenda', { turnos }); // enviamos la lista a la vista
});

/* Historial patente */

router.get('/historial/:patente', (req, res) => {
  const patente = req.params.patente.toUpperCase();
  const historial = turnos.filter(t => t.patente === patente);
  res.render('historial', { patente, historial });
});





module.exports = router;
