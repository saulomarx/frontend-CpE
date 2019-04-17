import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FilterList from './filterList';
import PageHeader from './pageHeader';
import Content from './content';
import PageFooter from './pageFooter';

const { REACT_APP_API_URL } = process.env;
const Styles = styled.div`
`;

class Dictionary extends Component {
  constructor() {
    super();
    this.state = {
      terms: [],
      selectedTerm: null,
      pesquisador: null,
    };
  }

  async selectTerm(term){
    const pesquisador = await axios.get(`http://localhost:9080/pesquisadores/${term.id}`)
    .then(res => res.data)
    .catch(() => []);
    this.setState({ selectedTerm: pesquisador[0] });

  }

  async componentWillMount() {
    const terms = [];
    console.log(terms);
    this.setState({ terms });
  }
  render() {
    const { selectedTerm, pesquisador } = this.state;
    return (
      <Styles>
        <PageHeader/>
        <FilterList
          terms={this.state.terms}
          selectTerm={term =>this.selectTerm(term)}
          selectedTerm={selectedTerm}
        />
        <Content selectedTerm={selectedTerm}/>
        <PageFooter/>
      </Styles>
    );
  }
}

export default Dictionary;
