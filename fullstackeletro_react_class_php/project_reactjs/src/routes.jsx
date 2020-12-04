import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
import Lojas from './pages/Lojas';
import Contatos from './pages/Contatos';

class Routes extends React.Component{
    render(){
        return(
            // <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/produtos" exact component={Produtos}/>
                    <Route path="/pedidos" exact component={Pedidos}/>
                    <Route path="/lojas" exact component={Lojas}/>
                    <Route path="/contatos" exact component={Contatos}/>
                </Switch>
            // </BrowserRouter> 
        );
    }
}

export default Routes;