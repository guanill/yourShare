import React from "react";
import {Table} from "react-bootstrap";
import { Link } from "react-router-dom";

export const DynamicTable = ({ headers, data }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  {cellIndex === 0 ? (
                    <Link to={'/borrowitem'}>{cell}</Link>
                  ) : (
                    cell
                  )}
                  </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export const DynamicTables = ({ headers, data }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DynamicTables;