import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { DatosLogin } from '../data/DatosLogin';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      done: true,
    };
    this.login = this.login.bind(this);
    this.usuarioIntroducido = React.createRef();
    this.contraseñaIntroducida = React.createRef();
    this.claseLista = '';
  }

  login() {
    for (let i = 0; i < DatosLogin.length; i++) {
      if (
        (DatosLogin[i].usuario === this.usuarioIntroducido.current.value ||
          DatosLogin[i].email === this.usuarioIntroducido.current.value) &&
        DatosLogin[i].contraseña === this.contraseñaIntroducida.current.value
      ) {
        this.setState({
          user: this.usuarioIntroducido.current.value,
          password: this.contraseñaIntroducida.current.value,
          done: true,
        });
      } else {
        this.setState({
          done: false,
        });
      }
    }
  }
  setElementClass() {
    if (this.state.done) {
      this.claseLista = '';
    } else {
      this.claseLista = 'is-invalid';
    }
  }
  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }
  render() {
    this.setElementClass();
    if (
      this.state === null ||
      this.state.user === null ||
      this.state.user === '' ||
      this.state.user === 'null'
    ) {
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
                  className={this.claseLista}
                />
                <Form.Control.Feedback type="invalid">
                  Introduce un usuario o email valido
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  ref={this.contraseñaIntroducida}
                  className={this.claseLista}
                />
                <Form.Control.Feedback type="invalid">
                  Introduce una contraseña valida
                </Form.Control.Feedback>
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
    } else {
      return <h1>Bienvenido {this.state.user}!</h1>;
    }
  }
  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
  }
}
export default Home;
