const mysql = require('mysql2');

const db = mysql.createConnection({  
    host: 'MacBook-Air-de-Angel-2.local',
    user: 'root',
    password: 'Pato1234',
    database: 'cursos'
});

db.connect((err) => {
    if(err){
        console.log(err);
        throw err;
    }else{
        console.log('Conectado a la base de datos');
    }
});

module.exports = db;
