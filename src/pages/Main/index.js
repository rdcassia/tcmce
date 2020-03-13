import React, { Component } from 'react';

import apiTcm from '../../services/apitcm';

import { Container } from './styles';

import Select2 from '../../components/Select2';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      municipios: [],
    };
  }

  async componentDidMount() {
    const { data } = await apiTcm.get('/municipios');
    this.setState({ municipios: data });
  }

  render() {
    const municipios = this.state.municipios.map(
      ({ codigo_municipio, nome_municipio }) => ({
        value: codigo_municipio,
        description: nome_municipio,
      })
    );

    return (
      <Container>
        <h1>Municipios</h1>
        <Select2 id="municipios" itens={municipios} />
      </Container>
    );
  }
}
