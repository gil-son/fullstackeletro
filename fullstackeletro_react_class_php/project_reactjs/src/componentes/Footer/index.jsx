//Dependências e libs
import React from 'react';

//Componentes

//css, img etc
import './style.css';


class Footer extends React.Component {
    render() {
        return (
            
                <div className="container-fluid bg-danger text-light rodape mt-1">
                    <div className="row justify-content-around">
                        <p id="formas_pagamento">Formas de pagamento</p>
                    </div>
                    <div className="row justify-content-around">
                        <p>&copy; Recode Pro</p>
                    </div>
                </div>
            
        );
    }
}

export default Footer;