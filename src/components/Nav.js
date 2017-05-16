
import React, { Component } from 'react';

import scale_icon from './scale_svg/scale_icon.svg';

import { Power3, TimelineLite}  from "gsap";

class Nav extends Component {

	componentDidMount() {

		const nav_id = ["#restart_btn", "#replace_btn",  "#label_btn", "#cheat_btn", "#coins_3_btn", "#coins_6_btn", "#coins_9_btn", "#coins_10_btn", "#coins_11_btn", "#coins_12_btn", "#scale_icon0", "#scale_icon1", "#scale_icon2"];

		var tl = new TimelineLite();
	  tl.from( nav_id[0], .9, { y: -100, autoAlpha:0, ease: Power3.easeOut} )
	    .from( nav_id[1], .9, { y: -100, autoAlpha:0, ease: Power3.easeOut}, "-=.7"   )
	    .from( nav_id[2], .9, { y: -100, autoAlpha:0, ease: Power3.easeOut}, "-=.7"   )
	    .from( nav_id[3], .9, { y: -50, autoAlpha:0, ease: Power3.easeOut}, "-=.7"   )
	    .from( nav_id[4], .9, { y: -50, autoAlpha:0, ease: Power3.easeOut}, "-=.7"   )
	    .from( nav_id[5], .8, { y: -50, autoAlpha:0, ease: Power3.easeOut}, "-=.7"  )
	    .from( nav_id[6], .8, { y: -50, autoAlpha:0, ease: Power3.easeOut}, "-=.7"  )
	    .from( nav_id[7], .8, { y: -50, autoAlpha:0, ease: Power3.easeOut}, "-=.7"  )
	    .from( nav_id[8], .8, { y: -50, autoAlpha:0, ease: Power3.easeOut}, "-=.7"  )
	    .from( nav_id[9], .8, { y: -50, autoAlpha:0, ease: Power3.easeOut}, "-=.7"  )
	    .from( nav_id[10], .8, { y: -50, autoAlpha:0, ease: Power3.easeOut}, "-=.7"  )
	    .from( nav_id[11], .8, { y: -50, autoAlpha:0, ease: Power3.easeOut}, "-=.7"  )
	    .from( nav_id[12], .8, { y: -50, autoAlpha:0, ease: Power3.easeOut}, "-=.7"  )

	}
   
    render() {
    	const number_buttons = false;


        return (
            <div className="nav" >
				{true && <button id="restart_btn" className="btn" onClick={this.props.reset_fn}  >Restart</button> }
				
				{true && <button id="replace_btn" className="btn" onClick={this.props.replace_fn}  >Replace</button> }

				{true && <button id="label_btn" className="btn" onClick={this.props.label_fn}  >Labels</button> }

				{true && <button id="cheat_btn" className="btn" onClick={this.props.cheat_fn}  >Cheat</button> }

				{number_buttons && <button id="coins_3_btn" className="btn" onClick={this.props.coins_3_fn} >3</button> }
				{number_buttons && <button id="coins_6_btn" className="btn" onClick={this.props.coins_6_fn}   >6</button> }
				{number_buttons && <button id="coins_9_btn" className="btn" onClick={this.props.coins_9_fn}   >9</button> }
				{number_buttons && <button id="coins_10_btn" className="btn" onClick={this.props.coins_10_fn}   >10</button> }
				{number_buttons && <button id="coins_11_btn" className="btn" onClick={this.props.coins_11_fn}   >11</button> }
				{number_buttons && <button id="coins_12_btn" className="btn" onClick={this.props.coins_12_fn} >12</button> }

           		{true && <img className="scale_icon" id="scale_icon0" src={scale_icon} alt=""  />}
           		
           		{true && <img className="scale_icon" id="scale_icon1" src={scale_icon} alt=""  />}

           		{true && <img className="scale_icon" id="scale_icon2" src={scale_icon} alt=""  />}




			</div>

        );
    }
}

export default Nav;
