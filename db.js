function listUser(cb) {
    var mysql = require('mysql2');
    var connection = mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
    });
    connection.connect();
    connection.query('select * from client', function(err, rows, fields) {
        if (err) throw err;
        // rows.forEach(element => {
        //     console.log(element)
        // });
        cb(rows)
    });
    // connection.query("insert into client(idclient,nom,prenom,tel)values(27,'ANOUAR','SOBHI','000000004')",
    //     function(err, rows, fields) {
    //         if (err) throw err;


    //     });
    connection.end();
}
module.exports = { listUser };