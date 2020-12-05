// Pacotes/Frameworks
import { Switch, Route} from 'react-router-dom';

//Componentes
import Home from './pages/home';
import Produtos from './pages/produtos';
import Pedidos from './pages/pedidos';
import Lojas from './pages/lojas';
import Contatos from './pages/contatos';


export default function Rotas(){
    return(
        
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/produtos" component={Produtos}></Route>
                <Route exact path="/pedidos" component={Pedidos}></Route>
                <Route exact path="/lojas" component={Lojas}></Route>
                <Route exact path="/contatos" component={Contatos}></Route>
            </Switch>
        
    );
}