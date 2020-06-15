const connect = require("../connectMySQL");

function getLabelDao(label, callBack) {
    const instryction = 'select * from label where label = ?';
    const arr = [label];
    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}


function getLabelAllDao(callBack) {
    const instryction = "select * from label";
    const connection = connect();
    connection.connect();
    connection.query(instryction, (err, data) => {
        connection.end();

        if(!err) callBack(data);
        else console.log(err);

    } )
}

module.exports.getLabelDao = getLabelDao;
module.exports.getLabelAllDao = getLabelAllDao;