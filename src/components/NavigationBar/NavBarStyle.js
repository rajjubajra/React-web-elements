import styled from 'styled-components';

const getWidthString = (span) => {
  if(!span) return;
    let width = span/12*100;
    return `width: ${width}%`;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0px auto;
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

export const MobileWidth = 768;
export const TableWidth = 992;
export const DesktopWidth = 1200;

export const Column = styled.div`
  float: left;
  width: 100%;

  > p{
    border: 1px solid #666;
    padding: 5px;
    margin: 2px;
  }

  ${({xs})=>( xs ? getWidthString(xs) : 'width:100%')}

  @media only screen and (min-width: ${MobileWidth}px){
    ${({sm}) =>  sm && getWidthString(sm) };

  }
  @media only screen and (min-width: ${TableWidth}px){
    ${({md}) => md && getWidthString(md)};
  }
  @media only screen and (min-width: ${DesktopWidth}px){
    ${({lg}) => lg && getWidthString(lg)};
  }
`;

/*
 @media only screen and (min-width: 768px){
   width:${props => (props.span ? props.span /12*100 : '8.33')}%;
 }
*/
