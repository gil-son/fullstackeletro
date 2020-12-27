//Dependências e Libs
import React from 'react';

//Componentes

// import {ControlProdutos} from '../../control/Control';
import {ExibirProdutos, ExibirCategorias} from '../../componentes/Produto/index.js';
import {CardDepoimento} from '../../componentes/Cards/index.jsx';

import './style.css';



const Produtos = () =>{

  const[produtos, setProdutos] = React.useState([]);
  let[categoria, setCategoria] = React.useState("todos");


  React.useEffect(async () => { // obter a api de forma assincrona. No entando haverá esperas em sequência, quando necessário
      const resposta = await fetch("http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_class_php/model/Produto_to_JSON.php");
      const db = await resposta.json();
      setProdutos(db);
  }, [categoria]); // Toda vez que categoria mudar, ele renderiza



    function Selecionar(event){
      //   console.log(event);
           console.log(event.target); // Retorna aquele elemento do evento, com o tamanho 1
      //   console.log(event.target.currentSrc);
       
         const get = event.currentTarget;
         console.log(get);

          const elemento = get.getElementsByClassName("cartao")[0];  // obtendo o único índice
          console.log(elemento);

          elemento.style.width = "25vh";
          elemento.style.transition = "width 1s";
          elemento.style.cursor = "zoom-in";
    }

 

      function Desselecionar(event){
          const target = event.currentTarget;
          const elemento = target.getElementsByClassName("cartao")[0];
          elemento.style.width = "20vh";
   }


  
  
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
                  <ul className="list-group shadow-lg">
                      <li className="list-group-item list-group-item-action" onClick={() => setCategoria("todos")}>Todos (12)</li>
                      <li className="list-group-item list-group-item-action" onClick={() => setCategoria("geladeira")}>Geladeira (3)</li>
                      <li className="list-group-item list-group-item-action" onClick={() => setCategoria("fogao")}>Fogões (2)</li>
                      <li className="list-group-item list-group-item-action" onClick={() => setCategoria("microondas")}>Microondas (3)</li>                     
                      <li className="list-group-item list-group-item-action" onClick={() => setCategoria("lavadoura")}>Lavadoura de roupas (2)</li>                     
                      <li className="list-group-item list-group-item-action" onClick={() => setCategoria("lavaLoucas")}>Lava louças (2)</li>                     
                  </ul>

              </div>

              <div className="col-sm-12 col-md-9">
                
                <ExibirProdutos/>
                <section className="produtos">
                  <div className="card-group">
                    
                    {produtos.map( //this.props.arrayProdutos.map
                      row=>

                          { if(row.Categoria === categoria || categoria === "todos"){
                              
                          return(
                              <div key={row.Id_Produto} className={`card card-produtos ${row.Categoria}`} onMouseOver={Selecionar}  onMouseOut={Desselecionar}>   
                                  <img className="card-img-top cartao m-auto pt-1 " src={`./img/${row.Imagem}`}  alt={`Card ${row.Categoria}`}  />
                                  <div className="card-body">
                                      <p className="card-text text-center descricao"><small>{row.Descricao}</small></p>
                                      <p className="card-text text-center descricao"><small><strike>{row.Preco}</strike></small></p>
                                      <p className="card-text text-center preco"><small>{row.Preco_Final}</small></p>
                                  </div>
                              </div>
                          );
                          }
                        }
                      )}                    
                  </div>                
                </section>
              </div>
            </div>


            <div className="row my-5">
              <div className=" mx-auto">
                  <h3>Depoimentos</h3>
              </div>
            </div>
            <div className="row">
                <div className="mx-auto">
                  <CardDepoimento/>
                </div>    
            </div>
      </div>

        
        
      </>
    );
  
}

export default Produtos; 