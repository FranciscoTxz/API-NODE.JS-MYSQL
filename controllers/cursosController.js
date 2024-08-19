const db = require('../database/conexion.js');

class CursosController {
    constructor(){

    }

    consultar(req, res){
        try {
            db.query('SELECT * FROM cursos;', (err, result) => {
                if(err){
                    res.status(400).send(err.message);
                }
                if (result.length === 0) {
                    res.status(404).json({
                        msg: 'No hay cursos'
                    });
                }
                else {
                    res.status(200).json({
                        cursos: result
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
            db.query('SELECT * FROM cursos WHERE id = ?;', [id], (err, result) => {
                if(err){
                    res.status(400).send(err.message);
                }
                if (result.length === 0) {
                    res.status(404).json({
                        msg: 'No se encontro el curso'
                    });
                }
                else {
                    res.status(200).json({
                        curso: result
                    });
                }
            });
        } catch (err) {
            res.status(500).send(err.message); 
        }
    }

    ingresar(req, res){
        try {
            const {nombre, descripcion, profesor_id} = req.body;
            //Validar que el profesor exista
            db.query('SELECT * FROM profesores WHERE id = ?;', [profesor_id], (err, result) => {
                if(err){
                    res.status(400).json({err: err.message});
                }
                if (result.length === 0) {
                    res.status(404).json({
                        msg: 'No se encontro el profesor, por tanto, valida que el profesor exista para continuar'
                    });
                }
                else {
                    db.query('INSERT INTO cursos.cursos (id, nombre, descripcion, profesor_id) VALUES(NULL, ?, ?, ?);', [nombre, descripcion, profesor_id], (err, result) => {
                        if(err){
                            res.status(400).json({err: err.message});
                        }
                        else {
                            res.status(201).json({
                                msg: 'Curso creado',
                                id: result.insertId
                            });
                        }
                    });
                }
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res){
        const {id} = req.params;
        try {
            const {nombre, descripcion, profesor_id} = req.body;
            //Validar que el profesor exista
            db.query('SELECT * FROM profesores WHERE id = ?;', [profesor_id], (err, result) => {
                if(err){
                    res.status(400).json({err: err.message});
                }
                if (result.length === 0) {
                    res.status(404).json({
                        msg: 'No se encontro el profesor, por tanto, valida que el profesor exista para continuar'
                    });
                }
                else {
                    db.query('UPDATE cursos SET nombre=?, descripcion=?, profesor_id = ? WHERE id=?;', [nombre, descripcion, profesor_id, id], (err, result) => {
                    if(err){
                        res.status(400).json({err: err.message});
                    }
                    if (result.affectedRows == 0){
                        res.status(404).json({
                            msg: 'No se encontro el curso'
                        });
                    }
                    else {
                        res.status(200).json({
                            msg: 'Curso actualizado'
                        });
                    }
                });}
            });   
        } catch (err) {
            res.status(500).send(err.message); 
        }
    }

    borrar(req, res){
        const {id} = req.params;
        try {
            db.query('DELETE FROM cursos WHERE id = ?;', [id], (err, result) => {
                if(err){
                    res.status(400).json({err: err.message});
                }
                if (result.affectedRows == 0){
                    res.status(404).json({
                        msg: 'No se encontro el curso'
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

    asociarEstudiante(req, res){
        try {
            const {curso_id, estudiante_id} = req.body;
            //Validar que el curso exista
            /* db.query('SELECT * FROM cursos WHERE id = ?;', [curso_id], (err, result) => {
                if(err){
                    res.status(400).json({err: err.message});
                }
                if (result.length === 0) {
                    res.status(404).json({
                        msg: 'No se encontro el curso, por tanto, valida que el curso exista para continuar'
                    });
                }
                else {
                    //Validar que el estudiante exista
                    db.query('SELECT * FROM estudiantes WHERE id = ?;', [estudiante_id], (err, result) => {
                        if(err){
                            res.status(400).json({err: err.message});
                        }
                        if (result.length === 0) {
                            res.status(404).json({
                                msg: 'No se encontro el estudiante, por tanto, valida que el estudiante exista para continuar'
                            });
                        }
                        else {
                            db.query('INSERT INTO cursos_estudiantes (curso_id, estudiante_id) VALUES(?, ?);', [curso_id, estudiante_id], (err, result) => {
                                if(err){
                                    res.status(400).json({err: err.message});
                                }
                                else {
                                    res.status(201).json({
                                        msg: 'Estudiante asociado al curso',
                                    });
                                }
                            });
                        }
                    });
                }
            }); */
            db.query('INSERT INTO cursos_estudiantes (curso_id, estudiante_id) VALUES(?, ?);', [curso_id, estudiante_id], (err, result) => {
                if(err){
                    res.status(400).json({err: err.message});
                }
                else {
                    res.status(201).json({
                        msg: 'Estudiante asociado al curso',
                    });
                }
            }
            );        
        } catch (error) {
            
        }
    }



}

module.exports = new CursosController();