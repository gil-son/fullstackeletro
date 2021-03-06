 // Pacotes/Frameworks
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom'; //Link faz com que a página troque o componente sem precisar atualizar
                                                   //O componente fica préviamente ativado
//Componentes

//Estilo
import './Menu.css';

function BaseMenu(props){
    const {location} = props;

        return(
            
                    <Navbar className="navbar-dark" bg="primary" expand="lg" fixed="top">
                        <Navbar.Brand>
                            FullStackEletro REACT
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="item-menu"/>
                        <Navbar.Collapse id="item-menu">
                            <Nav activeKey={location.pathname} className="ml-auto mr-3">
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
                        </Navbar.Collapse>
                    </Navbar>
                
        );
    
}
const Menu = withRouter(BaseMenu);//Seta a propriedade por aqui

export default Menu;