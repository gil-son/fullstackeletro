//Funções de categoria


function exibirCategoria( categoria){

    let elementos = document.getElementsByClassName('box_produto');
    console.log(elementos);
    for( var i=0; i < elementos.length; i++){
        console.log(elementos[i].id);

    if(categoria == 'todos'){
        elementos[i].style = "display:block";
    }else{
        if(categoria == elementos[i].id){
            elementos[i].style = "display:block";
        }else{
            elementos[i].style = "display:none";
        }
    }
        
        
    }
}

// Funções de produtos

function destaque(imagem){
    console.log(imagem);
    console.log(imagem.width);
   

    let imagens = document.getElementsByTagName('img');
    
    //console.log(imagens[0].src);

    let imagemEncontrada;
    let imagemEditada;

    console.log("Comprimento:"+imagens.length);

    for( var i=0; i < imagens.length; i++){
        if(imagens[i].src == imagem.src)
            imagemEncontrada = imagem.src;
            imagemEditada = imagens[i];

    }

    console.log("Imagem Clicada:"+imagem.src);
    console.log("Imagem Encontrada:"+imagemEncontrada);
    console.log("Imagem Editada:"+imagemEditada.tabIndex);

    if(imagem.width <= 175){
        

        for( var i=0; i < imagens.length; i++){
            if(imagens[i].src != imagem.src)
                imagens[i].style="opacity:0.5";
            }
            imagem.style ="opacity:1";
            imagem.width *= 2 ; //imagem.style="width:350";
            imagem.style="cursor:zoom-in";
            console.log(imagem.width);
             let a =   document.getElementsByClassName('box_produto');
             a.style="background-color: red;";
    }else{
        

        for( var i=0; i < imagens.length; i++){
            if(imagens[i].src != imagem.src)
                imagens[i].style="opacity:1";
            }
            let a =   document.getElementsByClassName('box_produto');
             a.style="background-color: red;";
            imagem.width /= 2;
            
    }
}


/* Finalizar Compra */



// function quantidadeProduto() {
//        var select = document.getElementById('iformulario-pedido');
//        var option = select.options;
//         console.log(option.text);
//     //    let valor = document.getElementById('inome_produto').value;

//        switch(option){
//         case 'Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V': 1;break;
//         case 'Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Evox - 110v':2 ;break;
//         case 'Geladeira Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v':3 ;break;
//         case 'Fogão Brastemp 5 Bocas BFS5N - Inox':4 ;break;
//         case 'Fogão de Piso Mesa de Vidro Electrolux 5':5 ;break;
//         case 'Microondas 25L Espelhado Pme25 Philco 127V':6 ;break;
//         case 'Micro-ondas Consul Espelhado 32 Litros - CMS45 240v':7 ;break;
//         case 'Micro-ondas Brastemp Espelhado Grill 32':8 ;break;
//         case 'Máquina De Lavar Roupas Midea Storm':9 ;break;
//         case 'Lavadora de Roupas Brastemp 12Kg':10 ;break;
//         case 'Lava-Louças Electrolux Inox 14 Serviços LV14X':11 ;break;
//         case 'Lava Louças Brastemp 10 Serviços BLF10 Branca 110V':12 ;break;
//        }
       

//         // document.getElementById('valor_total').value = "option.value";
//         // document.getElementById('valo_unitario').value = option.value;
// }
