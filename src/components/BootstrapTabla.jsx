import React from 'react';
import { CabeceraTabla, ContenidoTabla } from '../data/ContenidoTabla';
import { Table, Card, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import uuid from 'react-uuid';
class BootstrapTabla extends React.Component {
  constructor(props) {
    super(props);
    this.card = '';
    this.state = {
      dia: 0,
    };
  }
  setTarjeta() {
    this.card = (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ContenidoTabla[this.state.dia].imagen} />
        <Card.Body>
          <Card.Title>
            {ContenidoTabla[this.state.dia].dia}{' '}
            {ContenidoTabla[this.state.dia].tiempo}
          </Card.Title>
          <Card.Text>
            temperatura: {ContenidoTabla[this.state.dia].temperatura}
            viento: {ContenidoTabla[this.state.dia].viento}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  cambiaTarjeta(pulsado) {
    if (pulsado === 'Lunes') {
      this.setState({ dia: 0 });
    } else if (pulsado === 'Martes') {
      this.setState({ dia: 1 });
    } else if (pulsado === 'Miercoles') {
      this.setState({ dia: 2 });
    } else if (pulsado === 'Jueves') {
      this.setState({ dia: 3 });
    } else if (pulsado === 'Viernes') {
      this.setState({ dia: 4 });
    } else if (pulsado === 'Sabado') {
      this.setState({ dia: 5 });
    } else if (pulsado === 'Domingo') {
      this.setState({ dia: 6 });
    }
  }
  render() {
    this.setTarjeta();
    return (
      <Container>
        <Row>
          <Col lg={8} md={6}>
            <Table responsive>
              <thead>
                <tr>
                  {CabeceraTabla.map((item) => {
                    return <th key={uuid()}>{item}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {ContenidoTabla.map((item) => {
                  return (
                    <tr
                      key={uuid()}
                      onClick={() => this.cambiaTarjeta(item.dia)}
                    >
                      <td>{item.dia}</td>
                      <td>{item.tiempo}</td>
                      <td>{item.temperatura}</td>
                      <td>{item.viento}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col lg={4} md={6}>
            {this.card}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BootstrapTabla;
