import React, { Component } from 'react';
import Digital_display from './DigitalDisplay'

class Clock extends Component {
 


  render() {
    return (
      <div>
        <Digital_display seconds={this.props.elapsed} />


      </div>
    );
  }

}

export default Clock;



// var MyDiv = React.createClass({
//   render: function() {
//     var style = {
//       color: 'white',
//       fontSize: 200
//     };
//
//     return <div style={style}> Have a good and productive day! </div>;
//   }
// });
