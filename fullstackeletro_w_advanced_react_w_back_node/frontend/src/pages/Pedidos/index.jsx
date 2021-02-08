//Dependências e Libs
import React from 'react';

//Componentes
import {FormPedido} from '../../componentes/Forms/index.jsx';

import './style.css';

class Pedido extends React.Component {
  render() {
    return (
      <>
        
       
          <div className="container-fluid bg-light ">
          <div className="row">
                <h2 className="ml-3">Pedido</h2>
                <hr/>
              </div>
            <div className="row">

              <div className="col-sm-12 col-md-3  contato">
                <img src="img/pedido/lista-de-controle2.svg" alt="Lista de Pedido" className="w-50 ml-auto" />
                

                ,
                  </div>

              <div className="col-sm-12 col-md-9  contato">
                    <FormPedido/>
                  </div>
            </div>
            
          </div>
       
        
      </>
    );
  }
}

export default Pedido; 