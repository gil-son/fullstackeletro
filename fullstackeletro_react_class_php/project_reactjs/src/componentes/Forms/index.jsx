import React from 'react';

export function FormContato(){

    function registerContato(event){
        //console.log(event); // Um objeto com propriedades é passado. Pra ver ele no console, habilite na engrenagem a opção: Preserve log. A propriedade target, trás onde o evento foi declarado

        event.preventDefault(); // A página por padrão é atualiada. Então isso foi previnido
        
        console.log(event.target); // retorna o elemento daquele evento
        
        //let formData = new FormData; // Essa classe é própria do JS
        //formData.append("nome","Guilherme"); // Equivale há inputs
        //formData.append("mensagem","Etc etc");

        //console.log(formData); // Objeto e seus atributos e métodos
        //console.log(formData.get("mensagem"));

        
         let formData = new FormData(event.target) // recebe o elemento com os seus valores e passa isso para objeto
         console.log(formData.get("mensagem"));

         // Normalmente se constói uma api json e passa para o backend

        // Página que receberá os dados
        const url = "http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_class_php/model/mainMensagens.php"; 
        
        //Padrão GET, mas no fetch será usado o POST. Se passa 1 parâmetro no fetch, usa GET, se 2 parâmetros usa POST (dados enviados)

        // (url, obj literal)
        fetch(url,{ 
            method: "POST", 
            body: formData
        })
    }
    
    
        return(
            <>
                <h3>Formulário de Contato</h3>
                <form onSubmit={registerContato}>
                        <div className="form-group">
                            <label for="inome">Nome</label>
                            <input type="text" className="form-control" id="inome" name="nome"  placeholder="Digite o seu nome..." required/>
                        </div>
                        <div className="form-group">
                            <label for="imensagem">Mensagem</label>
                            <textarea  className="form-control" id="imensagem" name="mensagem" rows="5" cols="100" placeholder="Digite a sua mensagem..." required></textarea>                       
                        </div>
                    <button type="submit" className="btn btn-danger px-4">Enviar</button>
                </form>
                            
                {/* <form action="http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_class_php/model/mainMensagens.php" method="POST">
                            <div className="form-group">
                                <label for="inome">Nome</label>
                                <input type="text" className="form-control" id="inome" name="nome"  placeholder="Digite o seu nome..."/>
                            </div>
                            <div className="form-group">
                                <label for="imensagem">Mensagem</label>
                                <textarea  className="form-control" id="imensagem" name="mensagem" rows="5" cols="100" placeholder="Digite a sua mensagem..."></textarea>                       
                            </div>
                        <button type="submit" className="btn btn-danger px-4">Enviar</button>
                    </form> */}


            </>
        );
   
}


export function FormPedido(){

        function enviarPedido(event){
            event.preventDefault();
            // console.log(event);
            
            let formData = new FormData(event.target);
            console.log(event.target);
            console.log(formData.get("nome")," - ",formData.get("produto"));


           const url = "http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_class_php/model/mainPedidos.php";
       
            fetch(url,{ 
                method: "POST", 
                body: formData
            })
       
       
        }

        return(
            <>
                <h3 className="my-5">Formulário de Pedido</h3>
                <form onSubmit={enviarPedido}>
                        <div className="form-group">
                            {/* <label for="inome">Nome</label> */}
                            <input id="inome" type="text" className="form-control" name="nome" placeholder="Digite o seu nome..."/>
                        </div>
                        <div className="form-group">
                            {/* <label for="iendereco">Endereço</label> */}
                            <input id="iendereco" className="form-control" name="endereco" placeholder="Digite o seu endereço..." />                       
                        </div>
                        <div className="form-group">
                            {/* <label for="itelefone">Telefone</label> */}
                            <input id="itelefone" className="form-control" name="telefone"  placeholder="Digite o seu telefone..." />                      
                        </div>
                        <div className="form-group"> 
                                {/* <label for="iproduto">Produto</label>   */}
                                <select className="form-control" id="iproduto" name="produto">
                                    
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
                                
                         </div>
                         <div className="form-group">
                            {/* <label for="ipreco">Preço:</label> */}
                            <input id="ipreco" className="form-control" type="number"  name="preco"  placeholder="Digite o preço..." required />
                        </div> 

                        <div className="form-group">
                            {/* <label for="iquantidade">Quantidade:</label> */}
                            <input id="iquantidade" className="form-control" type="number"  name="quantidade"  placeholder="Digite a quantidade..." required />
                        </div> 

                        <div className="form-group">
                            {/* <label for="itotal">Total:</label> */}
                            <input id="itotal" className="form-control" type="number"  name="total" placeholder="Digite o Total..." required />
                        </div> 
                    <button type="submit" className="btn btn-danger px-4">Confirmar</button>
                </form>
            </>
        );
}