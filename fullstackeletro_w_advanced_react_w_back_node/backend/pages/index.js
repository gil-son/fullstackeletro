//Dependências e Libs
import React from 'react';

//Componentes
import Header from '../components/Header.js'
import CarrosselProdutos from '../components/Carrossel.js';
import JumbotronHome from '../components/Jumbotron.js';
import CardDepoimento from '../components/Card.js';
import Footer from '../components/Footer.js';
// import './style.css';

class Home extends React.Component {
  render() {
    return (
      <>

        <html lang="pt-br">
          <head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />

            <title>React App</title>
          </head>
          <body>
            <nav>
              <Header />
            </nav>
            <div className="container-fluid bg-light">
              <div className="row  mt-3">
                <div>
                  <h2 className="ml-3">Seja Bem-vindo(a) a Full Stack Eletro!!!</h2>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-sm-12 col-md-6 contato shadow">
                  <CarrosselProdutos />
                </div>
                <div className="col-sm-12 col-md-6 contato shadow">
                  <JumbotronHome />
                </div>
              </div>
              <div className="row my-5">
                <div className=" mx-auto">
                  <h3>Depoimentos</h3>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-12 contato shadow">
                  <CardDepoimento />
                </div>
              </div>
            </div>
            <footer>
              <Footer />
            </footer>
          </body>
        </html>

      </>
    );
  }
}

export default Home; 