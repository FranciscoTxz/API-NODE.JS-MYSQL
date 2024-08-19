const db = require('../database/conexion.js');

class ProfesoresController {
    constructor(){

    }

    consultar(req, res){
        try {
            db.query('SELECT * FROM profesores;', (err, result) => {
                if(err){
                    res.status(400).send(err.message);
                }
                if (result.length === 0) {
                    res.status(404).json({
                        msg: 'No hay profesores'
                    });
                }
                else {
                    res.status(200).json({
                        profesores: result
                    });
                }
            });
        } catch (err) {
            res.status(500).send(err.message); 
        }
    }

    consultarDetalle(req, res){
        try {
            const {id} = req.params;
            db.query('SELECT * FROM profesores WHERE id = ?;', [id], (err, result) => {
                if(err){
                    res.status(400).send(err.message);
                }
                if (result.length === 0) {
                    res.status(404).json({
                        msg: 'No se encontro el profesor'
                    });
                }
                else {
                    res.status(200).json({
                        profesor: result
                    });
                }
            });
        } catch (err) {
            res.status(500).send(err.message); 
        }
    }

    ingresar(req, res){
        try {
            const {dni, nombre, apellido, email, profesion, telefono} = req.body;
            db.query('INSERT INTO profesores (id, dni, nombre, apellido, email, profesion, telefono) VALUES(NULL, ?, ?, ?, ?, ?, ?);', [dni, nombre, apellido, email, profesion, telefono], (err, result) => {
                if(err){
                    res.status(400).json({err: err.message});
                }
                res.status(201).json({
                    msg: 'Profesor creado',
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
            const {dni, nombre, apellido, email, profesion, telefono} = req.body;
            db.query('UPDATE profesores SET dni=?, nombre=?, apellido=?, email=?, profesion=?, telefono=? WHERE id=?;', [dni ,nombre, apellido, email, profesion, telefono,id], (err, result) => {
                if(err){
                    res.status(400).send(err.message);
                }
                if (result.affectedRows == 0){
                    res.status(404).json({
                        msg: 'No se encontro el profesor'
                    });
                }
                else {
                    res.status(200).json({
                        msg: 'Profesor actualizado'
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
            db.query('DELETE FROM profesores WHERE id = ?;', [id], (err, result) => {
                if(err){
                    res.status(400).json({err: err.message});
                }
                if (result.affectedRows == 0){
                    res.status(404).json({
                        msg: 'No se encontro el profesor'
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

module.exports = new ProfesoresController();