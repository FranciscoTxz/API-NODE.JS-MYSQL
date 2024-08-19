const db = require('../database/conexion.js');

class EstudiantesController {
    constructor(){

    }

    consultar(req, res){
        try {
            db.query('SELECT * FROM estudiantes;', (err, result) => {
                if(err){
                    res.status(400).send(err.message);
                }
                res.status(200).json({
                    estudiantes: result
                });
            });
        } catch (err) {
            res.status(500).send(err.message); 
        }
    }

    consultarDetalle(req, res){
        try {
            const {id} = req.params;
            db.query('SELECT * FROM estudiantes WHERE id = ?;', [id], (err, result) => {
                if(err){
                    res.status(400).send(err.message);
                }
                res.status(200).json({
                    estudiante: result
                });
            });
        } catch (err) {
            res.status(500).send(err.message); 
        }
    }

    ingresar(req, res){
        try {
            const {dni, nombre, apellido, email} = req.body;
            db.query('INSERT INTO estudiantes (id, dni, nombre, apellido, email) VALUES(NULL, ?, ?, ?, ?);', [dni, nombre, apellido, email], (err, result) => {
                if(err){
                    res.status(400).send(err.message);
                }
                res.status(200).json({
                    msg: 'Estudiante creado',
                    id: result.insertId
                });
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res){
        const {id} = req.params;
        try {
            const {dni ,nombre, apellido, email} = req.body;
            db.query('UPDATE cursos.estudiantes SET dni=?, nombre=?, apellido=?, email=? WHERE id=?;', [dni ,nombre, apellido, email, id], (err, result) => {
                if(err){
                    res.status(400).send(err.message);
                }
                if (result.affectedRows == 0){
                    res.status(404).json({
                        msg: 'No se encontro el estudiante'
                    });
                }
                else {
                    res.status(200).json({
                        msg: 'Estudiante actualizado'
                    });
                }
            });
        } catch (err) {
            res.status(500).send(err.message); 
        }
    }

    borrar(req, res){
        const {id} = req.params;
        try {
            db.query('DELETE FROM estudiantes WHERE id = ?;', [id], (err, result) => {
                if(err){
                    res.status(400).send(err.message);
                }
                if (result.affectedRows == 0){
                    res.status(404).json({
                        msg: 'No se encontro el estudiante'
                    });
                }
                else {
                    res.status(200).json({
                        msg: 'Registro eliminado'
                    });
                }
            });
        } catch (err) {
            res.status(500).send(err.message); 
        }
    }
}

module.exports = new EstudiantesController();