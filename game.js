var allCups = document.querySelectorAll(".cup");
var ball = document.querySelector(".ball");
var donutImg = document.querySelector(".imgball");

var h1 = document.querySelector("#h1game");

var allCupsArray = [0, 1, 2];

var spotZero = document.querySelector("#spotZero");
var spotOne = document.querySelector("#spotOne");
var spotTwo = document.querySelector("#spotTwo");

var cup0 = document.querySelector("#cup0");
var cup1 = document.querySelector("#cup1");
var cup2 = document.querySelector("#cup2");

var cup0Img = document.querySelector("#cup0");
var cup1Img = document.querySelector("#cup1");
var cup2Img = document.querySelector("#cup2");

var feedback = document.querySelector("#feedback");
var popup = document.querySelector("#popup");

//How/Where does the ball move?
var moveBall = function() {
    //Select a random cup to cover the ball
    let selectedCup = allCupsArray[Math.floor(Math.random()*allCupsArray.length)];

    //Defining the pixels (distance) by which the ball should move
    if (selectedCup === 1) {
        ball.style.top = '130px';
        ball.style.left = '355px';

        document.querySelector('#cup1').classList.add('winner');
        console.log('added winner to cup1')
    } else if (selectedCup === 2) {
        ball.style.top = '130px';
        ball.style.left = '580px';

        document.querySelector('#cup2').classList.add('winner');
        console.log('added winner to cup2')
    } else {
        ball.style.top = '130px';
        // ball.style.left = '130px';

        document.querySelector('#cup0').classList.add('winner');
        console.log('added winner to cup0')
    }
}


//----------------------------------------------------//

//Defining the swap functions:
var swap0And2 = function(childOfSpotZero, childOfSpotTwo) {
    cup2.classList.add("swap2With0");
    cup0.classList.add("swap0With2");

    setTimeout(function() {
        cup2.classList.remove("swap2With0");
        cup0.classList.remove("swap0With2");

        console.log("Swapped cup0 w cup2");

        if (cup2.classList.contains("winner")) {
            cup2.classList.remove('winner');
            cup0.classList.add('winner');
            console.log("removed WINNER from cup2, added to cup0")
        } else if (cup0.classList.contains("winner")) {
            cup0.classList.remove('winner');
            cup2.classList.add('winner');
            console.log("removed WINNER from cup0, added to cup2")
        }
    }, 400)
}

var swap0And1 = function(childOfSpotZero, childOfSpotOne) {
    cup0.classList.add("swap0With1");
    cup1.classList.add("swap1With0");

    setTimeout(function() {
        cup0.classList.remove("swap0With1");
        cup1.classList.remove("swap1With0");

        console.log("Swapped cup0 w cup1");

        if (cup1.classList.contains("winner")) {
            cup1.classList.remove('winner');
            cup0.classList.add('winner');
            console.log("removed WINNER from cup1, added to cup0")
        } else if (cup0.classList.contains("winner")) {
            cup0.classList.remove('winner');
            cup1.classList.add('winner');
            console.log("removed WINNER from class0, added to cup1")
        }
    }, 400)
}

var swap1And2 = function(childOfSpotOne, childOfSpotTwo) {
    cup1.classList.add("swap1With2");
    cup2.classList.add("swap2With1");

    setTimeout(function() {
        cup1.classList.remove("swap1With2");
        cup2.classList.remove("swap2With1");

        console.log("Swapped cup1 w cup2");

        if (cup1.classList.contains("winner")) {
            cup1.classList.remove('winner');
            cup2.classList.add('winner');
            console.log("removed WINNER from cup1, added to cup2")
        } else if (cup2.classList.contains("winner")) {
            cup2.classList.remove('winner');
            cup1.classList.add('winner');
            console.log("removed WINNER from cup2, added to cup1")
        }
    }, 400)
}

//---------------------------------------------------//


//Choosing each random swap animation:
var chooseRandomSwap = function() {
    let selectedSwap = Math.floor(Math.random() *3);
    // let selectedSwap = 2;
    if (selectedSwap === 0) {
        swap0And2(spotZero.children[0], spotTwo.children[0]);
    } else if (selectedSwap === 1) {
        swap0And1(spotZero.children[0], spotOne.children[0]);
    } else if (selectedSwap === 2) {
        swap1And2(spotOne.children[0], spotTwo.children[0]);
    }
}

//Swapping the cups randomly i = 11 times (immediately-invoked function expression)
var randomSwap = function(i) {
    for (let i = 0; i < 11; i++) {
        (function (i) {
            setTimeout(function () {
            chooseRandomSwap(); //run this code
            console.log(i)//to check if this chunk of code indeed runs 11 times
        }, 600*i); //the code repeats itself every 600ms (lower number = faster swaps)
    })(i); //for a total of i=11 times
    };
}


