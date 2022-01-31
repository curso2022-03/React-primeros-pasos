import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { DatosLogin } from '../data/DatosLogin';
import { Link } from 'react-router-dom';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numUsuario: -1,
    };
  }

  componentDidMount() {
    for (let i = 0; i < DatosLogin.length; i++) {
      if (
        (DatosLogin[i].usuario === localStorage.getItem('user') ||
          DatosLogin[i].email === localStorage.getItem('user')) &&
        DatosLogin[i].contraseña === localStorage.getItem('password')
      ) {
        this.setState({ numUsuario: i });
      }
    }
  }
  onClickCerrarSesion() {
    localStorage.clear(); //Para borrar uno concreto removeitem
  }

  render() {
    if (this.state.numUsuario == -1) {
      return (
        <div className="main-site">
          <h1> Pagina de Perfil</h1>
          <h3>Para ver algo tienes que iniciar sesion</h3>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1> Pagina de Perfil</h1>
          <Card style={{ width: '23rem' }}>
            <Card.Img
              variant="top"
              src={DatosLogin[this.state.numUsuario].avatar}
            />
            <Card.Body>
              <Card.Title>
                Usuario: {DatosLogin[this.state.numUsuario].usuario}
              </Card.Title>
              <Card.Text>
                📧 Email: {DatosLogin[this.state.numUsuario].email}
                <br />
                📞 Teléfono: {DatosLogin[this.state.numUsuario].telefono}
                <br />
                📱 Móvil: {DatosLogin[this.state.numUsuario].movil}
              </Card.Text>
              <Link to="/">
                <Button
                  variant="primary"
                  type="button"
                  onClick={this.onClickCerrarSesion.bind(this)}
                >
                  Cerrar sesión
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
}
export default Perfil;
