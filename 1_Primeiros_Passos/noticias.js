
const http = require('http');

const server = http.createServer(function(request, response){
    
    let categoria = request.url;

    if(categoria == '/tecnologia'){
        response.end("<html><body>Notícias de Tecnologia</body></html>");
    }else if(categoria == '/moda'){
        response.end("<html><body>Notícias de Moda</body></html>");
    }else if(categoria == '/beleza'){
        response.end("<html><body>Notícias de Beleza</body></html>");
    }else{
         response.end("<html><body>Portal de notícias</body></html>");
    }
    
});

server.listen(3000);

