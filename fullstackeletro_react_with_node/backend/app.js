// Receive configurations from server
var app = require('./app/config/server');

// Send app in routes

// to frontend
var rota = require('./app/routes/tofront/product')(app);
var rota = require('./app/routes/tofront/comment')(app);

// to backend
var rota = require('./app/routes/toback/comment')(app);


// Port configuration using app
app.listen(3333, () => {
    console.log("Servidor ativo!");
});