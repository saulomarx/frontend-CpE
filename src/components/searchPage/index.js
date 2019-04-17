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
    };
  }
  
  selectTerm(term){
    this.setState({ selectedTerm: term });
  }

  async componentWillMount() {
    const terms = await axios.get(`http://localhost:9080/pesquisadores/`)
    .then(res => res.data)
    .catch(() => []);
    console.log(terms);
    this.setState({ terms });
  }

  render() {
    const { selectedTerm } = this.state;
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
