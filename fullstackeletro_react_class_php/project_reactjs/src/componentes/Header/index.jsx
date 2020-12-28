 // Pacotes/Frameworks
 import React from 'react';
 import {Navbar, Nav} from 'react-bootstrap';
 import {Link, withRouter} from 'react-router-dom'; //Link faz com que a página troque o componente sem precisar atualizar
                                                    //O componente fica préviamente ativado
 //Componentes
 
 //Estilo
 import './style.css';
 
 function BaseMenu(props){

    // let nome = "";

    // const [nome, setNome] = React.useState("");

    //  React.useEffect( () => {
    //     nome = localStorage.getItem('@project_reactjs/username');
    //  },[])
    // trazer a propriedade do login para cá, assim ao fazer o acesso, aqui poderá ser alterado
     const {location} = props;
 
         return( 
             
                     <Navbar className="navbar-dark py-4" bg="danger" expand="lg" >
                         <Navbar.Brand as={Link} href="/" to = "/">
                             Full Stack Eletro
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="item-menu"/>
                         <Navbar.Collapse id="item-menu">
                             <Nav activeKey={location.pathname} className="d-flex ml-auto mr-auto">
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
                                 {/* {nome} */}
                             <Nav activeKey={location.pathname}>
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
 const Header = withRouter(BaseMenu);//Seta a propriedade por aqui
 
 export default Header;