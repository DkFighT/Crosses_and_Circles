var field = document.querySelectorAll('.field1');
var btn = document.getElementById('reset');
var btn2 = document.getElementById('reset2');
var dialog = document.getElementById('dialog');
var black = document.getElementById('black');
var origBoard = [0,1,2,3,4,5,6,7,8];
// человек
var huPlayer = "O";
// ИИ
var aiPlayer = "X";
var flag = true;
const main_f = () => {
    firstStep();
    for(let i = 0; i < field.length; i++){
        field[i].addEventListener('click', function (){
            if((field[i].textContent == '')&&(flag == true)){
                // field[i].innerHTML = 'X';
                flag = false; 
            }
            if((field[i].textContent == '')&&(flag == false)){
                field[i].innerHTML = 'O';
                origBoard[i] = 'O';
                flag = true;
                bot();
            }
            if((field[0].textContent == 'O' && field[1].textContent == 'O' && field[2].textContent == 'O')||(field[3].textContent == 'O' && field[4].textContent == 'O' && field[5].textContent == 'O')||(field[6].textContent == 'O' && field[7].textContent == 'O' && field[8].textContent == 'O')||(field[0].textContent == 'O' && field[3].textContent == 'O' && field[6].textContent == 'O')||(field[1].textContent == 'O' && field[4].textContent == 'O' && field[7].textContent == 'O')||(field[2].textContent == 'O' && field[5].textContent == 'O' && field[8].textContent == 'O')||(field[0].textContent == 'O' && field[4].textContent == 'O' && field[8].textContent == 'O')||(field[2].textContent == 'O' && field[4].textContent == 'O' && field[6].textContent == 'O')){
                var nolik = parseInt(document.getElementById('nolik').textContent, 10);
                document.getElementById('nolik').innerHTML = `${nolik + 1}`;
                open_modal('Circle');
                reset_field();
            }
            if((field[0].textContent == 'X' && field[1].textContent == 'X' && field[2].textContent == 'X')||(field[3].textContent == 'X' && field[4].textContent == 'X' && field[5].textContent == 'X')||(field[6].textContent == 'X' && field[7].textContent == 'X' && field[8].textContent == 'X')||(field[0].textContent == 'X' && field[3].textContent == 'X' && field[6].textContent == 'X')||(field[1].textContent == 'X' && field[4].textContent == 'X' && field[7].textContent == 'X')||(field[2].textContent == 'X' && field[5].textContent == 'X' && field[8].textContent == 'X')||(field[0].textContent == 'X' && field[4].textContent == 'X' && field[8].textContent == 'X')||(field[2].textContent == 'X' && field[4].textContent == 'X' && field[6].textContent == 'X')){
                var krest = parseInt(document.getElementById('krestik').textContent, 10);
                document.getElementById('krestik').innerHTML = `${krest + 1}`;
                open_modal('Cross');
                reset_field();
            }
            
        })
        console.log('re '+i);
    }
}
main_f();
function bot(){

    if((flag == true)){
        var r = minimax(origBoard, aiPlayer).index;
        field[r].innerHTML = 'X';
        origBoard[r] = 'X';
        flag = false;
    }
    else{
        reset_field();
    }
}

function rand(max) {
    return Math.floor(Math.random() * max);
}

function firstStep(){
    var r = rand(9);
    field[r].innerHTML = 'X';
    origBoard[r] = 'X';
}

btn.addEventListener('click', function (){
    for(let i = 0; i < field.length; i++){
        field[i].innerHTML = '';
    }
    origBoard = [0,1,2,3,4,5,6,7,8];
    flag = true;
    firstStep();
});
btn2.addEventListener('click', function (){
    for(let i = 0; i < field.length; i++){
        field[i].innerHTML = '';
    }
    dialog.style.display = 'none';
    black.style.display = 'none';
    origBoard = [0,1,2,3,4,5,6,7,8];
    flag = true;
    firstStep();
});
function reset_field(){
    for(let i = 0; i < field.length; i++){
        field[j].innerHTML = '';
    }
    flag = true;
    origBoard = [0,1,2,3,4,5,6,7,8];
}
function open_modal(winner){
    document.getElementById('text').innerHTML = 'Winner is ' + winner;
    dialog.style.display = 'flex';
    black.style.display = 'flex';
}

function minimax(newBoard, player){
    //add one to function calls
    
    //available spots
    var availSpots = emptyIndexies(newBoard);
  
    // checks for the terminal states such as win, lose, and tie and returning a value accordingly
    if (winning(newBoard, huPlayer)){
       return {score:-10};
    }
      else if (winning(newBoard, aiPlayer)){
      return {score:10};
      }
    else if (availSpots.length === 0){
        return {score:0};
    }
  
  // an array to collect all the objects
    var moves = [];
  
    // loop through available spots
    for (var i = 0; i < availSpots.length; i++){
      //create an object for each and store the index of that spot that was stored as a number in the object's index key
      var move = {};
        move.index = newBoard[availSpots[i]];
  
      // set the empty spot to the current player
      newBoard[availSpots[i]] = player;
  
      //if collect the score resulted from calling minimax on the opponent of the current player
      if (player == aiPlayer){
        var result = minimax(newBoard, huPlayer);
        move.score = result.score;
      }
      else{
        var result = minimax(newBoard, aiPlayer);
        move.score = result.score;
      }
  
      //reset the spot to empty
      newBoard[availSpots[i]] = move.index;
  
      // push the object to the array
      moves.push(move);
    }
  
  // if it is the computer's turn loop over the moves and choose the move with the highest score
    var bestMove;
    if(player === aiPlayer){
      var bestScore = -10000;
      for(var i = 0; i < moves.length; i++){
        if(moves[i].score > bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }else{
  
  // else loop over the moves and choose the move with the lowest score
      var bestScore = 10000;
      for(var i = 0; i < moves.length; i++){
        if(moves[i].score < bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
  
  // return the chosen move (object) from the array to the higher depth
    return moves[bestMove];
  }
  
  // returns the available spots on the board
  function emptyIndexies(board){
    return  board.filter(s => s != "O" && s != "X");
  }
  
  // winning combinations using the board indexies for instace the first win could be 3 xes in a row
  function winning(board, player){
   if (
          (board[0] == player && board[1] == player && board[2] == player) ||
          (board[3] == player && board[4] == player && board[5] == player) ||
          (board[6] == player && board[7] == player && board[8] == player) ||
          (board[0] == player && board[3] == player && board[6] == player) ||
          (board[1] == player && board[4] == player && board[7] == player) ||
          (board[2] == player && board[5] == player && board[8] == player) ||
          (board[0] == player && board[4] == player && board[8] == player) ||
          (board[2] == player && board[4] == player && board[6] == player)
          ) {
          return true;
      } else {
          return false;
      }
  }