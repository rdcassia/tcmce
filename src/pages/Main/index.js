import React, { Component } from 'react';

import apiTcm from '../../services/apitcm';

import Title from '../../components/Title';

import { Container } from './styles';

import Select from '../../components/Select';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      municipios: [],
    };
  }

  async componentDidMount() {
    const { data } = await apiTcm.get('/municipios');

    const municipios = data.map(({ codigo_municipio, nome_municipio }) => ({
      value: codigo_municipio,
      description: nome_municipio,
    }));

    this.setState({ municipios });
  }

  render() {
    const { municipios } = this.state;

    return (
      <Title />
      // <Container>
      //   <h1>Municipios</h1>
      //   <Select id="municipios" itens={municipios} />
      // </Container>
    );
  }
}
