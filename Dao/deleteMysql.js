const connect = require("./connectMySQL");

function deleteMysql(table, callBack) {
    const instruction = "delete from " + table;

    const connection = connect();
    connection.connect();

    connection.query(instruction, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } )
}

module.exports.deleteMysql = deleteMysql;