// 9. Create a JSX table with 3 rows and 2 columns.

import React from 'react';

const SimpleTable = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td>Developer</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>Designer</td>
        </tr>
        <tr>
          <td>Charlie</td>
          <td>Manager</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SimpleTable;
