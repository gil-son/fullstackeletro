import React from 'react';
import {Card} from 'react-bootstrap';


export default class ExibirMensagem extends React.Component{

    constructor(){
        super();
        this.state=({
            db:[]
        })
        this.exibirMensagens();
    }

    exibirMensagens(){
        fetch("http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_class_php/model/Mensagens_to_JSON.php")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                db: responseJson
            });
            console.log(this.state.db);
        })
    }

    render(){
        return(
            <>
                <h3 className="d-flex justify-content-around">Mensagens</h3>
                <div className="w-100">
                    {this.state.db.map( row =>
                            
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