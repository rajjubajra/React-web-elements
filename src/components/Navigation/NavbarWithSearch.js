import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
margin: 0;
box-sizing: border-box;
        .topnav {
          overflow: hidden;
          background-color: #e9e9e9;
        }

    >div.topnav a {
          float: left;
          display: block;
          color: black;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }

    > div.topnav a:hover {
          background-color: #ddd;
          color: black;
        }

    > div.topnav a.active {
          background-color: #2196F3;
          color: white;
        }

    > div.topnav .search-container {
          float: right;
        }

    > div.topnav input[type=text] {
          padding: 6px;
          margin-top: 8px;
          font-size: 17px;
          border: none;
        }

    > div.topnav .search-container button {
          float: right;
          padding: 6px;
          margin-top: 8px;
          margin-right: 16px;
          background: #ddd;
          font-size: 17px;
          border: none;
          cursor: pointer;
        }

    > div.topnav .search-container button:hover {
          background: #ccc;
        }

        @media screen and (max-width: 600px) {
          > div.topnav .search-container {
            float: none;
          }
          > div.topnav a, .topnav input[type=text], .topnav .search-container button {
            float: none;
            display: block;
            text-align: left;
            width: 90%;
            margin: 0;
            padding: 14px;
          }
          > div.topnav input[type=text] {
            border: 1px solid #ccc;  
          }
        }


`;

class NavbarWithSearch extends React.Component{
  render(){
    return(
      <Nav>
        <h3>Navbar with search form</h3>

        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div className="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>

          <div style={{paddingLeft:'16px'}}>
            <h2>Responsive Input Field in Navbar</h2>
            <p>Navigation bar with a search box and a submit button inside of it.</p>
            <p>Resize the browser window to see the responsive effect.</p>
          </div>

      </Nav>
    )
  }
}
export default NavbarWithSearch;