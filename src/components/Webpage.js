import React from 'react';

class Webpage extends React.Component{
  render(){
    return(
      <div>
        <title> The world's coolest webpage </title>
        <FillerText />
        <FillerText />
      </div>
    )
  }

}
import FillerText from './FillerText';

export default Webpage;
