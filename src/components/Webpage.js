import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render() {
    return (
      <section>
        <h1>The world's coolest webpage</h1>
        <FillerText/>
        <FillerText/>
      </section>
    )
  }
}

export default Webpage
