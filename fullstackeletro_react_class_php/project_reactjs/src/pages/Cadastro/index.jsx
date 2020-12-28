import React from 'react';

 const Cadastro = () =>{

    return(
        <div className="container-fluid bg-light">
            <div className="row mt-3">
                <h2 className="ml-3">Cadastre-se</h2>
            </div>
            <div className="row">
                <div className="col bg-success d-flex justify-content-around">
                    <form className="my-5">
                        <div className="form-group">
                            <label>Nome:</label>
                            <input type="text" name="nome" id="inome" value="" />
                        </div>
                        <div className="form-group">
                            <label>Senha:</label>   
                            <input type="text" name="senha" id="isenha" value="" />
                        </div>
                    </form>
                </div>
                <div className="col bg-primary">

                </div>
            </div>
        </div>
    );

}



export default Cadastro;


 