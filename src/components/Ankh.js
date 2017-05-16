import React, { Component, PropTypes } from 'react';
import {TweenMax}  from "gsap";

class Ankh extends Component {
    static propTypes = {
        className: PropTypes.string,
    };


    componentDidMount (callback) {
    	//console.log("coin componentDidMount < ")
    	const el = ".coin";
        TweenMax.fromTo(el, 1, {rotation: 0, opacity: 0}, {rotation: 5, opacity: 1, onComplete: callback});
    }

    render() {

    	//console.log("render < ");


        return (


               	<div className="ankh" id={this.props.id} >
               		<img id={"nk" + this.props.my_index} src="coin_images/ankh.png" alt=""  />
               	</div>
        );
    }
}

export default Ankh;





