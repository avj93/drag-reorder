import React, { PureComponent } from 'react';
import './styles.css';

const Row = (props) => {
  const { program_id, program_displayName, program_displayLongName, orderNumb, lorem } = props.row;

  return (
    <tr>
      <td>{program_id}</td>
      <td>{program_displayName}</td>
      <td>{program_displayLongName}</td>
      <td>{orderNumb}</td>
      <td>{lorem}</td>
      </tr>
  );
}

const Rows = ({ rows }) => (
  rows.map((row, index) => <Row key={row.program_id} row={row} index={index} />)
);

export default class MetricTable extends PureComponent {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>{"program_id"}</th>
            <th>{"program_displayName"}</th>
            <th>{"program_displayLongName"}</th>
            <th>{"orderNumb"}</th>
            <th>{"lorem"}</th>
          </tr>
        </thead>
        <tbody>
          <Rows rows={this.props.metricDetails} />
        </tbody>
      </table>
    );
  }
}
