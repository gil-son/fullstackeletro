// Pacotes/Frameworks
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom'; 
                                               



  
 
 

class Header extends React.Component{
    render(){
        return( 
            
                    <Navbar className="navbar-dark py-4" bg="danger" expand="lg" >
                        <Navbar.Brand as={Link} href="/" to = "/">
                            Full Stack Eletro
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="item-menu"/>
                        <Navbar.Collapse id="item-menu">
                            <Nav  className="d-flex ml-auto mr-auto">
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/" to = "/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/produtos" to = "/produtos">Produtos</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/pedidos" to = "/pedidos">Pedidos</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/lojas" to = "/lojas">Lojas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/contatos" to = "/contatos">Contatos</Nav.Link>
                                </Nav.Item>
                            </Nav>
                                {/* <Nome obterNome/>  */}
                            <Nav >
                            <Nav.Item className="">
                                   <Nav.Link as={Link} href="/lista" to="/lista">Lista</Nav.Link>
                                        </Nav.Item>
                                   <Nav.Item className="">
                                       <Nav.Link as={Link} href="/carrinho" to="/carrinho">Carrinho</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item className="">
                                       <Nav.Link as={Link} href="/login" to="/login">Login</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                       <Nav.Link as={Link} href="/cadastro" to="/cadastro">Cadastre-se</Nav.Link>   
                                   </Nav.Item>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Navbar>
                
        );
    }
}

export default Header;