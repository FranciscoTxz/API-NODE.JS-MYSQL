const db = require('../database/conexion.js');

class CursosController {
    constructor(){

    }

    consultar(req, res){
        res.json({
            msg: 'Consulta cursos'
        });
    }

    consultarDetalle(req, res){
        res.json({
            msg: 'Conuslta de un curso con id ' + req.params.id
        });
    }

    ingresar(req, res){
        res.json({
            msg: 'Ingreso cursos'
        });
    }

    actualizar(req, res){
        res.json({
            msg: 'Actualizar cursos'
        });
    }

    borrar(req, res){
        res.json({
            msg: 'Eliminar cursos'
        });
    }
}

module.exports = new CursosController();