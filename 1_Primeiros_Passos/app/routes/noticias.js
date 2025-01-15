
let dbConnection = require('../../config/dbConnection');


module.exports = function(app){
    
    let connection = dbConnection();

    app.get('/noticias', function(request, response){

        connection.query("select * from noticias", function(error, result){
            console.log(result);
            // console.log(error);
            response.render("noticias/noticia", {noticias : result});
        });

    });
}