import React from 'react';


// Do Login adiante, podesse habilitar páginas e criar sub-páginas+router dentro do painel do usuário OU sub-páginas+Sonnet


import {MenuUsuario, Nome, BaseMenuUsuario} from './Menu/';


 const Input = ({label, ...props}) =>{

    return(
        <>
            <label>{label}</label>
            <input {...props} className="form-control"/>
        </>
    );

}


export function Login(){
    const [nome, setNome] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const [cliente, setCliente] = React.useState("x")
   
    let username = localStorage.getItem('@project_reactjs/username');
    console.log(username);
                   
    function acessar(event){
        
        event.preventDefault();
        console.log(event.target);
        let formData = new FormData(event.target);
       
        const url = "http://localhost/Recode%20Pro/GIT_fullstackeletro/fullstackeletro/fullstackeletro_react_class_php/model/MainUsuarioLogin.php";
        fetch(url,{
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dadosValidados) =>{
            console.log(dadosValidados);
            localStorage.setItem('@project_reactjs/username', dadosValidados[1]);
            // const att = localStorage.getItem('@project_reactjs/username');
            // setCliente(att);
            window.location.reload(); // renderiza de novo, os states são pegos do início. O ideal é ir para outra página ou useEffect, mas teria que renderizar tudo
        }) 
        
    }

    if(username === null || username === 'undefined'){
        return(


            <div className="container-fluid bg-light">
            <div className="row mt-3">
                <h2 className="ml-3">Login</h2>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 bg-success d-flex justify-content-around">
                    <form className="my-5" onSubmit={acessar}>
                        <div className="form-group">
                            <Input label="Nome:" className="form-control" type="text" name="nome" id="inome" placeholder="Nome..." value={nome} onChange = {(event) => setNome(event.target.value)}/>
                            <Input label="Senha:" className="form-control" type="text" name="senha" id="isenha" placeholder="Senha..." value={senha} onChange = {(event) => setSenha(event.target.value)} />
                        </div>
                        <button className="btn btn-danger w-100" >Entrar</button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 bg-primary d-flex justify-content-around">
                    <img src="https://cdn.pixabay.com/photo/2019/01/28/11/56/registration-3960205_960_720.jpg" alt="Cadastro" className="w-75"/>
                </div>
                {/* <Nome obterNome={cliente} /> */}
                <p>{cliente}</p>
            </div>
        </div>
        );
    }else{
        return(
        <div className="container-fluid bg-light">
             
             <Nome obterNome={username}/>
            
             <p>{`Bem vindo ${username}`}</p>
             <MenuUsuario/>
             <button className="btn btn-danger my-5" onClick={ () => {localStorage.removeItem('@project_reactjs/username'); window.location.reload();} }>Sair</button>
             {/* <Nome obterNome={cliente} /> */}
             <p>{cliente}</p>

        </div>
        
        );
    }
}





 