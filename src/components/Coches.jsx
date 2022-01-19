import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaCoches, DatosTablaCoches } from '../data/DatosCoches';
import uuid from 'react-uuid';
class Coches extends React.Component {
  constructor(props) {
    super(props);
    this.card = '';
    this.state = {
      coche: 0,
    };
  }
  setTarjeta() {
    this.card = (
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={DatosTablaCoches[this.state.coche].imagen}
        />
        <Card.Body>
          <Card.Title>
            {DatosTablaCoches[this.state.coche].marca}{' '}
            {DatosTablaCoches[this.state.coche].modelo}
          </Card.Title>
          <Card.Text>
            Matrícula: {DatosTablaCoches[this.state.coche].matricula}
            <p />
            {DatosTablaCoches[this.state.coche].descripción}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  cambiaTarjeta(pulsado) {
    for (let i = 0; i < DatosTablaCoches.length; i++) {
      if (pulsado == DatosTablaCoches[i].matricula) {
        this.setState({ coche: i });
        break;
      }
    }
  }
  render() {
    this.setTarjeta();
    return (
      <div className="main-site">
        <h1>Coches</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr key={uuid()}>
                    <th>{TitulosTablaCoches.id}</th>
                    <th>{TitulosTablaCoches.field1}</th>
                    <th>{TitulosTablaCoches.field2}</th>
                    <th>{TitulosTablaCoches.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaCoches.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.cambiaTarjeta(item.matricula)}
                      >
                        <td>{item.matricula}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.color}</td>
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
      </div>
    );
  }
}
export default Coches;
