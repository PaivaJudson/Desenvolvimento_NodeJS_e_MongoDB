module.exports = function(app){
    app.get('/formulario', function(request, response){
        // response.end("<html><body>Notícias de Tecnologia</body></html>");
        response.render("admin/form_add_noticia");
    });
}

