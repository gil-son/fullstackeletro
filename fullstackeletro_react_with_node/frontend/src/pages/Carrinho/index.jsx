import React from 'react';
import {useSelector, useDispatch} from 'react-redux';



export default function Carrinho() {


    // Retorna o state da aplicação Redux
    const compras = useSelector((state) => state.compraReducer.compras);
    
    //console.log(compras.length);
    // const [verifica, setVerifica] = React.useState(false);
        
    

    


    const dispatch = useDispatch();

    function limparCarrinho(event){

        event.preventDefault();
        dispatch( { type: "LIMPARCARRINHO"})
          
       // setVerifica(false);
    
       
    }


    return (
        <div className="container-fluid bg-light shadow">
        <div className="row">
          <h2 className="ml-3">Carrinho</h2>
          <hr/>
        </div>
          <div className="row my-1">

           

            <div className="col-sm-12 col-md-8 shadow" style={{"height":"500px","overflow": "scroll" }}>                          
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Preco</th>
                        <th scope="col">Qtd.</th>
                        </tr>
                    </thead>

                    
                    <tbody>
                        
                        {
                            
                         compras.map( (compra, index) => {
                            if(index > 0){
                                return(
                                    
                                    <tr>
                                        <th key={index} scope="row">{index}</th>
                                        <td>{compra.produto}</td>
                                        <td>{compra.preco}</td>
                                        <td>{compra.quantidade}</td>
                                        
                                    </tr>
                                    );
                                }
                            })
                                

                        }
                     

                        
                                
                    </tbody>
                </table>
            </div>
            <div className="col-sm-12 col-md-4 shadow">       
                <form onSubmit={limparCarrinho}>
                    <button className="btn btn-dark btn-lg btn-block">Limpar Carrinho</button>
                </form>                       
            </div>

          </div>
          <div className="row justify-content-around">
              <div className="col-sm-12" >
                   ...
              </div>
          </div>
      </div>
    )
}
