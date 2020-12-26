import React from 'react';
import './Produto.css';


export const ExibirProdutos = () => {

    

    const[produtos, setProdutos] = React.useState([]);
    let[categoria, setCategoria] = React.useState("todos");


    React.useEffect(async () => { // obter a api de forma assincrona. No entando haverá esperas em sequência, quando necessário
        const resposta = await fetch("http://localhost/Recode%20Pro/Atividade/fullstackeletro_react_class_php/model/Produto_to_JSON.php");
        const db = await resposta.json();
        setProdutos(db);
    }, [categoria]); // Toda vez que categoria mudar, ele renderiza



      function Selecionar(event){
        //   console.log(event);
             console.log(event.target); // Retorna aquele elemento do evento, com o tamanho 1
        //   console.log(event.target.currentSrc);
         
           const get = event.currentTarget;
           console.log(get);

            const elemento = get.getElementsByClassName("cartao")[0];  // obtendo o único índice
            console.log(elemento);

            elemento.style.width = "25vh";
            elemento.style.transition = "width 1s";
            elemento.style.cursor = "zoom-in";
      }

   

        function Desselecionar(event){
            const target = event.currentTarget;
            const elemento = target.getElementsByClassName("cartao")[0];
            elemento.style.width = "20vh";
     }
    


    
        return (
            <>

            </>
        );
     
}

export const ExibirCategorias = () => {


    return(
                <section className="categorias">                
                    <h3 className="ml-2">Categorias</h3>
                    


                </section>
         );
}