//---------------------------------------------------//
//What happens when each spot is clicked after the shuffling is complete:
var resultMsg0 = function() {
    if (cup0.classList.contains("winner")) {
        //re-create donutImg
        var positionedDonutImg = document.createElement("img");
        positionedDonutImg.setAttribute("src", "images/donuttransparent.png");
        positionedDonutImg.setAttribute("class", "imgball");
        positionedDonutImg.style.left = '20px';
        positionedDonutImg.style.bottom = '70px';
        //append donutImg to cup0holder
        var cup0Holder = document.querySelector(".cup0holder");
        cup0Holder.appendChild(positionedDonutImg);

        // setTimeout(function() {
        //     console.log("You won! Pusheen says..");
        // }, 500);
        setTimeout(win, 1700);
    } else {
        if (cup1.classList.contains("winner")) {
            //re-create donutImg
            var positionedDonutImg = document.createElement("img");
            positionedDonutImg.setAttribute("src", "images/donuttransparent.png");
            positionedDonutImg.setAttribute("class", "imgball");
            positionedDonutImg.style.left = '20px';
            positionedDonutImg.style.bottom = '70px';
            //append donutImg to cup1holder
            var cup1Holder = document.querySelector(".cup1holder");
            cup1Holder.appendChild(positionedDonutImg);
        } else if (cup2.classList.contains("winner")) {
            //re-create donutImg
            var positionedDonutImg = document.createElement("img");
            positionedDonutImg.setAttribute("src", "images/donuttransparent.png");
            positionedDonutImg.setAttribute("class", "imgball");
            positionedDonutImg.style.left = '20px';
            positionedDonutImg.style.bottom = '70px';
            //append donutImg to cup1holder
            var cup2Holder = document.querySelector(".cup2holder");
            cup2Holder.appendChild(positionedDonutImg);
        }

        setTimeout(function() {
            cup1.classList.add("fadeOut");
            cup2.classList.add("fadeOut");
        }, 1000)

        // setTimeout(function() {
        //     console.log("Oh no! Pusheen is sad. Try again next time?");
        // }, 3000);
        setTimeout(lose, 1700);

    }
}

var resultMsg1 = function() {
    if (cup1.classList.contains("winner")) {
        //re-create donutImg
        var positionedDonutImg = document.createElement("img");
        positionedDonutImg.setAttribute("src", "images/donuttransparent.png");
        positionedDonutImg.setAttribute("class", "imgball");
        positionedDonutImg.style.left = '20px';
        positionedDonutImg.style.bottom = '70px';
        //append donutImg to cup1holder
        var cup1Holder = document.querySelector(".cup1holder");
        cup1Holder.appendChild(positionedDonutImg);

        // setTimeout(function() {
        //     console.log("You won! Pusheen says..");
        // }, 500);
        setTimeout(win, 1700);
    } else {
        if (cup0.classList.contains("winner")) {
            //re-create donutImg
            var positionedDonutImg = document.createElement("img");
            positionedDonutImg.setAttribute("src", "images/donuttransparent.png");
            positionedDonutImg.setAttribute("class", "imgball");
            positionedDonutImg.style.left = '20px';
            positionedDonutImg.style.bottom = '70px';
            //append donutImg to cup1holder
            var cup0Holder = document.querySelector(".cup0holder");
            cup0Holder.appendChild(positionedDonutImg);
        } else if (cup2.classList.contains("winner")) {
            //re-create donutImg
            var positionedDonutImg = document.createElement("img");
            positionedDonutImg.setAttribute("src", "images/donuttransparent.png");
            positionedDonutImg.setAttribute("class", "imgball");
            positionedDonutImg.style.left = '20px';
            positionedDonutImg.style.bottom = '70px';
            //append donutImg to cup1holder
            var cup2Holder = document.querySelector(".cup2holder");
            cup2Holder.appendChild(positionedDonutImg);
        }

        setTimeout(function() {
            cup0.classList.add("fadeOut");
            cup2.classList.add("fadeOut");
        }, 1000)

        // setTimeout(function() {
        //     console.log("Oh no! Pusheen is sad. Try again next time?");
        // }, 3000);
        setTimeout(lose, 1700);

    }
}

var resultMsg2 = function() {
    if (cup2.classList.contains("winner")) {
        //re-create donutImg
        var positionedDonutImg = document.createElement("img");
        positionedDonutImg.setAttribute("src", "images/donuttransparent.png");
        positionedDonutImg.setAttribute("class", "imgball");
        positionedDonutImg.style.left = '20px';
        positionedDonutImg.style.bottom = '70px';
        //append donutImg to cup2holder
        var cup2Holder = document.querySelector(".cup2holder");
        cup2Holder.appendChild(positionedDonutImg);

        // setTimeout(function() {
        //     console.log("You won! Pusheen says..");
        // }, 500);
        setTimeout(win, 1700);
    } else {
        if (cup0.classList.contains("winner")) {
            //re-create donutImg
            var positionedDonutImg = document.createElement("img");
            positionedDonutImg.setAttribute("src", "images/donuttransparent.png");
            positionedDonutImg.setAttribute("class", "imgball");
            positionedDonutImg.style.left = '20px';
            positionedDonutImg.style.bottom = '70px';
            //append donutImg to cup1holder
            var cup0Holder = document.querySelector(".cup0holder");
            cup0Holder.appendChild(positionedDonutImg);
        } else if (cup1.classList.contains("winner")) {
            //re-create donutImg
            var positionedDonutImg = document.createElement("img");
            positionedDonutImg.setAttribute("src", "images/donuttransparent.png");
            positionedDonutImg.setAttribute("class", "imgball");
            positionedDonutImg.style.left = '20px';
            positionedDonutImg.style.bottom = '70px';
            //append donutImg to cup1holder
            var cup1Holder = document.querySelector(".cup1holder");
            cup1Holder.appendChild(positionedDonutImg);
        }

        setTimeout(function() {
            cup0.classList.add("fadeOut");
            cup1.classList.add("fadeOut");
        }, 1000)

        // setTimeout(function() {
        //     console.log("Oh no! Pusheen is sad. Try again next time?");
        // }, 3000);
        setTimeout(lose, 1700);

    }
}

