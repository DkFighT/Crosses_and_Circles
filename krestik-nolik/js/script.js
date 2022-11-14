var field = document.querySelectorAll('.field1');
var btn = document.getElementById('reset');
var flag = true;
for(let i = 0; i < field.length; i++){
    field[i].addEventListener('click', function (){
        if((field[i].textContent == '')&&(flag == true)){
            field[i].innerHTML = 'X';
            flag = false
        }
        else if((field[i].textContent == '')&&(flag == false)){
            field[i].innerHTML = 'O';
            flag = true;
        }
        if((field[0].textContent == 'X' && field[1].textContent == 'X' && field[2].textContent == 'X')||(field[3].textContent == 'X' && field[4].textContent == 'X' && field[5].textContent == 'X')||(field[6].textContent == 'X' && field[7].textContent == 'X' && field[8].textContent == 'X')||(field[0].textContent == 'X' && field[3].textContent == 'X' && field[6].textContent == 'X')||(field[1].textContent == 'X' && field[4].textContent == 'X' && field[7].textContent == 'X')||(field[2].textContent == 'X' && field[5].textContent == 'X' && field[8].textContent == 'X')||(field[0].textContent == 'X' && field[4].textContent == 'X' && field[8].textContent == 'X')||(field[2].textContent == 'X' && field[4].textContent == 'X' && field[6].textContent == 'X')){
            var krest = parseInt(document.getElementById('krestik').textContent, 10);
            document.getElementById('krestik').innerHTML = `${krest + 1}`
            reset_field();
        }
        else if((field[0].textContent == 'O' && field[1].textContent == 'O' && field[2].textContent == 'O')||(field[3].textContent == 'O' && field[4].textContent == 'O' && field[5].textContent == 'O')||(field[6].textContent == 'O' && field[7].textContent == 'O' && field[8].textContent == 'O')||(field[0].textContent == 'O' && field[3].textContent == 'O' && field[6].textContent == 'O')||(field[1].textContent == 'O' && field[4].textContent == 'O' && field[7].textContent == 'O')||(field[2].textContent == 'O' && field[5].textContent == 'O' && field[8].textContent == 'O')||(field[0].textContent == 'O' && field[4].textContent == 'O' && field[8].textContent == 'O')||(field[2].textContent == 'O' && field[4].textContent == 'O' && field[6].textContent == 'O')){
            var nolik = parseInt(document.getElementById('nolik').textContent, 10);
            document.getElementById('nolik').innerHTML = `${nolik + 1}`
            reset_field();
        }
    })
}
btn.addEventListener('click', function (){
    for(let i = 0; i < field.length; i++){
        field[i].innerHTML = '';
    }
});
function reset_field(){
        for(let i = 0; i < field.length; i++){
        field[i].innerHTML = '';
    }
}