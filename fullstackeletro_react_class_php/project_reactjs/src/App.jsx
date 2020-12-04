
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Routes from './routes';


import './global.css';

 class App extends React.Component {
    render(){
        return(
            <>
                <BrowserRouter>
                    <header>
                        <Header/>
                    </header>
                    <main>
                        <Routes/>
                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                </BrowserRouter>
            </>
        );
    }
}

export default App;