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
    };
  }
  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };
  async componentDidMount() {
    const response = await fetch('https://ergast.com/api/f1/2021.json');
    const responseData = await response.json();
    this.setState({
      tableData: responseData.RaceTable.Races,
      selectedItem: responseData.RaceTable.Races[0],
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
                        <td>{item.Circuit.circuitName}</td>
                        <td>{item.Location.locality}</td>
                        <td>{item.Location.country}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              {/**}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.image} />
                <Card.Body>
                  <Card.Title>{this.state.selectedItem.title}</Card.Title>
                  <Card.Text>
                    Titulo original: {this.state.selectedItem.original_title}
                    <br />
                    Director:{this.state.selectedItem.director}
                    <br />
                    Argumento:{this.state.selectedItem.description}
                  </Card.Text>
                </Card.Body>
              </Card>
                {*/}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default f1;
