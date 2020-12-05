 // Pacotes/Frameworks
 import {BrowserRouter} from 'react-router-dom';
 import Rotas from './rotas.jsx';
 import {Container} from 'react-bootstrap'; // Chaves, é só se tiver mais de um componente ou, haver componentes internos
//Componentes
 import Menu from './components/Menu/index.jsx';
 import './pages/App.css';

 export default function App(){
    return(
        <>
            <BrowserRouter>
                    <header>
                        <Menu/>
                    </header>
                <main>
                <Container fluid>
                    <Rotas/>
                </Container>
                </main>
            </BrowserRouter>
        </>
    );
 }
   



