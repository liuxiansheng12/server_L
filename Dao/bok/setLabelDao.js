const connect = require("../connectMySQL");

function setLabelDao(label, callBack) {
    const instryction = 'insert into label (`label`) values (?)';
    const arr = [label];

    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } )
}

module.exports.setLabelDao = setLabelDao;