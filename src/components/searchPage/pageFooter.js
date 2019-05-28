import React from 'react';
import styled from 'styled-components';
// import 'font-awesome/css/font-awesome.min.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebookF, faEnvelope, faPhone)

const Styles = styled.div`
  .footer {
    border-bottom: 0px solid rgb(237, 234, 233);
    padding: 0px 30px;
    display: flex;
    background-color: #272727;
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

  .logo > a {
    background: #EEE;
    border-radius: 4px;
  }

  .iconDiv {
    float: left;
    margin-left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #0d70bc;
    transform: translateY(-60%);
  }

  .iconDiv a  {
    z-index: 100;
    font-size: 30px;
    width: 100%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    color: #EEE;
    border-radius: 50%;
  }

  .text {
    color: white;
    padding-top: 1vh;
    text-align: center;
    transform: translateY(40%);
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
                <a href="https://www.institutoayrtonsenna.org.br" target="_blank">
                    <img src="https://www.institutoayrtonsenna.org.br/etc/designs/institutoayrtonsenna/clientlib-home/Content/img/random-icons/logo-1.png" alt="Logo: Instituto Ayrton Senna"/>
                </a>
            </div>
          </div>
          <div className='text'>
            <div>Copyright 2019 © Rede CpE. Todos os direitos reservados. </div>
          </div>
          <div className='text'>
            <div className='iconDiv'>
              <a href="https://www.facebook.com/RedeCpE/" target="_blank">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
            </div>
            <div className='iconDiv'>
              <a href="mailto:contato@cienciaparaeducacao.org">
                <FontAwesomeIcon icon="envelope" />
              </a>
            </div>
            <div className='iconDiv'>
              <a href="tel:+552138836000" target="_blank">
                <FontAwesomeIcon icon="phone" />
              </a>
            </div>
          </div>
        </footer>
      </Styles>
    );
  }
}
