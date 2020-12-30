import React from 'react';
import {Modal, Button} from 'react-bootstrap';

 const Cadastro = () =>{

    // Form

    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");


    const [cep, setCep] = React.useState("");
    const [logradouro, setLogradouro] = React.useState("");
    const [complemento, setComplemento] = React.useState("");
    const [uf, setUf] = React.useState("");



    // Modal

    const [show, setShow] = React.useState(false);
    // const handleClose = () => React.setShow(false);
    // const handleShow = () => React.setShow(true);



    // Mensagem de Confirmação de Cadastro
    const [mensagem, setMensagem] = React.useState(false);

    
    async function getCep(event){
                   
        console.log(event.target.value.length);
        if(event.target.value.length === 8){
            setCep(event.target.value);

            // url da API
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            
            const response = await fetch(url);
            const dados = await response.json();

            
            //modo 1
                //document.getElementById('ilogradouro').value = dados.logradouro;
            //modo 2
                setLogradouro(dados.logradouro);
                setComplemento(dados.complemento);
                setUf(dados.uf);
        }
    }



    function cadastro(event){
        event.preventDefault();
        console.log(event.target);


        let formData = new FormData(event.target);
        console.log("Form Data:")
        console.log(formData.get("nome"));
        console.log(formData.get("senha"));

        if(formData.get("nome").length > 2){
        
        const url = "http://localhost/Recode%20Pro/GIT_fullstackeletro/fullstackeletro/fullstackeletro_react_class_php/model/MainUsuario.php";


        fetch(url,{
            method: "POST",
            body: formData
        }).then( (response) => response.json()).then((dadosValidados) =>{
            console.log(dadosValidados);
            setMensagem(true);

            if(dadosValidados){
                console.log("Cadastro Realizado");
            }
        })

        setTimeout( () => { setMensagem(false) },3000)


        
        setNome("");
        setSenha("");

    }else{
        // alert("Todos o Campos precisam ter no mínimo 3 caracteres!");

        setShow(true);


    }


    }


    return(
        <div className="container-fluid bg-light">
            <div className="row mt-3">
                <h2 className="ml-3">Cadastre-se</h2>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 bg-success d-flex justify-content-around">
                    <form className="my-5 w-100" onSubmit={cadastro}>
                        <fieldset> <legend> Sobre </legend>
                            <div className="form-group">
                                <label>Nome:</label>
                                <input className="form-control" type="text" name="nome" id="inome" value={nome} onChange={(event) => setNome(event.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>E-mail:</label>
                                <input className="form-control" type="text" name="email" id="iemail" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Senha:</label>   
                                <input className="form-control" type="text" name="senha" id="isenha" value={senha} onChange={(event) => setSenha(event.target.value)} />
                            </div>
                        </fieldset>
                        <fieldset> <legend>Endereço</legend>
                       
                            <div class="row my-1">
                                <div class="col">
                                    <input type="text" id="icep"  class="form-control" placeholder="CEP..." onChange={getCep}/>
                                </div>
                                <div class="col">
                                    <input type="text" id="ilogradouro" value={logradouro} class="form-control" placeholder="Logradouro..." onChange={(event) => setLogradouro(event.target.value)}/>
                                </div>
                            </div>
                            <div class="row my-1">
                                <div class="col">
                                    <input type="text" id="icomplemento" value={complemento} class="form-control" placeholder="Complemento..."/>
                                </div>
                                <div class="col">
                                    <input type="text" id="iuf" value={uf} class="form-control" placeholder="UF..."/>
                                </div>
                            </div>


                        </fieldset>

                        <button className="btn btn-danger w-100">Cadastrar</button>
                        {
                            mensagem && <div class=" d-flex alert alert-success mx-auto my-4 w-100 justify-content-around" role="alert">Cadastro efetuado!</div>
                        }  
                    </form>

                    {/* <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">

                    
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Modal Header</h4>
                                </div>
                                <div class="modal-body">
                                <p>Some text in the modal.</p>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                         </div>
                    </div> */}



                    







                </div>
                <div className="col-12 col-sm-6 bg-primary d-flex justify-content-around">
                    <img src="https://cdn.pixabay.com/photo/2017/10/14/11/30/block-chain-2850276_960_720.jpg" alt="Cadastro" className="w-75"/>
                </div>
               
            </div>
            <div className="row">

                    
                    <>
                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Atenção!
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <p>
                                Os Campos precisam ter o mínimo de 3 caracteres!
                            </p>
                            </Modal.Body>
                            <Button variant="danger" size="sm" onClick={() => setShow(false)}>
                                Entendi
                            </Button>
                        </Modal>
                        </>
                
            </div>
        </div>
    );

}



export default Cadastro;


 