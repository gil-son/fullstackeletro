//Dependências e Libs
import React from 'react';
import {useDispatch} from 'react-redux';

//Componentes

// import {ControlProdutos} from '../../control/Control';
import {ExibirProdutos, ExibirCategorias} from '../../componentes/Produto/index.js';
import {CardDepoimento} from '../../componentes/Cards/index.jsx';

import './style.css';



const Produtos = () =>{

  const dispatch = useDispatch();

  const[produtos, setProdutos] = React.useState([]);
  let[categoria, setCategoria] = React.useState("todos");


  React.useEffect(async () => { // obter a api de forma assincrona. No entando haverá esperas em sequência, quando necessário
      const resposta = await fetch("http://localhost:3333/product");
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


          const botoes = get.getElementsByClassName("botoes")[0];
          
          botoes.style.visibility = "initial";
         
          
          
          
    }

 

      function Desselecionar(event){
          const target = event.currentTarget;
          const elemento = target.getElementsByClassName("cartao")[0];
          elemento.style.width = "20vh";

          const botoes = target.getElementsByClassName("botoes")[0];
          
          botoes.style.visibility = "hidden";
          
   }


    function carrinhoImg(event){
      


      const target = event.currentTarget;
      console.log(target);


      const descricao = target.getElementsByClassName("descricao")[0].innerHTML;
      const precofinal = target.getElementsByClassName("precofinal")[0].innerHTML;
      
      console.log(`descricao: ${descricao}`);
      console.log(`precofinal: ${precofinal}`);
      

      const objCompras = {
        produto: descricao,
        preco: precofinal,
        quantidade: 1
    }

    

    dispatch( { type: "ADICIONARCARRINHO", value: objCompras})


    }

    
    function carrinhoBotao(event){
      
      // const get = document.getElementsByClassName('getScopo');
      // console.log("get");
      // console.log(get);

      // const categoria = document.getElementById('categoria');
      // const imagem = document.getElementById('imagem').src;
      // const descricao = document.getElementById('descricao').innerHTML;
      // const preco = document.getElementById('preco').innerHTML;
      // const precofinal = document.getElementById('precofinal').innerHTML;


      // console.log(`categoria: ${categoria}`);
      // console.log(`imagem: ${imagem}`);
      // console.log(`descricao: ${descricao}`);
      // console.log(`preco: ${preco}`);
      // console.log(`precofinal: ${precofinal}`);
      
      // const target = event.currentTarget;
      // console.log(target);


      // const descricao = target.getElementsByClassName("descricao")[0].innerHTML;
      // const precofinal = target.getElementsByClassName("precofinal")[0].innerHTML;
      
      // console.log(`descricao: ${descricao}`);
      // console.log(`precofinal: ${precofinal}`);

      // const objCompras = {
      //     produto: descricao,
      //     preco: precofinal,
      //     quantidade: 1
      // }

      

     // dispatch( { type: "ADICIONAR", value: objCompras})
     
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

                          { if(row.categoria === categoria || categoria === "todos"){
                              
                          return(
                              <div key={row.idproduto} className={`card card-produtos ${row.categoria}`} onMouseOver={Selecionar}  onMouseOut={Desselecionar} onClick={carrinhoImg} id="getScopo">   
                                  <img className="card-img-top cartao m-auto pt-1 " src={`./img/${row.imagem}`}  alt={`Card ${row.categoria}`} id="imagem"  />
                                  <div className="card-body">
                                      <p className="card-text text-center"><small id="descricao" className="descricao">{row.descricao}</small></p>
                                      <p className="card-text text-center"><small><strike id="preco">{row.preco}</strike></small></p>
                                      <p className="card-text text-center"><small id="precofinal" className="precofinal">{row.precofinal}</small></p>
                                  </div>
                                  <div className="d-flex justify-content-around mb-2 botoes">
                                    <button className="btn btn-success w-45" onClick={carrinhoBotao}>Carrinho</button>
                                    <button className="btn btn-danger w-45">Comprar</button>
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