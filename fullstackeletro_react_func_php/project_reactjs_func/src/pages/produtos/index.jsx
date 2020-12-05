import {useState, useEffect} from 'react';
import Produto from '../../components/Produto';
import {Container, Row} from 'react-bootstrap';



export default function Produtos(){

    const[produtos,setProdutos] = useState([]);

    // Quando o componente for criado
    useEffect(async () => { // obter a api de forma assincrona. No entando haverá esperas em sequência, quando necessário
        const resposta = await fetch("http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_func_php/php_to_connection/api/produtos.php");
        const dados = await resposta.json();
        setProdutos(dados);
        

    }, []);


    return(
        <>
            <Container>
                <Row>
                    {produtos && produtos.map(item =>
                       
                        <Produto imagem={"../../public/img/",item.imagem} nome={item.descricao} preco={item.preco} precofinal={item.precofinal} categoria={item.categoria}/>
                    )}
                    
                </Row>
            </Container>
        </>
    );
}