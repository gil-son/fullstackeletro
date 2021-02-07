//Dependências e Libs
import React from 'react';

//Componentes
import {CarrosselProdutos} from '../../componentes/Carrossel/index.jsx';
import {JumbotronHome} from '../../componentes/Jumbotron/index.jsx';
import {CardDepoimento} from '../../componentes/Cards/index.jsx';
       
import './style.css';

class Home extends React.Component {
  render() {
    return (
      <>
         
       
          <div className="container-fluid bg-light">
             <div className="row  mt-3">
                <div>
                  <h2 className="ml-3">Seja Bem-vindo(a) a Full Stack Eletro!!!</h2>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-sm-12 col-md-6 contato shadow">
                    <CarrosselProdutos />
                </div>
                <div className="col-sm-12 col-md-6 contato shadow">
                   <JumbotronHome/>
                </div>
             </div>
             <div className="row my-5">
               <div className=" mx-auto">
                  <h3>Depoimentos</h3>
               </div>
             </div>
            

            <div className="row">
              <div className="col-sm-12 col-md-12 contato shadow">
                  <CardDepoimento/>
              </div>
            </div>
          </div>
       
        
      </>
    );
  }
}

export default Home; 