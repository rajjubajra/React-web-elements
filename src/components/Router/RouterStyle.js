import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  display: flex;
`;

export const Row = styled.div`
  width: auto;
  display: flex;
`;

export const MenuStyle = styled.ul`
    > li{
      list-style: none;
      display: inline-block;
      width: 250px;
      text-align: center;
      border: 1px solid #eee;
      margin: 1px;
      padding: 5px 0px;
      cursor: pointer;
    }


`;

export const SubmenuStyle = styled.ul`
    > li{
      list-style: none;
      text-align: left;
      margin: 1px;
      padding: 10px 0px;
      cursor: pointer;
    }
`;

export const Sidebar = styled.div`
  width: 200px;
  margin-right: 10px;
  padding-right: 10px;
  background-color: #999;
   > ul > li{
     list-style: none;
     line-height: 1.5em;
   }
   > ul > li a{
     text-decoration: none;
     color: #000;
     font-weight: 300;

   }

`;

export const Main = styled.div`
   width: 100%;
   display: block;
   background-color: #fafafa;
`;
