import React, { Component } from 'react';
import propTypes from 'prop-types';

import { SelectStyled } from './styles';

export default class Select extends Component {
  render() {
    const { id, itens } = this.props;
    return (
      <SelectStyled id={id}>
        {itens.map(item => (
          <option key={item.value} value={item.value}>
            {item.description}
          </option>
        ))}
      </SelectStyled>
    );
  }
}

Select.propTypes = {
  id: propTypes.string.isRequired,
  itens: propTypes.array.isRequired,
};
