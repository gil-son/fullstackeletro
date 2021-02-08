import React from 'react'; 
import {Carousel} from 'react-bootstrap';


// Componentes


export class CarrosselProdutos extends React.Component{

    render(){
        return(

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto"  
                src="https://images-americanas.b2w.io/produtos/01/00/img/1371035/9/1371035915_1GG.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="bg-light text-dark rounded-pill shadow">Geladeira!!!</h3>
                <p className="bg-light text-dark rounded-pill shadow">Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto"
                src="https://images-americanas.b2w.io/produtos/01/00/img/158987/5/158987562_1GG.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="bg-light text-dark rounded-pill shadow">Fogão!!!</h3>
                <p className="bg-light text-dark rounded-pill shadow ">Fogão de Piso Mesa de Vidro Electrolux 5</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto"
                src="https://images-americanas.b2w.io/produtos/01/00/img/113998/2/113998225_1GG.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="bg-light text-dark rounded-pill shadow">Microondas!!!</h3>
                <p className="bg-light text-dark rounded-pill shadow">Microondas 25L Espelhado Pme25 Philco 127V</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


 

        );
    }
}