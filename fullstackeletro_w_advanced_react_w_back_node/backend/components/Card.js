//Dependências e libs
import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';


export default class CardDepoimento extends React.Component {
    render() {
        return (
            
            <CardGroup>
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/01/24/16/20/girl-5945632_960_720.jpg" className="border rounded w-50 mx-auto mt-2 shadow"/>
              <Card.Body>
                <Card.Title>Carol</Card.Title>
                <Card.Text>
                  Ai gente?! Bem que podia ter mais cores. Fora isso tá incrível.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 1 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/07/07/21/45/view-834961_960_720.jpg" className="border rounded w-50 mx-auto mt-2"/>
              <Card.Body>
                <Card.Title>Flores Aparecida</Card.Title>
                <Card.Text>
                  Amei !!! Só produto de qualidade!!! Bem que podia vender flores
                  {' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/08/02/11/13/mask-3579320_960_720.jpg" className="border rounded w-50 mx-auto mt-2"/>
              <Card.Body>
                <Card.Title>Anonymous</Card.Title>
                <Card.Text>
                    0327d4c3a5ce736c2371c9228f812269
                </Card.Text>
              </Card.Body>
              <Card.Footer> 
                <small className="text-muted">Last updated 5 days ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
            
        );
    }
}