import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

 import Grids from './components/Grids/Grids';
 import TopBar from './components/TopBar/TopBar';
// import AlignCenter from './components/Flexbox/AlignCenter';
 import Flexbox from './components/Flexbox/Flexbox';
 import Navigation from './components/Navigation/Navigation';
// import Toggle from './components/NavigationBar/Toggle';
 import Footer from './components/Footer/Footer';
 import ImageSlider from './components/ImageSlider/ImageSlider';
 import AutoSlider from './components/ImageSlider/AutoSlider';
// import RotateObject from './components/Animation/KeyFrames/Rotate';
// import SquareBox from './components/Animation/Transform/Box-hover';
// import TriggerBox from './components/Animation/Transform/Trigger-Box';
import Body from    './components/Body/Body';
import Contact from './components/Body/Contact/Contact';
import Error from './components/Error';

import dbMenu from './components/Router/dbMenu.json';
import {Container, Row, MenuStyle, SubmenuStyle, Main, Sidebar} from './components/Router/RouterStyle.js';
import Forms from './components/Forms/Forms';

class App extends Component {
    state = {
      menus: null
    }

    componentDidMount(){

        this.setState({menus: dbMenu});

    }

    render(){
      const {menus} = this.state
      return(
        <BrowserRouter>
        <Container>
          <Sidebar>
          <ul>
            {
              menus
              ?
              menus.map((menu)=>
                 (<li key={menu.id}><Link to={`/${menu.label.replace(" ","")}`}>{menu.label || '[no description]'}</Link></li>)

              )
              :
              (<div>Loading...</div>)
            }
          </ul>
          </Sidebar>
          <Main>
              <Route exact={true} path='/' component={Home} />
              <Route exact={true} path='/Body' component={Body} />
              <Route exact={true} path='/Contact' component={Contact} />
              <Route exact={true} path='/Flexbox' component={Flexbox} />
              <Route exact={true} path='/Footer' component={Footer} />
              <Route exact={true} path='/Grids' component={Grids} />
              <Route exact={true} path='/ImageSlider' component={ImageSlider} />
              <Route exact={true} path='/Navigation' component={Navigation} />
              <Route exact={true} path='/TopBar' component={TopBar} />
              <Route exact={true} path='/Forms' component={Forms} />
          </Main>
        </Container>
        </BrowserRouter>
      )
    }
}

export default App;

const Home = () => {
  return(
    <div>
      <h1>Template Library</h1>
    </div>
  )
}

/*
<TopBar />
<Navigation />
<ImageSlider />
<AutoSlider />


<Footer />

  <TopBar />
  <NavigationBar />
  <ImageSlider />
  <AutoSlider />


  <Footer />

      <Grids />
      <FlexDirection />
      <AlignCenter />


     //Animationa and Transform
        <SquareBox />
        <TriggerBox />
        <RotateObject />

*/
