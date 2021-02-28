import React from 'react';

const ListField = ({ record, source }) => (
  <ul>
      {record[source].map(item => (
          <li key={item}>{item}</li>
      ))}
  </ul>
)
ListField.defaultProps = {
  addLabel: true
};

export default ListField;