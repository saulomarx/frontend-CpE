import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import qs from 'qs';

// Awesome fonts
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faTimesCircle)

const Styles = styled.div`

  .left {
    border-right: #EDEDED solid 1px;
    background-color: #0C5895;
    // height: 90px
    // padding: 10px;
  }

  .input {
    width: 90%;
    font-size: 17px;
    color: black;
    background: transparent;
    border: 0;
    padding-left: 10px;
  }

  input:focus {
    outline-width: 0;
  }

  .box {
    border-radius: 4px;
    padding: 5px;
    background: #0C5895;
  }

  .filterDiv {
    width: 80%;
    float: center;
    background-color: #F3F1F0;
    border-radius: 4px;
    padding: 6px;
    margin: 0 auto;
    // top: 50%;
    // -ms-transform: translateY(16%);
    // transform: translateY(16%);
  }


  .list {
    overflow-y: auto;
    height: calc(100vh - 750px);
    font-family: Lato,sans-serif;
    background-color: #e5e5e5;

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
    color: #666;
    background: transparent;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;
  }

  .unselectedCell:hover {
    background-color: #3A9BE4;
    color: #252424;
  }


  .selectedCell {
    color: white;
    background: #0D70BC;
  }

  .left .filter {
    width: 288px;
    padding: 30px;
  }

  .clear {
    float: right;
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
    const terms = event.target.value ? await axios.get(`http://localhost:9080/pesquisadores/advanced?${qs.stringify(filter)}`)
    .then(res => res.data)
    .catch(() => []): [];
    this.setState({ terms });
  }

  clearSearchField(){
    this.setState({ selectedTerm: null });
    this.setState({ searchTerm: '' })
  }


  render() {
    const { searchTerm } = this.state;
    return (
      <Styles>
        <div className='left'>
          <div className="box">
            <div className='filterDiv'>
              <span><FontAwesomeIcon icon="search" /></span>
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
                  <FontAwesomeIcon icon="times-circle"/>
                </span>
              }
            </div>
          </div>
          { searchTerm.length > 0 &&
            <span>
              <div className='list'>{this.renderTerms()}</div>
            </span>
          }
        </div>
      </Styles>
    );
  }
}

export default FilterList;
