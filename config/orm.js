var connection = require('./connection.js');

var orm = {
    selectAll: function(table){
        connection.query('SELECT * FROM ??', [table], function (err, sqlData){
            if(err) throw(err);
            return sqlData;
        });
    },
    insertOne: function(table, column, burger){
        connection.query('INSERT INTO ?? (??) VALUES (?)', [table, column, burger], function (err, sqlData){
            if(err) throw(err);
            return sqlData;
        })
    },
    updateOne: function(table, columnValue, burgerID){
        connection.query('UPDATE ?? SET ? WHERE ?', [table, columnValue, burgerID], function (err, sqlData){
            if(err) throw(err);
            return sqlData;
        })
    }
};

module.exports = orm;