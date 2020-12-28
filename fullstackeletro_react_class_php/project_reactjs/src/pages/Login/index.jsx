import React from 'react';






 const Input = ({label, ...props}) =>{

    return(
        <>
            <label>{label}</label>
            <input {...props} className="form-control"/>
        </>
    );

}


function Login(){
    const [nome, setNome] = React.useState("");
    const [senha, setSenha] = React.useState("");
   
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
        }) 
        
    }

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
           
        </div>
    </div>



    );
}


export default Login;


 