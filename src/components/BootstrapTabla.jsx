import React from 'react';
import { CabeceraTabla, ContenidoTabla } from '../data/ContenidoTabla';
import { Table, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
class BootstrapTabla extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            {CabeceraTabla.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {ContenidoTabla[0].map((item) => {
              return <td>{item}</td>;
            })}
          </tr>
          <tr>
            {ContenidoTabla[1].map((item) => {
              return <td>{item}</td>;
            })}
          </tr>
          <tr>
            {ContenidoTabla[2].map((item) => {
              return <td>{item}</td>;
            })}
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default BootstrapTabla;
