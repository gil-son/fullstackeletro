
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import wait from './code-splitting/img/wait.gif';

// import {Header} from './componentes/Header';
// import Footer from './componentes/Footer';
// import Routes from './routes';

// Code splitting

const Header = lazy( () => import('./code-splitting/Header'));
const Footer = lazy( () => import('./code-splitting/Footer'));
const Routes = lazy( () => import('./code-splitting/Routes'));



// import './global.css';

 class App extends React.Component {
    render(){
        return(
            <>
                <BrowserRouter>
                    <header>
                        <Suspense fallback ={
                            <p>Carregando...</p>
                        }
                        >
                            <Header/>
                        </Suspense>
                    </header>
                    <main>
                        <Suspense fallback ={
                                <img src={wait} />
                            }
                            >
                                <Routes/>
                        </Suspense>
                    </main>
                    <footer>
                        <Suspense fallback ={
                                <p>Carregando...</p>
                            }
                            >
                                <Footer/>
                        </Suspense>
                    </footer>
                </BrowserRouter>
            </>
        );
    }
}

export default App;