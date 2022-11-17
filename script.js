var field = document.querySelectorAll('.field1');
var btn = document.getElementById('reset');
var btn2 = document.getElementById('reset2');
var dialog = document.getElementById('dialog');
var black = document.getElementById('black');
var flag = true;
const main_f = () => {
    bot();
    for(let i = 0; i < field.length; i++){
        field[i].addEventListener('click', function (){
            if((field[i].textContent == '')&&(flag == true)){
                // field[i].innerHTML = 'X';
                flag = false; 
            }
            if((field[i].textContent == '')&&(flag == false)){
                field[i].innerHTML = 'O';
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
    var r = rand(9);
    var i = 0;
    while(field[r].textContent != '' && i < 20){r = rand(9); i++}
    if((field[r].textContent == '')&&(flag == true)){
        field[r].innerHTML = 'X';
        flag = false;
    }
    else{
        reset_field();
    }
}
function rand(max){
    return Math.floor(Math.random() * max);
}
btn.addEventListener('click', function (){
    for(let i = 0; i < field.length; i++){
        field[i].innerHTML = '';
    }
});
btn2.addEventListener('click', function (){
    for(let i = 0; i < field.length; i++){
        field[i].innerHTML = '';
    }
    dialog.style.display = 'none';
    black.style.display = 'none';
});
function reset_field(){
        for(let i = 0; i < field.length; i++){
        field[i].innerHTML = '';
    }
    flag = true;
    bot();
}
function open_modal(winner){
    document.getElementById('text').innerHTML = 'Winner is ' + winner;
    dialog.style.display = 'flex';
    black.style.display = 'flex';
}
