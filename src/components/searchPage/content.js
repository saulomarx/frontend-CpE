import React from 'react';
import styled from 'styled-components';

const defaultDescription=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et lectus semper, sagittis augue nec, mollis metus. Phasellus fermentum nunc sed dui congue, quis iaculis dui pulvinar. Curabitur bibendum justo ut nunc porta placerat. Sed vel rhoncus tellus, vel auctor quam. Nunc velit nisi, maximus sed mattis eleifend, suscipit quis purus. Sed ultrices nisi risus, vitae hendrerit justo fermentum eget. Nunc mauris dui, pretium eu urna vitae, accumsan pharetra leo. Fusce non fermentum ipsum, non feugiat massa.

Maecenas eros justo, luctus nec lectus eu, euismod viverra arcu. Sed sagittis iaculis diam. In id mauris sed lectus cursus tempus. Quisque vulputate lacus sit amet erat luctus pharetra. Sed ullamcorper vestibulum ligula sit amet tincidunt. Morbi ultricies imperdiet orci ut pellentesque. Sed gravida mi ac quam fermentum, id feugiat nulla imperdiet. Proin at purus nec enim ornare ultrices. Etiam ultricies, tellus nec vulputate pharetra, nunc dui iaculis neque, vitae convallis elit quam et leo. Quisque neque diam, commodo nec metus sit amet, sagittis pulvinar est. Etiam volutpat laoreet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Cras ullamcorper, tellus ut molestie tempor, mi ipsum iaculis nulla, nec faucibus lorem risus sed felis. Cras molestie metus eget lorem blandit finibus. Nam mi orci, sagittis et hendrerit feugiat, euismod sit amet nulla. Sed eu interdum metus. Praesent mattis diam justo, vel suscipit leo aliquam quis. Duis at tellus at nibh cursus porttitor id vitae nunc. Phasellus et rutrum ex, vitae porta augue. Suspendisse potenti. Maecenas aliquet congue consectetur.

Quisque placerat posuere tellus, ac auctor odio porta nec. Suspendisse suscipit risus ut varius sollicitudin. Sed ac gravida nulla, in rutrum nibh. Fusce arcu turpis, porttitor sed ultricies vitae, dictum non elit. Nulla in risus gravida, pulvinar metus id, fringilla nunc. Nunc at tortor eu enim tristique hendrerit sit amet non ligula. Proin hendrerit nulla id nunc tristique, a dapibus sem mollis. Suspendisse potenti.

Suspendisse suscipit in leo id malesuada. Curabitur pulvinar lectus id velit sollicitudin molestie. Proin laoreet vel velit ac dapibus. Cras commodo augue vitae imperdiet finibus. Integer auctor vitae est non hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus sed pellentesque tortor, in feugiat felis. Integer accumsan arcu justo, id aliquet leo imperdiet eget. Vivamus aliquam metus nisi, at mattis dui malesuada sit amet. Ut vitae erat eu lectus dictum mattis. In lobortis turpis sodales odio dictum ullamcorper. Integer nec suscipit velit.

`;
const defaultTitle='Titulo';
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
    const description = selectedTerm ? selectedTerm.description:defaultDescription;
    const title = selectedTerm?selectedTerm.title:defaultTitle;
    return (
      <Styles>
        <div className='conteiner'>
          <div className='title'>{title}</div>
          <div className='description'> {description} </div>
          <div className='divisorDiv'>
            <hr className='divisor'/>
          </div>
          <div><img className='image' src={'https://dgn7v532p0g5j.cloudfront.net/unsafe/products/photos/still/MUTRI.DAYO18AR.png.1519386214503.jpeg'}/>
          </div>
        </div>
      </Styles>
    );
  }
}
