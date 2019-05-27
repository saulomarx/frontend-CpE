import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .header {
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 100px;
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
    height: 100px;
    fill: rgb(128,108,92);
  }
`;

const batata = styled.div`
  background:blue;
`


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
                <a href="http://cienciaparaeducacao.org">
                    <img src="http://www.cienciaparaeducacao.hospedagemdesites.ws/wp-content/uploads/2015/06/rede2.png" alt="Logo: Ciência para Educação"/>
                </a>
            </div>
          </div>
        </header>
      </Styles>
    );
  }
}
