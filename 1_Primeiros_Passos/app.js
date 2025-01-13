
const app = require('./config/server');

let route_noticias = require('./app/routes/noticias');
let route_home = require('./app/routes/home');
let route_form = require('./app/routes/fomulario_inclusao');


route_home(app);
route_noticias(app);
route_form(app);


app.listen(3000, function(){
    console.log("servidor escutando");
});
