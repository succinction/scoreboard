import React, {Component} from 'react';
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
        this.get_images = () => {
            return [
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
            ]
        }

        this.numberOfCoins = this.props.numberOfCoins;
        this.coin_image = this.get_images()
        this.coin_subset = [];
        this.coin_array_copy = this.coin_image.slice();
        for (var i = this.props.numberOfCoins - 1; i >= 0; i--) {
            var ind = Math.floor(Math.random() * i - 1);
            var image_index0 = this.coin_array_copy.splice(ind, 1);
            this.coin_subset[i] = image_index0;
        }
    }
////////// UNUSED : FOR RESTART
    change_coin_images = () => {

        this.coin_image = this.get_images()

        this.coin_subset = [];
        this.coin_array_copy = this.coin_image;
        for (var i = this.props.numberOfCoins - 1; i >= 0; i--) {
            var ind = Math.floor(Math.random() * i - 1);
            var image_index0 = this.coin_array_copy.splice(ind, 1);
            this.coin_subset[i] = image_index0;
        }
            //setTimeout(this.props.replace_fn(0), 1400);

    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate < ')
        // return true;
        //
        if (this.props.numberOfCoins !== nextProps.numberOfCoins) {

        console.log('shouldComponentUpdate >> true ')
            // setTimeout(this.props.replace_fn(), 1800);
            return true;
        }else{
            return false;
        }
        // return this.props.numberOfCoins != nextProps.numberOfCoins || this.props.label != nextProps.label  ;
    }


    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate < Coins", this.props.numberOfCoins)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate < Did coins", this.props.numberOfCoins)

       this.draggabate();
    }
    componentDidMount(callback) {
        this.intro_coins();
        this.draggabate();
    }

    draggabate() {
        for (var i = this.props.numberOfCoins - 1; i >= 0; i--) {
            const this_coin = "#coin" + i;
            Draggable.create(this_coin, {
                zIndexBoost: true,
                onDragEnd: this.props.balance_func
            });
        }
        Draggable.create("#feather", {
            zIndexBoost: true,
            onDragEnd: this.props.balance_func
        });
        Draggable.create("#ankh", {
            zIndexBoost: true,
            onDragEnd: this.props.balance_func
        });
    }


    intro_coins() {
        console.log("intro_coins() < ")
        let numberOfCoins = this.props.numberOfCoins;
        let speed = 0.5;
        let this_x = 800 / (numberOfCoins + 6);
        let this_coin = [];
        let coin_places = [];
        for (let i = numberOfCoins - 1; i >= 0; i--) {
            this_coin.push("#coin" + i);
            coin_places.push(50 + (this_x * (i + 1)))
        }
        TweenMax.staggerTo(this_coin, speed, {cycle: {x: coin_places}, y: 0, ease: Power3.easeOut}, 0.09);
        TweenLite.to("#feather", speed, {x: 30, y: 0, ease: Power3.easeOut});
        TweenLite.to("#ankh", speed, {x: 60 + this_x * (numberOfCoins + 1), y: 0, ease: Power3.easeOut});
    }

    //////////////////////////////////////////////////////////
    //////
    render() {

        console.log("render: coins <  number of coins: ", this.props.numberOfCoins);
        // this.justrendered = true;

            setTimeout(this.props.replace_fn(0), 1400);
            setTimeout(this.intro_coins(), 1000);


        return (
            <div className="coins">

                {true && <Feather id="feather" my_index={this.props.numberOfCoins}/>}
                {true && <Ankh id="ankh" my_index={this.props.numberOfCoins + 1}/>}
                {/*HAD USED MAP, BUT FOUND VERBOSE SWITCHES HELPED DEBUGGING*/}
                {/*{this.coin_subset.map((image, i) => <Coin id={"coin" + i} key={"coin" + i} my_index={i} image_url={image} label={this.props.label}/>)}*/}

                { 0 < this.props.numberOfCoins  &&  <Coin id={"coin" + 0} key={"coin" + 0} my_index={0} image_url={this.coin_subset[0]} label={this.props.label}/> }
                { 1 < this.props.numberOfCoins  &&  <Coin id={"coin" + 1} key={"coin" + 1} my_index={1} image_url={this.coin_subset[1]} label={this.props.label}/> }
                { 2 < this.props.numberOfCoins  &&  <Coin id={"coin" + 2} key={"coin" + 2} my_index={2} image_url={this.coin_subset[2]} label={this.props.label}/> }
                { 3 < this.props.numberOfCoins  &&  <Coin id={"coin" + 3} key={"coin" + 3} my_index={3} image_url={this.coin_subset[3]} label={this.props.label}/> }
                { 4 < this.props.numberOfCoins  &&  <Coin id={"coin" + 4} key={"coin" + 4} my_index={4} image_url={this.coin_subset[4]} label={this.props.label}/> }
                { 5 < this.props.numberOfCoins  &&  <Coin id={"coin" + 5} key={"coin" + 5} my_index={5} image_url={this.coin_subset[5]} label={this.props.label}/> }
                { 6 < this.props.numberOfCoins  &&  <Coin id={"coin" + 6} key={"coin" + 6} my_index={6} image_url={this.coin_subset[6]} label={this.props.label}/> }
                { 7 < this.props.numberOfCoins  &&  <Coin id={"coin" + 7} key={"coin" + 7} my_index={7} image_url={this.coin_subset[7]} label={this.props.label}/> }
                { 8 < this.props.numberOfCoins  &&  <Coin id={"coin" + 8} key={"coin" + 8} my_index={8} image_url={this.coin_subset[8]} label={this.props.label}/> }
                { 9 < this.props.numberOfCoins  &&  <Coin id={"coin" + 9} key={"coin" + 9} my_index={9} image_url={this.coin_subset[9]} label={this.props.label}/> }
                { 10 < this.props.numberOfCoins  &&  <Coin id={"coin" + 10} key={"coin" + 10} my_index={10} image_url={this.coin_subset[10]} label={this.props.label}/> }
                { 11 < this.props.numberOfCoins  &&  <Coin id={"coin" + 11} key={"coin" + 11} my_index={11} image_url={this.coin_subset[11]} label={this.props.label}/> }
                { 12 < this.props.numberOfCoins  &&  <Coin id={"coin" + 12} key={"coin" + 12} my_index={12} image_url={this.coin_subset[12]} label={this.props.label}/> }
                { 13 < this.props.numberOfCoins  &&  <Coin id={"coin" + 13} key={"coin" + 13} my_index={13} image_url={this.coin_subset[13]} label={this.props.label}/> }
                { 14 < this.props.numberOfCoins  &&  <Coin id={"coin" + 14} key={"coin" + 14} my_index={14} image_url={this.coin_subset[14]} label={this.props.label}/> }
                { 15 < this.props.numberOfCoins  &&  <Coin id={"coin" + 15} key={"coin" + 15} my_index={15} image_url={this.coin_subset[15]} label={this.props.label}/> }

            </div>
        );
    }
}

export default Coins;
