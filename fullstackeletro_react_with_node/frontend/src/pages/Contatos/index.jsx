//Dependências e Libs
import React from 'react';
import {Card} from 'react-bootstrap';

//Componentes
import {FormContato} from '../../componentes/Forms/index.jsx';
import {CardContato} from '../../componentes/Cards/index.jsx';

import ExibirMensagem from '../../componentes/Mensagem/index.js';

//import {ControlMensagem} from '../../control/Control.js'

import './style.css';

const Contatos = () => {


            const[dados, setDados] = React.useState([]);
            const[render, setRender] = React.useState(false);
            const[mensagem, setMensagem] = React.useState(false);

            React.useEffect( async () =>{
                console.log("Trouxe as Mensagens");
                const url = "http://localhost:3333/comment";
                const response = await fetch(url);
                setDados(await response.json());
            },[render])





          function registerContato(event){ 
          
              event.preventDefault(); 
              console.log(event.target); 

              
              let formData = new FormData(event.target) // recebe o elemento com os seus valores e passa isso para objeto
              console.log(formData.get("nome"));
              console.log(formData.get("mensagem"));
             
              var obj =  {
                nome:"Fulanx",
                mensagem:"Testx"
             };

              var obj2 = JSON.stringify(obj)
           
         

             console.log(obj);
             console.log(obj2);
              // Normalmente se constói uma api json e passa para o backend
             
              // Página que receberá os dados
              const url = "http://localhost:3333/comment"; 
              
              //Padrão GET, mas no fetch será usado o POST. Se passa 1 parâmetro no fetch, usa GET, se 2 parâmetros usa POST (dados enviados)

              // (url, obj literal).(resposta json c/ validação)
              fetch(url,{ 
                  
                  method: "POST", 
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: obj2
                  
              }).then((response) => response.json())
            //     .then((dadosValidados) =>{
            //     console.log(dadosValidados);
            //     setRender(!render);
            //   })

            //   setTimeout(() =>{ setMensagem(true)}, 0);
              
            //   setTimeout( () =>{setMensagem(false)}, 3000);
              
            //   document.getElementById('inome').value="";
            //   document.getElementById('imensagem').value="";

      }
    
   
        return(
           <>
             
                    <div className="container-fluid bg-light">
                      <div className="row">
                        <h2 className="ml-3">Contatos</h2>
                        <hr/>
                      </div>
                        <div className="row my-1">

                          <div className="col-sm-12 col-md-4">                              
                              <CardContato/>
                          </div>

                          <div className="col-sm-12 col-md-8 ">                          
                              <FormContato/>                             
                              <form onSubmit={registerContato}>
                                      <div className="form-group">
                                          <label for="inome">Nome</label>
                                          <input type="text" className="form-control" id="inome" name="nome"  placeholder="Digite o seu nome..." required/>
                                      </div>
                                      <div className="form-group">
                                          <label for="imensagem">Mensagem</label>
                                          <textarea  className="form-control" id="imensagem" name="mensagem" rows="5" cols="100" placeholder="Digite a sua mensagem..." required></textarea>                       
                                      </div>
                                  <button type="submit" className="btn btn-danger px-4">Enviar</button>
                              </form>
                              {mensagem && <div class=" d-flex alert alert-success mx-auto my-4 w-75 justify-content-around" role="alert">
                                Cadastro efetuado! 
                                </div>}             
                              {/* <form action="http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_class_php/model/mainMensagens.php" method="POST">
                                          <div className="form-group">
                                              <label for="inome">Nome</label>
                                              <input type="text" className="form-control" id="inome" name="nome"  placeholder="Digite o seu nome..."/>
                                          </div>
                                          <div className="form-group">
                                              <label for="imensagem">Mensagem</label>
                                              <textarea  className="form-control" id="imensagem" name="mensagem" rows="5" cols="100" placeholder="Digite a sua mensagem..."></textarea>                       
                                          </div>
                                      <button type="submit" className="btn btn-danger px-4">Enviar</button>
                                  </form> */}
                          </div>

                        </div>
                        <div className="row justify-content-around">
                            <div className="col-sm-12" >
                                  <ExibirMensagem/>
                                  <div style={{"height":"500px","overflow": "auto"}}>
                                        <div className="w-100">
                                          {dados.map( row =>
                                                  
                                                  <Card className="my-2 shadow" key={row.id}>
                                                      <Card.Body>
                                                          <Card.Title>{row.nome}</Card.Title>
                                                          <Card.Text>
                                                              {row.mensagem}
                                                          </Card.Text>
                                                      </Card.Body>
                                                  </Card>
                                          )}
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
           </>
    );
}

export default Contatos; 