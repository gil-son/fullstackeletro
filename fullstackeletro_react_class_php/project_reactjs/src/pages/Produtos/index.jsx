//Dependências e Libs
import React from 'react';

//Componentes

// import {ControlProdutos} from '../../control/Control';
import {ExibirProdutos} from '../../componentes/Produto';
import {ExibirCategorias} from '../../componentes/Produto';

import './style.css';



class Produtos extends React.Component {
  render() {
    return (
      <>
        
        
          <div className="container-fluid bg-light">
              <div className="row">
                <h2 className="ml-3">Produtos</h2>
                <hr/>
              </div>
            <div className="row">

              <div className="col-sm-12 col-md-3">
              
              <ExibirCategorias/>

              </div>

              <div className="col-sm-12 col-md-9">
                
                <ExibirProdutos/>

              </div>
            </div>
          </div>

        
        
      </>
    );
  }
}

export default Produtos; 