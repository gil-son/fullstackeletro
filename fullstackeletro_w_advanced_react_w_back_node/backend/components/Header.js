 // Pacotes/Frameworks
 import React from 'react';
 import {Navbar, Nav} from 'react-bootstrap';
//  import {Link, withRouter} from 'react-router-dom'; //Link faz com que a página troque o componente sem precisar atualizar
                                                    //O componente fica préviamente ativado
 //Componentes
 
 export default function Header(){
   


         return( 
             
                     <Navbar className="navbar-dark py-4" bg="danger" expand="lg" >
                         <Navbar.Brand  href="/" to = "/">
                             Full Stack Eletro
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="item-menu"/>
                         <Navbar.Collapse id="item-menu">
                             <Nav className="d-flex ml-auto mr-auto">
                                 <Nav.Item>
                                     <Nav.Link  href="/" to = "/">Home</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                     <Nav.Link  href="http://localhost:3001/produtos" to = "http://localhost:3001/produtos">Produtos</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                     <Nav.Link  href="http://localhost:3001/pedidos" to = "http://localhost:3001/pedidos">Pedidos</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                     <Nav.Link  href="http://localhost:3001/lojas" to = "http://localhost:3001/lojas">Lojas</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                     <Nav.Link  href="http://localhost:3001/contatos" to = "http://localhost:3001/contatos">Contatos</Nav.Link>
                                 </Nav.Item>
                             </Nav>
                                 
                             <Nav>
                             <Nav.Item className="">
                                    <Nav.Link  href="http://localhost:3001/lista" to="http://localhost:3001/lista">Lista</Nav.Link>
                                         </Nav.Item>
                                    <Nav.Item className="">
                                        <Nav.Link  href="http://localhost:3001/carrinho" to="http://localhost:3001/carrinho">Carrinho</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="">
                                        <Nav.Link  href="http://localhost:3001/login" to="http://localhost:3001/login">Login</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link  href="http://localhost:3001/cadastro" to="http://localhost:3001/cadastro">Cadastre-se</Nav.Link>   
                                    </Nav.Item>
                             </Nav>
                             
                         </Navbar.Collapse>
                     </Navbar>
                 
         );
     
 }

 
  