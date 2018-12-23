import styled from 'styled-components';

const getWidthString = (span) => {
  if(!span) return;
    let width = span/12*100;
    return `width: ${width}%`;

}

export const Container = styled.div`
  width: 100%;
  display: block;
  clear: both;
`;

export const Row = styled.div`
  &::after{
    content='';
    clear='both';
    display='table';
  }
`;

export const Column = styled.div`
  float: left;
  width: 100%;
  background: #ccc;
  > p{
    border: 1px solid #666;
    padding: 5px;
    margin: 2px;
  }

  ${({xs})=>( xs ? getWidthString(xs) : 'width:100%')}

  @media only screen and (min-width: 768px){
    ${({sm}) =>  sm && getWidthString(sm) };
  }
  @media only screen and (min-width: 992px){
    ${({md}) => md && getWidthString(md)};
  }
  @media only screen and (min-width: 1200px){
    ${({lg}) => lg && getWidthString(lg)};
  }
`;

/*
 @media only screen and (min-width: 768px){
   width:${props => (props.span ? props.span /12*100 : '8.33')}%;
 }
*/
