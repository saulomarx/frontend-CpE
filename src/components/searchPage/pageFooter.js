import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const Styles = styled.div`
  .footer {
    border-bottom: 2px solid rgb(237, 234, 233);
    padding: 0px 30px;
    display: flex;
    background-color: #CBC5BE;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    justify-content: space-around;
  }

  .footer-left, .footer-left > div {
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
    fill: rgb(255,255,255);
  }

  .iconDiv {
    float: left;
    margin-left: 15px;
  }

  .text {
    color: white;
    padding-top: 1vh;
    text-align: center;
    vertical-align: middle;
    padding-top: 1.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }


`;


export default class PageFooter extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <Styles>
        <footer className='footer'>
          <div className="footer-left">
            <div className="logo">
              Logo
            </div>
          </div>
          <div className='text'>
            <div>TEXTO</div>
            <div>Texto </div>
          </div>
          <div className='text'>
            <div className='iconDiv'>
              Ico
              </div>
            <div className='iconDiv'>
              Ico
            </div>
            <div className='iconDiv'>
              Ico
            </div>
          </div>
        </footer>
      </Styles>
    );
  }
}
