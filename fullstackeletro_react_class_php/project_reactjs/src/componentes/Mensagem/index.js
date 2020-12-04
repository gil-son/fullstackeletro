import React from 'react';
import {Card, Button} from 'react-bootstrap';


export default class ExibirMensagem extends React.Component{

    render(){
        return(
            <>
                <h3 className="d-flex justify-content-around">Mensagens</h3>
                <div className="w-100">
                    {this.props.arrayMensagem.map( row =>
                            
                            <Card className="my-2 shadow" key={row.id}>
                                <Card.Body>
                                    <Card.Title>{row.nome}</Card.Title>
                                    <Card.Text>
                                        {row.mensagem}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                    )}
                        
                </div>
            </>
        );
    }
}