import scale_0 		from './scale_svg/scale_0.svg';	
import scale_plate 	from './scale_svg/scale_plate.svg';
import spinner 	from './scale_svg/spinner.svg';
import cover from './scale_svg/spinner_cover1.svg';
import React, { Component } from 'react';

class Scale extends Component {

    render() {
        return (
          <div>

            <div className="scale" id="scale">

                <img className="spinner" id="spinner" src={spinner} alt=""  />
             		<img className="scale_arm" id="scale_arm" src={scale_0} alt=""  />
             		<img className="scale_left_plate" id="scale_left_plate" src={scale_plate} alt=""  />
             		<img className="scale_right_plate" id="scale_right_plate" src={scale_plate} alt=""  />
             		<img className="cover" id="cover" src={cover} alt=""  />

            </div>

          </div>
            
        );
    }
}

export default Scale;
