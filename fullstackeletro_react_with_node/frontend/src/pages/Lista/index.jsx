import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



export default function Lista() {


    // Retorna o state da aplicação Redux
    const lista = useSelector((listar) => listar.listaReducer);
    // var lista = [1, 4, 9];
    var [inputQuantidade, setInputQuantidade] = React.useState(1);
       
    

    const dispatch = useDispatch();




    function adicionarLista(event) {
        event.preventDefault();


        // const target = event.currentTarget;
        // console.log(target);


        const descricao = document.getElementById('inome_produto').value;
        const quantidade = inputQuantidade;
       


        console.log(`descricao: ${descricao}`);



        const enviarLista = [descricao, quantidade];

        dispatch({ type: "ADICIONARLISTA", value: enviarLista });

    }




    function limparLista(event) {

        event.preventDefault();
        dispatch({ type: "LIMPARLISTA" })

    }


    return (
        <div className="container-fluid bg-light shadow" >
            <div className="row">
                <h2 className="ml-3">Lista</h2>
                <hr />
            </div>
            <div className="row my-1">



                <div className="col-sm-12 col-md-7 shadow" style={{"height":"500px","overflow": "scroll" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Produto</th>
                                {/* <th scope="col">Preco</th> */}
                                <th scope="col">Qtd.</th>
                            </tr>
                        </thead>


                        <tbody>


                            
                            {lista.map((iten, index) => {
                                return (

                                    <tr>
                                        <th key={index} scope="row">{index}</th>
                                        <td>{iten[0]}</td>
                                        <td>{iten[1]}</td>
                                    </tr>
                                );
                            })
                            }




                        </tbody>
                    </table>
                </div>
                <div className="col-sm-12 col-md-5 shadow">

                    <form onSubmit={adicionarLista}>

                        <select className="form-control" id="inome_produto" name="nome_produto" >
                            <optgroup label="Geladeira/Refrigerador">
                                <option value="Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V">Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V</option>
                                <option value="Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Evox - 110v">Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Evox - 110v</option>
                                <option value="Geladeira Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v">Geladeira Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v</option>
                            </optgroup>
                            <optgroup label="Fogão">
                                <option value="Fogão Brastemp 5 Bocas BFS5N - Inox">Fogão Brastemp 5 Bocas BFS5N - Inox</option>
                                <option value="Fogão de Piso Mesa de Vidro Electrolux 5">Fogão de Piso Mesa de Vidro Electrolux 5</option>
                            </optgroup>
                            <optgroup label="Micro-ondas">
                                <option value="Microondas 25L Espelhado Pme25 Philco 127V">Microondas 25L Espelhado Pme25 Philco 127V</option>
                                <option value="Micro-ondas Consul Espelhado 32 Litros - CMS45 240v">Micro-ondas Consul Espelhado 32 Litros - CMS45 240v</option>
                                <option value="Micro-ondas Brastemp Espelhado Grill 32">Micro-ondas Brastemp Espelhado Grill 32</option>
                            </optgroup>
                            <optgroup label="Máquina/Lavadoura de Roupas">
                                <option value="Máquina De Lavar Roupas Midea Storm">Máquina De Lavar Roupas Midea Storm</option>
                                <option value="Lavadora de Roupas Brastemp 12Kg">Lavadora de Roupas Brastemp 12Kg</option>
                            </optgroup>
                            <optgroup label="Lava-Louças">
                                <option value="Lava-Louças Electrolux Inox 14 Serviços LV14X">Lava-Louças Electrolux Inox 14 Serviços LV14X</option>
                                <option value="Lava Louças Brastemp 10 Serviços BLF10 Branca 110V">Lava Louças Brastemp 10 Serviços BLF10 Branca 110V</option>
                            </optgroup>
                        </select>
                        <br />

                        <div class="form-group">
                            <label for="quantidade">Quantidade:</label>
                            <input type="number" min="1" max="10" id="quantidade" name="quantidade" value={inputQuantidade}
                            onChange={(event) => setInputQuantidade(event.target.value)}
                            required />
                        </div>

                        <button className="btn btn-danger btn-lg btn-block my-2" id="Enviar" type="submit" value="Confirmar" >Adicionar Iten</button>
                    </form>
                    <form onSubmit={limparLista}>
                        <button className="btn btn-dark btn-lg btn-block my-2">Limpar Lista</button>
                    </form>

                </div>

            </div>
            <div className="row justify-content-around">
                <div className="col-sm-12" >
                    
              </div>
            </div>
        </div>
    )
}
