import React from 'react';
import './Produto.css';

export class ExibirProdutos extends React.Component{

    constructor(){
        super();
        this.state=({
            db: []
        });
        this.exibirProdutos(); // Aqui é chamada a função que vai carregar a array, antes de passar para o Componente <ExibiProduto/>
    }


    exibirProdutos(){
        fetch("http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_class_php/model/Produto_to_JSON.php")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                db: responseJson
            });
            console.log(this.state.db);
        })
    }



    //   Seleciona(event){
    //     const target = event.currentTarget;
    //     const elemento = target.getElementsByClassName("cartao")[0];
    //     elemento.style.width = "25vh";
    //     elemento.style.transition = "width 1s";
    //     elemento.style.cursor = "zoom-in";

    //     // const target = event.currentTarget;
    //     // const cartao = document.getElementsByClassName('card-img-top')[0];
    //     // cartao.className = "w-75 m-auto";

    // }

    //   Deseleciona(event){
    //     const target = event.currentTarget;
    //     const elemento = target.getElementsByClassName("cartao")[0];
    //     elemento.style.width = "20vh";

    //     // const target = event.currentTarget;
    //     // const cartao = document.getElementsByClassName('card-img-top')[0];
    //     // cartao.className = "w-50 m-auto";
    
    // } 

    // onMouseOver={Seleciona} onMouseOut={Deseleciona}

    render(){
        return (
            <section className="produtos">
                <div className="card-group">
                  {this.state.db.map( //this.props.arrayProdutos.map
                    row=>
                            <div key={row.Id_Produto} className="card card-produtos"  >   
                                <img className="card-img-top cartao m-auto pt-1" src={`./img/${row.Imagem}`} alt="Card image cap1" />
                                <div className="card-body">
                                    <p className="card-text text-center descricao"><small>{row.Descricao}</small></p>
                                    <p className="card-text text-center descricao"><small><strike>{row.Preco}</strike></small></p>
                                    <p className="card-text text-center preco"><small>{row.Preco_Final}</small></p>
                                </div>
                            </div>
                        
                    )}
                </div> 
            </section>

        );
     };
    
}

export class ExibirCategorias extends React.Component {

render(){
    return(
                <section className="categorias">                
                    <h3 className="ml-2">Categorias</h3>
                    <ul className="list-group shadow-lg">
                      <li className="list-group-item list-group-item-action" onClick="exibirCategoria('todos');">Todos (12)</li>
                      <li className="list-group-item list-group-item-action" onClick="exibirCategoria('geladeira');">Geladeira (3)</li>
                      <li className="list-group-item list-group-item-action" onClick="exibirCategoria('fogao');">Fogões (2)</li>
                      <li className="list-group-item list-group-item-action" onClick="exibirCategoria('microondas');">Microondas (3)</li>                     
                      <li className="list-group-item list-group-item-action" onClick="exibirCategoria('lavadoura');">Lavadoura de roupas (2)</li>                     
                      <li className="list-group-item list-group-item-action" onClick="exibirCategoria('lavaLoucas');">Lava louças (2)</li>                     
                  </ul>
                </section>
         );
    }
}