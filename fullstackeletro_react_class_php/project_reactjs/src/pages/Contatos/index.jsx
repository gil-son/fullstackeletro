//Dependências e Libs
import React from 'react';

//Componentes
import {FormContato} from '../../componentes/Forms/index.jsx';
import {CardContato} from '../../componentes/Cards/index.jsx';

import ExibirMensagem from '../../componentes/Mensagem/index.js';

//import {ControlMensagem} from '../../control/Control.js'

import './style.css';

class Contatos extends React.Component{
    render(){
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
                          </div>

                        </div>
                        <div className="row justify-content-around">
                            <div className="col-sm-12" >
                                  <ExibirMensagem/>
                            </div>
                        </div>
                    </div>
           </>
    );
  }
}

export default Contatos; 