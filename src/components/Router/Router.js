import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Container, Row, MenuStyle, SubmenuStyle, Main, Sidebar} from './RouterStyle.js';
import dbMenu from './dbMenu.json';
import dbSubMenu from './dbSubMenu.json';



class Router extends React.Component{
    state = {
      menus: dbMenu,
      submenus: dbSubMenu,
    }

    componentDidMount(){
        // this.setState({menu: dbMenu});
        // this.setState({subMenu: dbSubMenu});
        // console.log('set state menu : ',this.setState({menu: dbMenu}));
    }


    render(){
      const {menus} = this.state;
      const {submenus} = this.state;
      console.log('Menu: ', menus);
      console.log('SubMenu', submenus);
      return(
      <BrowserRouter>
            <Container>
              <Sidebar>
                  <ul>
                        {
                          menus
                          ?
                          (menus.map((menu)=>
                              (<li><Link to={`/${menu.label}`}>{menu.label}</Link></li>))
                          )
                          :
                          ('Loading....')
                        }
                  </ul>
              </Sidebar>
              <Main>
              <h1>Welcome</h1>
              <Route path="/:menulabel" component={Body} />
              </Main>

            </Container>
        </BrowserRouter>
        )
    }

}
export default Router;
