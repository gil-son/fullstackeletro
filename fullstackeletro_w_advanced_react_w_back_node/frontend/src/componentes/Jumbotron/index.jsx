import React from 'react'; 



// Componentes


export class JumbotronHome extends React.Component{

    render(){
        return(
          <>
                <div className="jumbotron my-2 bg-light">
                      <h3 className="display-4">O seu bolso agradece!</h3>
                      <p className="lead">Aqui é simples. Você paga e nós entregamos... (Avá!)</p>
                      <p className="lead">Com o diferencial de que você ganha além do produto!</p>
                      <hr className="my-4"/>
                      <p>Sem entrelinhas!</p>
                      <a className="btn btn-danger btn-lg" href="#" role="button">Saiba mais</a>
                    </div>

          </>
        );
    }
}