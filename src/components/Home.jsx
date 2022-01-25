import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
    this.login = this.login.bind(this);
    this.usuarioIntroducido = React.createRef();
    this.contraseñaIntroducida = React.createRef();
  }

  login() {
    this.setState({
      user: this.usuarioIntroducido.current.value,
      password: this.contraseñaIntroducida.current.value,
    });
  }

  render() {
    if (
      this.state !== null &&
      this.state.user !== null &&
      this.state.user !== ''
    ) {
      return (
        <div className="main-site">
          <h1> Bienvenido! {this.state.user}</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1> Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario o email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Usuario"
                  ref={this.usuarioIntroducido}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  ref={this.contraseñaIntroducida}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                onClick={this.login.bind(this)}
              >
                Login
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}
export default Home;
