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