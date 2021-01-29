// Modules here

// Config

// Modules from
var db = require('../../config/database.js');


module.exports =  function(app){
    var connection = db();

    app.get("/product", function(req, res){
        var query = connection.query("SELECT * FROM produto",
        (error, result) => {
    
            // console.log("Dados:");
            // console.log(result);
            console.log(error, result);

            if(error){
                res.send(error);
            }else{
                res.send(result);
            }
            
        });

        query.on('error', function(error){
            console.log("[mysql] error:", error);
        });

    });
}
   


