import React from 'react';
import './Produto.css';


export const ExibirProdutos = () => {

    

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
            <section className="produtos">
                <button onClick={ () => setCategoria("fogao")}>Fogão</button>
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

        );
     
}

export const ExibirCategorias = () => {

    // function fazeraponte(a){
    //     ponte(a);
    // }
   

    return(
                <section className="categorias">                
                    <h3 className="ml-2">Categorias</h3>
                    <ul className="list-group shadow-lg">
                      <li className="list-group-item list-group-item-action" >Todos (12)</li>
                      <li className="list-group-item list-group-item-action" >Geladeira (3)</li>
                      {/* <li className="list-group-item list-group-item-action" onClick={() => teste()}>Fogões (2)</li> */}
                      <li className="list-group-item list-group-item-action">Microondas (3)</li>                     
                      <li className="list-group-item list-group-item-action" onClick="exibirCategoria('lavadoura');">Lavadoura de roupas (2)</li>                     
                      <li className="list-group-item list-group-item-action" onClick="exibirCategoria('lavaLoucas');">Lava louças (2)</li>                     
                  </ul>
                </section>
         );
}
