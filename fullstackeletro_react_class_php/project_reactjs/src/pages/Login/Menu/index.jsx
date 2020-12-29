 // Pacotes/Frameworks
 import React from 'react';
 import {Tab, Row, Col, ListGroup} from 'react-bootstrap';
 import Sonnet from 'react-bootstrap/ListGroup';
 import {Link, withRouter} from 'react-router-dom'; //Link faz com que a página troque o componente sem precisar atualizar
                                                    //O componente fica préviamente ativado
 //Componentes
 

 //Estilo
 


  export const Nome = (props) =>{

    return(
        <>
            <p>Como está, {props.obterNome} ?</p>
        </>
    );
}

 
export function BaseMenuUsuario(props){

    //  const {location} = props;
        


         return(
                     
                         <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                            <Row>
                                <Col sm={4}>
                                <ListGroup>
                                    <ListGroup.Item action href="#meusdados">
                                        Meus Dados
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#endereco">
                                        Endereço
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#pedidos">
                                        Pedidos
                                    </ListGroup.Item>
                                    <ListGroup.Item action as={Link} href="/carrinho" to = "/carrinho">
                                        Carrinho
                                    </ListGroup.Item>
                                    

                                    
                                </ListGroup>
                                </Col>
                                <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#meusdados">
                                        <Sonnet />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="#endereco">
                                        <Sonnet />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="#pedidos">
                                        <Sonnet />
                                    </Tab.Pane>

                    

                                </Tab.Content>
                                </Col>
                            </Row>
                            </Tab.Container>





                    
                 
         );
     
 }
 export const MenuUsuario = withRouter(BaseMenuUsuario);//Seta a propriedade por aqui
 
  