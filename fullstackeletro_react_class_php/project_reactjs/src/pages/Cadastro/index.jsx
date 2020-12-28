import React from 'react';

 const Cadastro = () =>{

    const [nome, setNome] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [mensagem, setMensagem] = React.useState(false);


    function cadastro(event){
        event.preventDefault();
        console.log(event.target);


        let formData = new FormData(event.target);
        console.log("Form Data:")
        console.log(formData.get("nome"));
        console.log(formData.get("senha"));
        
        const url = "http://localhost/Recode%20Pro/GIT_fullstackeletro/fullstackeletro/fullstackeletro_react_class_php/model/MainUsuario.php";


        fetch(url,{
            method: "POST",
            body: formData
        }).then( (response) => response.json()).then((dadosValidados) =>{
            console.log(dadosValidados);
            setMensagem(true);
        })

        setTimeout( () => { setMensagem(false) },3000)


        console.log("Cadastro em andamento");
        setNome("");
        setSenha("");
    }


    return(
        <div className="container-fluid bg-light">
            <div className="row mt-3">
                <h2 className="ml-3">Cadastre-se</h2>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 bg-success d-flex justify-content-around">
                    <form className="my-5" onSubmit={cadastro}>
                        <div className="form-group">
                            <label>Nome:</label>
                            <input className="form-control" type="text" name="nome" id="inome" value={nome} onChange={(event) => setNome(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Senha:</label>   
                            <input className="form-control" type="text" name="senha" id="isenha" value={senha} onChange={(event) => setSenha(event.target.value)} />
                        </div>
                        <button className="btn btn-danger w-100" >Cadastrar</button>
                        {
                            mensagem && <div class=" d-flex alert alert-success mx-auto my-4 w-100 justify-content-around" role="alert">Cadastro efetuado!</div>
                        }  
                    </form>
                </div>
                <div className="col-12 col-sm-6 bg-primary d-flex justify-content-around">
                    <img src="https://cdn.pixabay.com/photo/2017/10/14/11/30/block-chain-2850276_960_720.jpg" alt="Cadastro" className="w-75"/>
                </div>
               
            </div>
        </div>
    );

}



export default Cadastro;


 