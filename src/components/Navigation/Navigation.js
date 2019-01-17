import React from 'react';
import NavBarOne from './NavBarOne';
import FullPageNav from './FullPageNav';
import DotNav from './DotNav';
import NavbarWithSearch from './NavbarWithSearch';



class Navigation extends React.Component{


    render(){
      return(
        <div>
            <NavbarWithSearch />
            <NavBarOne />
            <FullPageNav />
            <DotNav />


        </div>
      )
    }

}
export default Navigation;


/*
<NavBarOne />

*/
