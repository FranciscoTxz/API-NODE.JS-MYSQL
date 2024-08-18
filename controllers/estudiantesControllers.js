const db = require('../database/conexion.js');

class EstudiantesController {
    constructor(){

    }

    consultar(req, res){
        res.json({
            msg: 'Consulta estudiantes'
        });
    }

    consultarDetalle(req, res){
        res.json({
            msg: 'Conuslta de un estudiante con id ' + req.params.id
        });
    }

    ingresar(req, res){
        res.json({
            msg: 'Ingreso estudiantes'
        });
    }

    actualizar(req, res){
        res.json({
            msg: 'Actualizar estudiantes'
        });
    }

    borrar(req, res){
        res.json({
            msg: 'Eliminar estudiantes'
        });
    }
}

module.exports = new EstudiantesController();