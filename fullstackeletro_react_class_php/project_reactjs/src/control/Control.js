import React from 'react';
import {ExibirProdutos} from '../componentes/Produto/index.js';
import ExibirMensagem from '../componentes/Mensagem/index.js';


 export class ControlProdutos extends React.Component{

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

    /* Se optar em usar o map aqui e no componente correspondente fica {this.props.nome}
    {db.map(item=>
                    <ExibirProdutos imagem={item.Imagem} descricao={item.Descricao} preco={item.Preco} Preco_Final />
    )}
     */

    render(){
        return(
            <div>
                 <ExibirProdutos arrayProdutos={this.state.db} /> 
            </div>
        );
    }
}
                                 // Passou a array para o Componente <ExibirProdutos/>    
                                 // Então além do conteúdo, agora tem uma array       
 
export class ControlMensagem extends React.Component{
    constructor(){
        super();
        this.state=({
            db:[]
        })
        this.exibirMensagens();
    }

    exibirMensagens(){
        fetch("http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_class_php/model/Mensagens_to_JSON.php")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                db: responseJson
            });
            console.log(this.state.db);
        })
    }
    




    render(){
        return(

            <>
                <ExibirMensagem arrayMensagem={this.state.db} />
                {/* <ExibirMensagem/> */}
            </>
            
        );
    }
}