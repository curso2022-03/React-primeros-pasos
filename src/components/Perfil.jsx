import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { DatosLogin } from '../data/DatosLogin';
class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numUsuario: 0,
    };
  }
  /** 
  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }
  setNumUsuario() {
    for (let i = 0; i < DatosLogin.length; i++) {
      if (
        DatosLogin[i].usuario === localStorage.getItem('user') ||
        (DatosLogin[i].email === localStorage.getItem('user') &&
          DatosLogin[i].contraseña === localStorage.getItem('password'))
      ) {
        this.setState({
          numUsuario: i,
        });
      }
    }
  }
  */

  render() {
    return (
      <div className="main-site">
        <h1> Pagina de Perfil</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>
              Usuario: {DatosLogin[this.state.numUsuario].usuario}
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Perfil;
