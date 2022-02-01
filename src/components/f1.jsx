import { round } from '@popperjs/core/lib/utils/math';
import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import uuid from 'react-uuid';
class f1 extends React.Component {
  constructor(props) {
    super(props);
    this.card = '';
    this.state = {
      selectedItem: '',
      tableData: [],
      //He añadido estas dos variables porque no consegui sacarlas a partir de selectedItem en el card
      circuito: '',
      ganador: '',
    };
  }
  changeSelected = (item) => {
    this.setState({
      selectedItem: item,
      circuito: item.Circuit,
      ganador: item.Results[0].Driver,
    });
  };
  async componentDidMount() {
    const response = await fetch(
      'https://ergast.com/api/f1/2021/results/1.json'
    );
    const responseData = await response.json();

    this.setState({
      tableData: responseData['MRData']['RaceTable']['Races'],
      selectedItem: responseData['MRData']['RaceTable']['Races'][0],
      circuito: responseData['MRData']['RaceTable']['Races'][0]['Circuit'],
      ganador:
        responseData['MRData']['RaceTable']['Races'][0]['Results'][0]['Driver'],
    });
  }
  render() {
    return (
      <div className="main-site">
        <h1>F1 temporada 2021</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr key={uuid()}>
                    <th>Nº Gran Premio</th>
                    <th>Nombre Carrera</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Circuito</th>
                    <th>Localidad</th>
                    <th>País</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.round}</td>
                        <td>{item.raceName}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.Circuit.circuitName}</td>
                        <td>{item.Circuit.Location.locality}</td>
                        <td>{item.Circuit.Location.country}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Title>{this.state.selectedItem.raceName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Circuito: {this.state.circuito.circuitName}
                  </Card.Subtitle>
                  <Card.Text>
                    El ganador 🏆 fue {this.state.ganador.givenName}{' '}
                    {this.state.ganador.familyName}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default f1;
