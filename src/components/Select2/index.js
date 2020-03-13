import React, { Component } from 'react';
import propTypes from 'prop-types';

import { Select } from './styles';

export default class Select2 extends Component {
  render() {
    const { id, itens } = this.props;
    return (
      <Select id={id}>
        {itens.map(item => (
          <option key={item.value} value={item.value}>
            {item.description}
          </option>
        ))}
      </Select>
    );
  }
}

Select2.propTypes = {
  id: propTypes.string.isRequired,
  itens: propTypes.array.isRequired,
};
