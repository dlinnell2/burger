var burger = require('../models/burger.js');

module.exports = function(app){
    app.get('/', function(req,res){
        console.log(burger.selectAll('burgers'))
        res.render('index', {thing: 'Hello'});
    });
};