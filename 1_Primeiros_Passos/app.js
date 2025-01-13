
const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', function(request, response){
    response.render("home/index");
});

app.get('/formulario', function(request, response){
    // response.end("<html><body>Notícias de Tecnologia</body></html>");
    response.render("admin/form_add_noticia");
});

app.get('/noticias', function(request, response){
    response.render("noticias/noticia.ejs");
});

app.listen(3000, function(){
    console.log("servidor escutando");
});
