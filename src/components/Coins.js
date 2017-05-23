import React, { Component } from 'react';
import Coin from './Coin';
import TweenLite from "gsap";
import TweenMax  from "gsap";
import Power3 from "gsap";
import Draggable from "gsap/Draggable";
import Ankh from './Ankh';
import Feather from './Feather';

class Coins extends Component {
    constructor(props) {
        super(props);
        this.numberOfCoins = this.props.numberOfCoins;
         this.coin_image = [ 
            "coin_images/Arethusa390bcSyracusan.png", 
            "coin_images/Arethusa400bcSyracusan.png", 
            "coin_images/Arethusa405-400bcSyracusan.png", 
            "coin_images/Arethusa410-400bcSyracusan.png", 
            "coin_images/Arethusa420bcSyracusan.png", 
            "coin_images/Arethusa440bcSyracusan.png", 
            "coin_images/Arethusa460bcSyracusan.png", 
            "coin_images/Arethusa470bcSyracusan.png", 
            "coin_images/Arethusa480bcSyracusan.png", 
            "coin_images/Arethusa490-485bcSyracusan.png", 
            "coin_images/Arethusa510-490bcSyracusan.png", 
            "coin_images/HieroCopper.png"
        ];

        this.coin_subset = [];
        this.coin_array_copy = this.coin_image.slice();
        for (var i = this.props.numberOfCoins - 1; i >= 0; i--) {
            var ind = Math.floor (Math.random () * i-1);
            var image_index0 = this.coin_array_copy.splice(ind, 1);
            this.coin_subset[i] = image_index0;
        }
       
    }

////////// UNUSED : FOR RESTART
change_coin_images = () => {
        
          this.coin_image = [ 
            "coin_images/Arethusa390bcSyracusan.png", 
            "coin_images/Arethusa400bcSyracusan.png", 
            "coin_images/Arethusa405-400bcSyracusan.png", 
            "coin_images/Arethusa410-400bcSyracusan.png", 
            "coin_images/Arethusa420bcSyracusan.png", 
            "coin_images/Arethusa440bcSyracusan.png", 
            "coin_images/Arethusa460bcSyracusan.png", 
            "coin_images/Arethusa470bcSyracusan.png", 
            "coin_images/Arethusa480bcSyracusan.png", 
            "coin_images/Arethusa490-485bcSyracusan.png", 
            "coin_images/Arethusa510-490bcSyracusan.png", 
            "coin_images/HieroCopper.png"
        ];
        this.coin_subset = [];
        this.coin_array_copy = this.coin_image;
        for (var i = this.props.numberOfCoins - 1; i >= 0; i--) {
            var ind = Math.floor (Math.random () * i-1);
            var image_index0 = this.coin_array_copy.splice(ind, 1);
            this.coin_subset[i] = image_index0;
        }
}



    componentWillUpdate(nextProps, nextState) {
       console.log("componentWillUpdate < ")
//        this.change_coin_images()

    }

    componentDidMount (callback) {
            for (var i = this.props.numberOfCoins - 1; i >= 0; i--) {
                const this_coin = "#coin" + i;
                Draggable.create(this_coin, {
                    zIndexBoost:true,
                    onDragEnd: this.props.balance_func

                });
            }
            Draggable.create("#feather", {
                zIndexBoost:true,
                onDragEnd: this.props.balance_func
            });
            Draggable.create("#ankh", {
                zIndexBoost:true,
                onDragEnd: this.props.balance_func
            });
            setTimeout( this.intro_coins() , 400);
    }

    intro_coins () {
                let numberOfCoins = this.numberOfCoins;
                let speed = 0.5;
                let this_x = 800 / (numberOfCoins + 6);
                let this_coin = []; 
                let coin_places = [];
                for (let i = numberOfCoins - 1; i >= 0; i--) {
                    this_coin.push("#coin" + i);
                    coin_places.push(50 + (this_x * (i+1)))
                }    
                TweenMax.staggerTo(this_coin, speed, {cycle:{x: coin_places}, y: 0,  ease: Power3.easeOut}, 0.09);
                TweenLite.to("#feather", speed, {x: 30, y: 0,  ease: Power3.easeOut});
                TweenLite.to("#ankh", speed, {x: 60 + this_x * (numberOfCoins+1), y: 0,  ease: Power3.easeOut});
    }
  //////////////////////////////////////////////////////////
  //////
    render() {
        return (
            <div className="coins">

                {true && <Feather id="feather" my_index={this.props.numberOfCoins} />}

                {this.coin_subset.map((image, i) =>  <Coin id={"coin" + i} key={"coin" + i}  my_index={i}  image_url={image} label={this.props.label}  /> )} 

                {true && <Ankh id="ankh" my_index={this.props.numberOfCoins+1}  />}
            </div>
        );
    }
}

export default Coins;
