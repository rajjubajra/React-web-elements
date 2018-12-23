import React from 'react';
import Zfour from './z4.json';



class Test extends React.Component{

  render(){
    return(
      <div>
          <h1>Z Data</h1>
          {Zfour.map((data, index)=>{
              return <h1>{data.id}</h1>
          })}
      </div>
    )}

}

export default Test;
