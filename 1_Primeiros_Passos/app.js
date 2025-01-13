
const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', function(request, response){
    response.end("<html><body>Portal de notícias</body></html>");
});

app.get('/tecnologia', function(request, response){
    // response.end("<html><body>Notícias de Tecnologia</body></html>");
    response.render("secao/tecnologia");
});

app.get('/moda', function(request, response){
    response.end("<html><body>Notícias de Moda</body></html>");
});

app.listen(3000, function(){
    console.log("servidor escutando");
});
