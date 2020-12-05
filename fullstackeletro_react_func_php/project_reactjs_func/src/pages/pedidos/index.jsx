import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import {useState} from 'react';


export default function Pedidos(){
    const [form, setForm] = useState({
        nome:"",
        endereco:"",
        telefone:"",
        valor:"",
        quantidade:"",
        preco_final:""

    });
    
          
    const controleMudanca = (evento) =>{
        console.log(evento.target.value);
        console.log(form);
        setForm({
            //nome: evento.target.value Assim ajustaria o nome, mas perderia os demais estados
            ...form, // Os 3 ... pontinhos mantem os dados atuais do formulário
            
            [evento.target.id]: evento.target.value // Ao invés de '[nome]: evento.target.value'. O id fará a dinâmica
            
        })
        console.log(form);

    }

    

    
    const controleEnvio = async (evento) =>{
        evento.preventDefault() //Executa o submit, mas a tela não é renderizada
        console.log("Submitando");
        const preco_final = parseFloat(form.valor) * parseFloat(form.quantidade)
        console.log(preco_final);
        document.getElementById("preco_final").value = `R$ ${preco_final}`;
        
        const json = JSON.stringify(form);  console.log(json);
        const opcoes = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: json
        }

        
         // obter a api de forma assincrona. No entando haverá esperas em sequência, quando necessário
         
         
         
         const resposta = await fetch("http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_func_php/php_to_connection/api/cadastro_produtos.php",
         opcoes);

         const dados = await resposta.json();
         console.log(dados);



        
    }

    return(
        <>
            <Row>
                <div className="col-lg-6 col-md-6 mx-auto">
                    <Form onSubmit={controleEnvio}>
                        <Form.Group>
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control onChange={controleMudanca} type="text" id="nome"/>                          
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Endereço:</Form.Label>
                            <Form.Control onChange={controleMudanca} type="text" id="endereco"/>                          
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control onChange={controleMudanca} type="text" id="telefone"/>                          
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Produto:</Form.Label>
                            <Form.Control onChange={controleMudanca} type="text" id="produto"/>                          
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Valor Unitário:</Form.Label>
                            <Form.Control onChange={controleMudanca} type="text" id="valor"/>                          
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control onChange={controleMudanca} type="text" id="quantidade"/>                          
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Preço Final:</Form.Label>
                            <Form.Control disabled type="text" id="preco_final"/>                          
                        </Form.Group>
                        <Button variant="primary" type="submit">Confirmar</Button>
                    </Form>
                </div>
            </Row>
        </>
    );
}
