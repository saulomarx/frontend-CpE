import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import SearchPage from './components/searchPage'

const Styles = styled.div`
`;

class App extends Component {
  render() {
    return (
      <Styles>
        <BrowserRouter>
          <Switch>
            <Route path={'/'} component={SearchPage}/>
          </Switch>
        </BrowserRouter>
      </Styles>
    );
  }
}

export default App;
