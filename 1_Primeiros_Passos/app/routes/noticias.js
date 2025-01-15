
module.exports = function(app){
    
    app.get('/noticias', function(request, response){

        const mysql = require('mysql');
        const connection = mysql.createConnection({
            host : '127.0.0.1',
            user : 'root',
            password : '123456789',
            database : 'portal_noticias'
        });
    
        connection.query("select * from noticias", function(error, result){
            console.log(result);
            console.log(error);

            response.send(result);
        });
        //response.render("noticias/noticia.ejs");
    });
}