import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .header {
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    background-color: #1a1a1a;
    height: 59px;
  }

  .header-left, .header-left > div {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    padding: 10px 25px 10px 0px;
    text-transform: uppercase;
    font-size: 14px;
    color: rgb(67, 62, 102);
  }

  .logo {
    width: 140px;
    fill: rgb(128,108,92);
  }
`;


export default class PageHeader extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <Styles>
        <header className="header">
          <div className="header-left">
            <div className="logo">
              LOGO
            </div>
          </div>
        </header>
      </Styles>
    );
  }
}
