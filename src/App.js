import React, { Component } from 'react';
import './App.css';
import Coins from './components/Coins';
import Scale from './components/Scale';
import Bg   from './components/Bg';
import Nav   from './components/Nav';
import Timer   from './components/Timer';
import ScratchPad   from './components/ScratchPad';
import Instructions   from './components/Instructions';
import Message from './components/Message'
import {TweenLite, Elastic, TweenMax, Power3}  from "gsap";
class App extends Component {
		constructor(props) {
				super(props);
				this.version = "version 2.03.1"
				const initialNumberOfCoins = 12;
				const lucky_number_init = Math.floor (Math.random () * initialNumberOfCoins);
				this.coin_location_array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				this.coin_weights = [Number (6), Number (5), Number (7)];
				this.coin_locations = "";
				this.measurementsUsed = 0;
				this.readout = "Find the false coin within three measurements on the scale.";
				this.state = {
					labels: true,
					coin_num: initialNumberOfCoins,
					lucky_number: lucky_number_init,
					light_or_heavy: Math.floor (Math.random () * 2) + 1,
					msg: this.readout,
					balanced:0
				};
				// COLOR WARP
				this.colr = {h:0, s:50, l:100};
				this.element = document.getElementsByTagName("body")[0];
				// /COLOR WARP
				document.onselectstart = function(){ return false; };
				document.body.setAttribute('unselectable', 'on', 0);
		}
		// COLOR WARP
		applyColor = () => {
				this.element.style.backgroundColor = "hsl(" + this.colr.h + "," + this.colr.s + "%," + this.colr.l + "%)";
		}
		end_color = () => {
				TweenMax.to(this.colr, 20, {h:0, l:100, onUpdate:this.applyColor  });
		}
		// /COLOR WARP

		tip_scale = (zero) => {
				let bal = (zero === 0) ? zero : this.state.balanced;
				TweenLite.to("#scale", 2, {rotation: -bal, ease:Elastic.easeOut, transformOrigin:"232px 230px"});
				TweenLite.to("#scale_left_plate", 2, {rotation: bal, ease:Elastic.easeOut});
				TweenLite.to("#scale_right_plate", 2, {rotation: bal, ease:Elastic.easeOut});
				TweenLite.to("#spinner", 2.5, {rotation: bal * -4, ease:Elastic.easeOut});
		};

