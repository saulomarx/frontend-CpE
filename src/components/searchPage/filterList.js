import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import qs from 'qs';

const Styles = styled.div`

  .left {

    border-right: #EDEDED solid 1px;
  }

  .input {
    width: 85%;
    font-size: 17px;
    color: #988;
    background: transparent;
    border: 0;
    padding-left: 10px;
  }

  input:focus {
    outline-width: 0;
  }

  .filterDiv {
    background-color: #F3F1F0;
    border-radius: 4px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 12px;
    margin-right: 12px;
  }

  .list {
    overflow-y: auto;
    height: calc(100vh - 750px);
    font-family: Lato,sans-serif;

  }

  .cellContent  {
    font-size: 17px;
    margin-left: 10px;
    border-bottom: 1px solid #EDEDED;
    height: 6vh;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .selectedCellContent {
    font-size: 17px;
    margin-left: 10px;
    border-bottom: 1px solid transparent;
    height: 6vh;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .unselectedCell {
    height: 6vh;
    color: #AFA297;
    background: transparent;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;

  }

  .unselectedCell:hover {
    background-color: rgba(179, 167, 156, 0.21);
  }


  .selectedCell {
    color: #FFFFFF;
    background: #B3A79C;
  }

  .left .filter {
    width: 288px;
    padding: 30px;
  }

  .clear {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
  }

  @keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

`;

class FilterList extends Component {

  constructor() {
    super();
    this.state = {
      searchTerm: '',
      terms: []
    };
  }

  renderTerms(){
    const { searchTerm, terms } = this.state;
    const { selectTerm, selectedTerm } = this.props;
    return terms
      .map((term, i) =>
        <div className={selectedTerm && selectedTerm.id === term.id ?'selectedCell':'unselectedCell'} key={term.id} onClick={()=>selectTerm(term)}>
          <div className={selectedTerm && selectedTerm.id === term.id ?'selectedCellContent':'cellContent'} key={term.id}>
            {term.nome}
          </div>
        </div>)
  }

  async handleChange(event){
    this.setState({ searchTerm: event.target.value })
    const filter = { nome: event.target.value };
    const terms = event.target.value ? await axios.get(`http://localhost:9080/pesquisadores?${qs.stringify(filter)}`)
    .then(res => res.data)
    .catch(() => []): [];
    this.setState({ terms });
  }

  clearSearchField(){
    this.setState({ searchTerm: '' })
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <Styles>
        <div className='left'>
          <div className='filterDiv'>
            <span><i className="fa fa-search"/></span>
            <span>
              <input
                className='input'
                type="text"
                placeholder='Procurar Termo'
                value={searchTerm}
                onChange={this.handleChange.bind(this)}
              />
            </span>
            { searchTerm.length > 0 &&
              <span className="clear" onClick={this.clearSearchField.bind(this)}>
                <i className="fa fa-times-circle fa-sm"/>
              </span>
            }
          </div>
          <div className='list'>{this.renderTerms()}</div>
        </div>
      </Styles>
    );
  }
}

export default FilterList;
