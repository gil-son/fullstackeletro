//Dependências e libs
import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
//Componentes

//css, img etc



export class CardDepoimento extends React.Component {
    render() {
        return (
            
            <CardGroup>
            <Card>
              <Card.Img variant="top" src="./img/depoimento/menina_gamer.svg" className="w-50 mx-auto mt-2"/>
              <Card.Body>
                <Card.Title>Carol</Card.Title>
                <Card.Text>
                  Ai gente?! Bem que podia ter mais cores. Fora isso tá incrível.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 1 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="./img/depoimento/menina.svg" className="w-50 mx-auto mt-2"/>
              <Card.Body>
                <Card.Title>Flores Aparecida</Card.Title>
                <Card.Text>
                  Amei !!! Só produto de qualidade!!! Bem que podia vender flores
                  {' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="./img/depoimento/ninja.svg" className="w-50 mx-auto mt-2"/>
              <Card.Body>
                <Card.Title>Anonymous</Card.Title>
                <Card.Text>
                    0327d4c3a5ce736c2371c9228f812269
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 5 days ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
            
        );
    }
}


export class CardContato extends React.Component{
    render(){
        return(
            <>
                <div className="row justify-content-around">
                            <div className="card cards shadow w-75" >     {/* após voltar | voltar ?*/}
                                <img className="card-img-top w-25" src="img/contato/telefoneWhatsapp.png" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Fale pelo Whatsapp</h5>
                                <p className="card-text">Se desejar, entre em contato conosco pelo Whatsapp.</p>
                                <a href="#" className="btn btn-success">Whatsapp</a>
                            </div>
                            </div>
                        </div>

                        <div className="row justify-content-around">
                            <div className="card cards shadow w-75" >
                                <img className="card-img-top w-25" src="img/contato/email.png" alt="Card image cap"/>
                                <div className="card-body">
                                <h5 className="card-title">Fale pelo E-mail</h5>
                                <p className="card-text">Se desejar, entre em contato conosco pelo E-mail.</p>
                                <a href="#" className="btn btn-danger px-4">E-mail</a>
                            </div>
                            </div>
                        </div>
            </>
        );
    }
}