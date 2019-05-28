import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    height: calc(100vh - 161px);
    overflow-y: auto;

    .conteiner {
      padding-left: 160px;
      padding-right: 1  60px;
      padding-top: 50px;
    }

    .title {
      font-size: 32px;
      font-weight: 400;
      font-style: italic;
      margin-right: 20px;
      color: #333;
      margin-bottom: 30px;
    }

    .description {
      font-size: 17px;
      font-weight: 400;
      color: #666;
      padding-bottom: 30px;
    }
    .svg {
      stroke:#D3D3D3;
      stroke-width:10;
    }
    .divisor {
      width: 30%;
      float: left;
      display: block;
    }

    .divisorDiv {
      display: inline-block;
      width: 100%
      height:30px
    }

    .image {
      width: 670px;
   }

`;

export default class Content extends React.Component {
  render() {
    const { selectedTerm } = this.props;
    console.log(selectedTerm);
    // const cnpq, nome, nome_cit, nacionalidade, uf_nasc, falecido, resumo; ;
    const description = selectedTerm ? selectedTerm.description: '';
    const cnpq = selectedTerm ? selectedTerm.cnpq : '';
    const nome = selectedTerm ? selectedTerm.nome : '';
    const nome_cit = selectedTerm ? selectedTerm.nome_cit : '';
    const nacionalidade = selectedTerm ? selectedTerm.nacionalidade : '';
    const uf_nasc = selectedTerm ? selectedTerm.uf_nasc : '';
    const resumo = selectedTerm ? selectedTerm.resumo : '';
    // [{"id","cnpq","nome","nome_cit","nacionalidade","uf_nasc","falecido","resumo"]
    return (

      <Styles>
        <div className='conteiner'>
          { selectedTerm != null &&
          <span>
            <div className='description'> <b>None:</b> {nome} </div>
            <div className='description'> <b>Nome de Citação:</b> {nome_cit} </div>
            <div className='description'> <b>Lattes:</b> <a href={`http://lattes.cnpq.br/${cnpq}`} target="_blank">{cnpq}</a> </div>
            <div className='description'> <b>Nacionalidade:</b> {nacionalidade} </div>
            <div className='description'> <b>Estado de Nascimento:</b> {uf_nasc} </div>
            <div className='description'> <b>Resumo:</b> {resumo} </div>

            <div className='divisorDiv'>
              <hr className='divisor'/>
            </div>
          </span>
          }
        </div>
      </Styles>
    );
  }
}
