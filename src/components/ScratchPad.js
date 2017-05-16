import React, { Component } from 'react';

class ScratchPad extends Component {
 
    render() {
        return (



        <div className="scratch">




            <h2>Welcome to the 12 coins simulator.</h2>

            <h3>How to play:</h3> 
<p>Twelve (12) draggable coins are placed on the table, all of them with the same weight, except one, the false coin. All of the good coins equal each other. The false coin is either slightly heavier or slightly lighter than the good coins. Try to determine which coin is false by using three (3) measurements on the balancing scale. Once you have determined which coin is false, and whether it is light or heavy, use the Ankh or Feather to make your final declaration by measuring it against the false coin. The Ankh weighs exactly the same as a false heavy coin. The Feather weighs exactly the same as a false light coin. If you have made the correct determination you will be told in the text above the scale.</p>
<h3>How the app works</h3>
<p>
One coin is randomly selected to be false and is given a weight that is randomly lighter or heavier than the rest of the coins.
Players can drag the coins onto the balancing scale to perform measurements. When an equal amount of coins is placed on the scale a measurement is counted, and the needle indicates wheather the coins are equal or unequal. The Ankh and the Feather are used to declare your final determination of which coin is false. Once the false coin is determined, the Ankh or the Feather is used to make one final measurement to verify that the false coin was successfully found. Measure the false coin against the Ankh if it is heavy, or against the Feather if it is light.  The verification measurement is not counted unless it is incorrect. Enjoy!
</p>
<h4>Button functionality</h4>
<p>
    <strong>Restart:</strong> Resets the game and clears the score. Reassigns the false coin. <br />
    <strong>Replace:</strong> Returns the coins to the starting position without resetting the score. <br />
    <strong>Labels:</strong> Toggles coin labels on or off. <br />
    <strong>Cheat:</strong> Reveals the false coin by nudging it forward. Effects scoring.<br />
</p>
 
           <h3> Notes on further development:</h3> 
       <h4>Features soon to be added:</h4>
        <ul>
            <li>Timer</li>
            <li>Score Tracking</li>
            <li>Persistent Scoreboard</li>
            <li>Option for identical coins</li>
            <li>Options for 3, 6, 9, 10, 11, 13, 14, and 15 coins</li>
            <li>Mobile </li>
        </ul>
<h4>Bugs</h4>
<ul>
<li>report bugs to <a href="mailto:succinction@gmail.com" >succinction@gmail.com</a></li>
</ul>

<h4>Demonstration:</h4>
<div className="video">
<p>
        {true && <iframe  id="video" width="640" height="360" src="https://www.youtube.com/embed/sk6q6sG-7Ls?rel=0" frameborder="0" allowfullscreen></iframe> }
</p>
</div>


  <br />
            <div className="bottom">
                <span className="copyright">Copyright 2006-2017   Joseph Howard   | <a href="mailto:succinction@gmail.com" >succinction@gmail.com</a>   |   {this.props.version}  |    built in react with gsap</span> 
            </div>
        </div>
        );
    }
}

export default ScratchPad;
