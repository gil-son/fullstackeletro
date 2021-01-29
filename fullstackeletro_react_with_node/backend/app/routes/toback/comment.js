// Modules here

// Config

// Modules from
var db = require('../../config/database.js');


module.exports =  function(app){
    var connection = db();

    app.post("/comment", function(req, res){
        const {nome, comentario} = req.body;
     
        
        // Debug
        // res.send(`${nome}, ${comentario}`);
        

        // Insert                     INSERT INTO `fullstackeletro`.`comentario` (`nome`, `mensagem`) VALUES ('aaa', 'texto');
        connection.query(`INSERT INTO comentario(nome, mensagem) VALUES('${nome}' , '${comentario}')`,
        (error, result) => {
    
            // console.log("Dados:");
            // console.log(result);
            // console.log(error, result);

            if(error){
                res.send("Erro ao inserir");
                res.send(error);
            }else{
                res.status(201).json({
                    message: "Mensagem Cadastrada com Sucesso!"
                });                
            }
            
        });
    });
}