//***CREATE POP-UPS FOR WIN/LOSE CONDITION***
var win = function() {
    popup.setAttribute("class", "popup");
    feedback.innerHTML = '<p class="win">You won! Pusheen says..<br /><br /><img src="images/pusheenthanks-resized.gif"><br /><br /><button id="refresh"><a onClick="window.location.reload()">PLAY AGAIN</a></button>';
}

var lose = function() {
    popup.setAttribute("class", "popup");
    feedback.innerHTML = '<p class="lose">Oh no! You lost. <br /><br />Pusheen is sad.<br /><img src="images/pusheensad-transparent-resized.png"><br /><br /><button id="refresh"><a onClick="window.location.reload()">PLAY AGAIN</a></button>';
}

//*deleted making ball transparent since now i'm using image
var spotZeroClick = function() {
    resultMsg0();

    setTimeout(function() {
        cup0.classList.add("fadeOut"); //selected cup fades out

        cup0.removeEventListener("click", spotZeroClick);
        cup1.removeEventListener("click", spotOneClick);
        cup2.removeEventListener("click", spotTwoClick);
    }, 100);

    // ball.classList.remove("transparent");
}

var spotOneClick = function() {
    resultMsg1();

    setTimeout(function() {
        cup1.classList.add("fadeOut"); //selected cup fades out

        cup0.removeEventListener("click", spotZeroClick);
        cup1.removeEventListener("click", spotOneClick);
        cup2.removeEventListener("click", spotTwoClick);
    }, 100);

    // ball.classList.remove("transparent");
}

var spotTwoClick = function() {
    resultMsg2();

    setTimeout(function() {
        cup2.classList.add("fadeOut"); //selected cup fades out

        cup0.removeEventListener("click", spotZeroClick);
        cup1.removeEventListener("click", spotOneClick);
        cup2.removeEventListener("click", spotTwoClick);
    }, 100);

    // ball.classList.remove("transparent");
}
//---------------------------------------------------//


//Initialise page / game once introScreen is clicked away:
var gameInit = function() {
    var bringCupsBackDown = function() {
        for (var i=0; i < allCups.length; i++) {
        allCups[i].style.top = '0px';
        };
    }

    // var makeBallTransparent = function() {
    //     ball.classList.add("transparent");
    // }

    var removeDonutImg = function() {
        donutImg.parentNode.removeChild(donutImg);
    }

    var displayMessage = function() {
        var clickOnTheCupMsg = document.createTextNode("Click on the cup containing the donut!");
        h1.replaceChild(clickOnTheCupMsg, h1.childNodes[0]);
        setTimeout(addBlink, 400); //MAKE THE (new) h1 TEXT BLINK FOR THE FIRST FEW SECONDS after IT APPEARS
    }

    var bringCupsUp = function() {
        for (var i=0; i < allCups.length; i++) {
            allCups[i].style.bottom = '50px';
        };
    }

    var removeBlink = function() {
        h1.classList.remove('blink');
    }

    var addBlink = function() {
        h1.classList.add('blink');
    }

    //MAKE THE h1 TEXT BLINK FOR THE FIRST FEW SECONDS IT APPEARS
    addBlink();
    setTimeout(removeBlink, 2000)

    setTimeout(bringCupsUp, 800);
    setTimeout(moveBall, 1300); //ball moves to randomly-selected cup
    setTimeout(bringCupsBackDown, 2000);
    // setTimeout(makeBallTransparent, 2000); //makes the ball transparent when the cups fall back down
    setTimeout(removeDonutImg, 2000); //makes donut disappear when cups fall back down

    setTimeout(randomSwap, 2600); //shuffling of cups starts & ends

    setTimeout(displayMessage, 9500);//displays a message to user to click on the cup containing the donut

    //Make the cups clickable again
    setTimeout(function() {
        cup0.addEventListener("click", spotZeroClick);
        cup1.addEventListener("click", spotOneClick);
        cup2.addEventListener("click", spotTwoClick);
    }, 9500);

};

gameInit();




//-------------------------------------------------//


//PUT BELOW IN JS FILE FOR INDEX INSTEAD:
// var startGame = function() {
//     var startScreen = document.querySelector("#introScreen");
//     startScreen.parentNode.removeChild(startScreen);
// }

// //What to do when 'start' button is clicked:
// var startButton = document.querySelector("button");
// startButton.addEventListener("click", startGame);


//------------------------------------------------//
