const db = require('../database/conexion.js');

class ProfesoresController {
    constructor(){

    }

    consultar(req, res){
        res.json({
            msg: 'Consulta profesores'
        });
    }

    consultarDetalle(req, res){
        res.json({
            msg: 'Conuslta de un profesor con id ' + req.params.id
        });
    }

    ingresar(req, res){
        res.json({
            msg: 'Ingreso profesores'
        });
    }

    actualizar(req, res){
        res.json({
            msg: 'Actualizar profesores'
        });
    }

    borrar(req, res){
        res.json({
            msg: 'Eliminar profesores'
        });
    }
}

module.exports = new ProfesoresController();