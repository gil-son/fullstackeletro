//Dependências e Libs
import React from 'react';

//Componentes


import './style.css';

class Lojas extends React.Component{
    render(){
        return(
           <>
             
                <main>
                  <div className="container-fluid bg-light lojas">
                    <div className="row">
                          <h2 className="ml-3">Lojas</h2>
                          <hr/>
                      </div>
                    <div className="row">
                      <div className="col bg-light contato">
                          
                        <table class="table shadow">
                          <thead class="thead-dark">
                            <tr>
                                <th scope="col">Cidade</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Número</th>
                                <th scope="col">Proximidade</th>
                                <th scope="col">Telefone</th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Rio de Janeiro</th>
                                    <td>Avenida Presidente Vargas, 5000</td>
                                    <td>10 &ordm; andar</td>
                                    <td>Centro</td>
                                    <td>(21) 3333-3333</td>
                                </tr>

                                <tr>
                                    <th scope="row">São Paulo</th>
                                    <td>Avenidade Paulista, 985</td>
                                    <td>3 &ordm; andar</td>
                                    <td>Jardins</td>
                                    <td>(11) 4444-4444</td>
                                </tr>
                                
                                <tr>
                                    <th scope="row">Santa Catarina</th>
                                    <td>Rua Major &Aacute; vila, 370</td>
                                    <td>Vila Mariana</td>
                                    <td>Nordeste</td>
                                    <td>(47) 5555-5555</td>
                                </tr>
                            </tbody>
                        </table>
                  
                      </div>                  
                    </div>
                  </div>
                </main>
             
           </>
    );
  }
}

export default Lojas; 