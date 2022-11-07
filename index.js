let playersTurn = 1;
let squareClicked;

let square1check = 0;
let square2check = 0;
let square3check = 0;
let square4check = 0;
let square5check = 0;
let square6check = 0;
let square7check = 0;
let square8check = 0;
let square9check = 0;

let squareClickedSrc = 0;
let winner = 0;
let playerXWins = 0;
let playerOwins = 0;

function played(squareClicked){
    squareClickedSrc = document.getElementById(squareClicked)
    if((playersTurn == 1)&& (squareClickedSrc.getAttribute('src') != "./images/x.png") && (squareClickedSrc.getAttribute('src') != "./images/o.png") && (winner ==0)){
        playersTurn++;
        document.getElementById(squareClicked).src = "./images/x.png";
        checkWinner();
        checkPlayersTurnFunction();
        
    }else if ((playersTurn == 2) && ((squareClickedSrc.getAttribute('src') != "./images/x.png") &&(squareClickedSrc.getAttribute('src') != "./images/o.png")) && (winner == 0)){
        document.getElementById(squareClicked).src = "./images/o.png";
        playersTurn--;
        checkWinner();
        checkPlayersTurnFunction();
    }
    return playersTurn
}
function checkPlayersTurnFunction() {
    if(playersTurn == 1){
        document.getElementById("playerXTurn").style.opacity = "0.5";
        document.getElementById("playerOTurn").style.opacity = "1";
    }else if(playersTurn == 2){
        document.getElementById("playerXTurn").style.opacity = "1";
        document.getElementById("playerOTurn").style.opacity = "0.5";
    }
}
function checkSquare1(){
    if(square1Image.getAttribute('src') === "./images/x.png"){
        square1check = 1;
    }else if(square1Image.getAttribute('src') === "./images/o.png"){
        square1check = 2; 
    }
}
function checkSquare2(){
    if(square2Image.getAttribute('src') === "./images/x.png"){
        square2check = 1;
    }else if(square2Image.getAttribute('src') === "./images/o.png"){
        square2check = 2; 
    }
}
function checkSquare3(){
    if(square3Image.getAttribute('src') === "./images/x.png"){
        square3check = 1;
    }else if(square3Image.getAttribute('src') === "./images/o.png"){
        square3check = 2; 
    }
}
function checkSquare4(){
    if(square4Image.getAttribute('src') === "./images/x.png"){
        square4check = 1;
    }else if(square4Image.getAttribute('src') === "./images/o.png"){
        square4check = 2; 
    }
}
function checkSquare5(){
    if(square5Image.getAttribute('src') === "./images/x.png"){
        square5check = 1;
    }else if(square5Image.getAttribute('src') === "./images/o.png"){
        square5check = 2; 
    }
}
function checkSquare6(){
    if(square6Image.getAttribute('src') === "./images/x.png"){
        square6check = 1;
    }else if(square6Image.getAttribute('src') === "./images/o.png"){
        square6check = 2; 
    }
}
function checkSquare7(){
    if(square7Image.getAttribute('src') === "./images/x.png"){
        square7check = 1;
    }else if(square7Image.getAttribute('src') === "./images/o.png"){
        square7check = 2; 
    }
}
function checkSquare8(){
    if(square8Image.getAttribute('src') === "./images/x.png"){
        square8check = 1;
    }else if(square8Image.getAttribute('src') === "./images/o.png"){
        square8check = 2; 
    }
}
function checkSquare9(){
    if(square9Image.getAttribute('src') === "./images/x.png"){
        square9check = 1;
    }else if(square9Image.getAttribute('src') === "./images/o.png"){
        square9check = 2; 
    }
}
function checkWinner(){
    checkSquare1();
    checkSquare2();
    checkSquare3();
    checkSquare4();
    checkSquare5();
    checkSquare6();
    checkSquare7();
    checkSquare8();
    checkSquare9();
    
    // ROW WINNERS
    // across first row winner
    if((square1check == 1) && (square2check == 1) && (square3check == 1)){
        console.log("player 1 is the winner");
        winner = 1;
        playerXWins++
        winnerBoardChanges()
        document.getElementById("topHorizontalLine").style.display = "inline";
    }else if((square1check == 2) && (square2check == 2) && (square3check == 2)){
        console.log("player 2 is the winner");
        winner = 2;
        playerOWins++
        winnerBoardChanges()
        document.getElementById("topHorizontalLine").style.display = "inline";
    }
    // across second row winner
    if((square4check == 1) && (square5check == 1) && (square6check == 1)){
        console.log("player 1 is the winner");
        winner = 1;
        playerXWins++
        winnerBoardChanges()
        document.getElementById("middleHorizontalLine").style.display = "inline";
    }else if((square4check == 2) && (square5check == 2) && (square6check == 2)){
        console.log("player 2 is the winner");
        winner = 2;
        playerOWins++
        winnerBoardChanges()
        document.getElementById("middleHorizontalLine").style.display = "inline";
    }
    // across third row winner
    if((square7check == 1) && (square8check == 1) && (square9check == 1)){
        console.log("player 1 is the winner")
        winner = 1;
        playerXWins++
        winnerBoardChanges()
        document.getElementById("bottomHorizontalLine").style.display = "inline";
    }else if((square7check == 2) && (square8check == 2) && (square9check == 2)){
        console.log("player 2 is the winner")
        winner = 2;
        playerOWins++
        winnerBoardChanges()
        document.getElementById("bottomHorizontalLine").style.display = "inline";
    }
    
    // COLLUMN WINNERS
    // across first collumn winner
    if((square1check == 1) && (square4check == 1) && (square7check == 1)){
        console.log("player 1 is the winner");
        winner = 1;
        playerXWins++
        winnerBoardChanges()
        document.getElementById("firstVerticalLine").style.display = "inline";
    }else if((square1check == 2) && (square4check == 2) && (square7check == 2)){
        console.log("player 2 is the winner");
        winner = 2;
        playerOWins++
        winnerBoardChanges()
        document.getElementById("firstVerticalLine").style.display = "inline";
    }
    // across second collumn winner
    if((square2check == 1) && (square5check == 1) && (square8check == 1)){
        console.log("player 1 is the winner");
        winner = 1;
        playerXWins++
        winnerBoardChanges()
        document.getElementById("secondVerticalLine").style.display = "inline";
    }else if((square2check == 2) && (square5check == 2) && (square8check == 2)){
        console.log("player 2 is the winner");
        winner = 2;
        playerOWins++
        winnerBoardChanges()
        document.getElementById("secondVerticalLine").style.display = "inline";
    }
    // across third collumn winner
    if((square3check == 1) && (square6check == 1) && (square9check == 1)){
        console.log("player 1 is the winner");
        winner = 1;
        playerXWins++
        winnerBoardChanges()
        document.getElementById("thirdVerticalLine").style.display = "inline";
    }else if((square3check == 2) && (square6check == 2) && (square9check == 2)){
        console.log("player 2 is the winner");
        winner = 2;
        playerOWins++
        winnerBoardChanges()
        document.getElementById("thirdVerticalLine").style.display = "inline";
    }

    // DIAGONAL WINNERS
    // top left to bottom right winner
    if((square1check == 1) && (square5check == 1) && (square9check == 1)){
        console.log("player 1 is the winner");
        winner = 1;
        playerXWins++
        winnerBoardChanges()
        document.getElementById("topLeftDiagonalLine").style.display = "inline";
    }else if((square1check == 2) && (square5check == 2) && (square9check == 2)){
        console.log("player 2 is the winner");
        winner = 2;
        playerOWins++
        winnerBoardChanges()
        document.getElementById("topLeftDiagonalLine").style.display = "inline";
    }
    // bottom left to top right winner
    if((square3check == 1) && (square5check == 1) && (square7check == 1)){
        console.log("player 1 is the winner");
        winner = 1;
        playerXWins++
        winnerBoardChanges()
        document.getElementById("topRightDiagonalLine").style.display = "inline";
    }else if((square3check == 2) && (square5check == 2) && (square7check == 2)){
        console.log("player 2 is the winner");
        winner = 2;
        playerOWins++
        winnerBoardChanges()
        document.getElementById("topRightDiagonalLine").style.display = "inline";
    }
    document.getElementById("playerXWins").innerHTML = playerXWins;
    document.getElementById("playerOWins").innerHTML = playerOwins;
    
}
function winnerBoardChanges(){
    document.getElementById("board").style.opacity = "0.5";
}