		balance_scale = (tc) => {
			// console.log("balance_scale")
			// console.log(tc)
			// console.log(tc.changedTouches)
			// console.log(tc.changedTouches[0])
			// console.log(tc.changedTouches[0].clientY)
				let balance_mod = 0;
				if (tc.clientY < 428) {
					let offset = window.innerWidth / 2;
					//console.log("offset: " + offset )

					balance_mod = (tc.clientX < offset) ? 1 : -1;			
				} else if (tc.changedTouches && tc.changedTouches[0].clientY < ( (screen.height > 428) ? 428 : screen.height-100) ) {

					let offset = screen.width / 2;
					//console.log("changedTouches  <  offset : " + offset , " y " + tc.changedTouches[0].clientY)
					balance_mod = (tc.changedTouches[0].clientX < offset) ? 1 : -1;
				} else {
					balance_mod = 0;
				}
				let balanced = 0;
				let indexx = Number(tc.target.id.substr(2));
				// console.log("indexx : " + indexx + "  :  "  );
				// console.log(tc)
				// console.log(tc.clientX, tc.clientY)
				// console.log(tc.target.id)
				this.coin_location_array[indexx] = balance_mod;
				for (let i = 0; i < this.coin_location_array.length; i++) {
						if (i === this.state.lucky_number) {
									balanced += this.coin_location_array[i] * this.coin_weights[this.state.light_or_heavy];
						} else if (i === this.coin_location_array.length-2 ) {
									balanced += this.coin_location_array[i] * this.coin_weights[1]; 
						} else if (i === this.coin_location_array.length-1 ) {
									balanced += this.coin_location_array[i] * this.coin_weights[2]; 
						} else {
									balanced += this.coin_location_array[i] * this.coin_weights[0]; 
						}
				}
				this.setState({
					balanced: balanced,
					msg: Number(tc.target.id.substr(2)) + " clientX: " + tc.clientX
				})
				this.score()
		};
		score = () => {
			let time = this._child_timer.get_time();
			let number_of_coins = this.state.coin_num;
			let coins_on_scale_now = 0;
			let measurement_constituted = 0;
			let coin_locations_now = this.coin_location_array.toString ();
			for (let i = 0; i < this.coin_location_array.length; i++) {
				coins_on_scale_now += Math.abs (this.coin_location_array[i]);
				measurement_constituted += this.coin_location_array[i];
			}	
			if (measurement_constituted === 0 && coins_on_scale_now > 0 && this.coin_locations !== coin_locations_now) {
				if ((Math.abs (this.coin_location_array[number_of_coins]) === 1 || Math.abs (this.coin_location_array[number_of_coins + 1]) === 1) && coins_on_scale_now === 2) {
					if (this.state.balanced === 0) {
						if (this.measurementsUsed < 3) {
							// COLOR WARP
							TweenMax.to(this.colr, 15, {h:-360, l: 50, onUpdate:this.applyColor, onComplete:this.end_color ,  yoyo:true, repeat:2});
							// /COLOR WARP
							this.readout = 'You Win! ' + number_of_coins + ' Coins in ' + this.measurementsUsed + ' of 3 measurements! ' + time; //+ Math.floor ((getTimer () - startTime) / 1000) + ' seconds.';
							// _root['l' + number_of_coins + '_txt'].text = returnScore ();
							// _root['l' + number_of_coins + '_txt'].textColor = 0xFFFF00;
						} else if (this.measurementsUsed < 4) {
							// COLOR WARP
							TweenMax.to(this.colr, 20, {h:360, l:50, onUpdate:this.applyColor, onComplete:this.end_color,  yoyo:true, repeat:2});
							// /COLOR WARP
							this.readout = 'You Win! ' + number_of_coins + ' Coins in ' + this.measurementsUsed + ' of 3 measurements! ' + time; //+ Math.floor ((getTimer () - startTime) / 1000) + ' seconds.';
							// _root['l' + number_of_coins + '_txt'].text = returnScore ();
							// _root['l' + number_of_coins + '_txt'].textColor = 0x00FF00;
						} else {
							this.readout = 'Correct, but it took you ' + this.measurementsUsed + ' of 3 measurements. ' + time; //+ Math.floor ((getTimer () - startTime) / 1000) + ' seconds.';
							// _root['l' + number_of_coins + '_txt'].text = returnScore ();
							if (this.measurementsUsed === 4) {
								// _root['l' + number_of_coins + '_txt'].textColor = 0x000000;
							}
						}
					} else {
						this.measurementsUsed++;
						this.readout = 'Oops. Wrong. ' + this.measurementsUsed + ' of 3 measurements used. ' + time;

						TweenLite.to("#scale_icon" + (this.measurementsUsed-1), .5, { autoAlpha: 0.2, ease:Power3.easeOut});
					

						// _root['l' + number_of_coins + '_txt'].text = returnScore ();
						// _root['l' + number_of_coins + '_txt'].textColor = 0xffffff;
					}
				} else {
					this.measurementsUsed++;
					if (this.measurementsUsed === 1) {
						//attempts[number_of_coins]++;
					}
					this.readout = this.measurementsUsed + ' of 3 measurements used.';
					
					TweenLite.to("#scale_icon" + (this.measurementsUsed-1), .5, { autoAlpha: 0.2, ease:Power3.easeOut});
					
					// _root['l' + number_of_coins + '_txt'].text = returnScore ();
					if (this.measurementsUsed > 5) {
						// _root['l' + number_of_coins + '_txt'].textColor = 0xcc0000;
					} else if (this.measurementsUsed > 3) {
						// _root['l' + number_of_coins + '_txt'].textColor = 0x990000;
					} else if (this.measurementsUsed === 3) {
						// _root['l' + number_of_coins + '_txt'].textColor = 0xcccccc;
					}
				}
			}
			this.coin_locations = coin_locations_now;
			this.setState({msg: this.readout});
			this.tip_scale();
		};
		replace_coins = (zero) => {
				let numberOfCoins = this.state.coin_num
				let speed = 0.5;
		        let this_x = 800 / (numberOfCoins + 6);
		        let this_coin = []; 
		        let coin_places = [];
		        for (let i = numberOfCoins - 1; i >= 0; i--) {
		            this_coin.push("#coin" + i);
		            coin_places.push(50 + (this_x * (i+1)))
		        }    
		        TweenMax.staggerTo(this_coin, speed, {cycle:{x: coin_places}, y: 0,  ease: Power3.easeOut}, 0.03, this.tip_scale(0));
		        TweenLite.to("#feather", speed, {x: 30 , y: 0,  ease: Power3.easeOut});
		        TweenLite.to("#ankh", speed, {x: 60 + this_x * (numberOfCoins+1), y: 0,  ease: Power3.easeOut});

				this.readout = this.coin_locations;
				this.coin_location_array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				this.coin_locations =  this.coin_location_array.toString ();
//				this.coin_locations = "0,0,0,0,0,0,0,0,0,0,0,0,0,0";
				this.readout += " : " + this.coin_locations;
				if (zero !== 0) {
				this.setState({
						msg: this.readout,
						balanced:0
				});
			}
		}
		coins_3 = () => {
			this.setState({
				coin_num: 3
			});	
			this.reset_game ()
		}
		coins_6 = () => {
			this.setState({
				coin_num: 6
			});	
			this.reset_game ()
		}
		coins_9 = () => {
			this.setState({
				coin_num: 9
			});	
			this.reset_game ()
		}
		coins_10 = () => {
			this.setState({
				coin_num: 10
			});	
			this.reset_game ()
		}
		coins_11 = () => {
			this.setState({
				coin_num: 11
			});	
			this.reset_game ()
		}
		coins_12 = () => {
			this.setState({
				coin_num: 12
			});	
			this.reset_game ()
		}
		reset_game = () => {
				/////
				this.replace_coins(0);
		        this._child.change_coin_images();
		        this._child_timer.reset_time();
				/////
//				let initialNumberOfCoins = 9;
				let lucky_number_init = Math.floor (Math.random () * this.state.coin_num);
				this.measurementsUsed = 0;
				this.readout = "Find the false coin within three measurements on the scale.";
				this.setState({
						//coin_num: initialNumberOfCoins,
						lucky_number: lucky_number_init,
						light_or_heavy: Math.floor (Math.random () * 2) + 1,
						msg: this.readout,
						balanced:0
				});				
				let icons = ["#scale_icon0","#scale_icon1","#scale_icon2"]
				TweenLite.to(icons, .5, { autoAlpha: 1, ease:Power3.easeOut});
				TweenLite.to(["#cheat_btn"], 2, {color:"hsl(0, 0%, 100%)" })
				TweenLite.to(["#messenger"], 2, {color:"hsl(0, 0%, 0%)" })
		};
		toggle_labels = () => {
			this.setState({
				labels: !this.state.labels	
			});

		}
		show_cheat = () => {
			//console.log("Cheating")
			let lucky_label = ("#coin" + this.state.lucky_number )
			TweenLite.to(lucky_label, .4, {y: "-=30"})
			TweenLite.to(["#messenger", "#cheat_btn"], 2, {color:"hsl(0, 80%, 60%)" })
		};
		static render_scale(){
			return <Scale />;
		}
		render_coins() {
			return <Coins ref={(child) => { this._child = child; }}  label={this.state.labels} numberOfCoins={this.state.coin_num} id="set_of_coins" balance_func={this.balance_scale} />;
		}
		render_nav(){
			return <Nav className="nav"  coins_3_fn={this.coins_3}   coins_6_fn={this.coins_6}   coins_9_fn={this.coins_9}   coins_10_fn={this.coins_10}   coins_11_fn={this.coins_11}  coins_12_fn={this.coins_12} replace_fn={this.replace_coins}  reset_fn={this.reset_game}  cheat_fn={this.show_cheat} label_fn={this.toggle_labels}  />;
		}
		///////////////////////////////////////////////
	render() {
		return (
			<div className="App" id="app_id">
				{true && <Bg />}
				{true && <Instructions version={this.version} />}
				{true && <Message msg={this.state.msg}   className="messenger" id="messenger" />}
				{true && App.render_scale()}
				{true && <Timer  ref={(child) => { this._child_timer = child; }}   />}
				{true && this.render_coins() }
				{true && this.render_nav() }
				{true && <ScratchPad version={this.version} /> }
			</div>
		);
	}
}
export default App;

