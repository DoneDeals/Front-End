import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap'


const headerStyle = {
  fontSize: '13px',
  color: 'black',
  fontWeight: 'bold',
};

const cellStyle = {
  fontSize: '14px',
};


class PopulatedTable extends Component {
  
  render() {

    return (
      <Table>
        <thead>
          <tr>
            {this.props.columns.map(column => {
              return(
                <th key={column.header}>
                  {column.header}
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {this.props.data.map((rowData, index) => {        
            return (
              <tr key={rowData.id}>
                {this.props.columns.map((col, idx) => {
                  return (
                    <td key={col.header + '-' + rowData.id}>
                      {col.cell(rowData)}
                    </td>
                  )
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

PopulatedTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  selectable: PropTypes.bool,
};

PopulatedTable.defaultProps = {
  selectable: false,
};

export default PopulatedTable;
