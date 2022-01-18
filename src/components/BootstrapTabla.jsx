import React from 'react';
import { ContenidoTabla } from '../data/ContenidoTabla';
import { Table } from 'react-bootstrap';
class BootstrapTabla extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            {ContenidoTabla[0].map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
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
          <tr>
            {ContenidoTabla[3].map((item) => {
              return <td>{item}</td>;
            })}
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default BootstrapTabla;
