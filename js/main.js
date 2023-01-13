let turn ='X';
let title = document.getElementById("title");
let square = [];

function end (num1,num2,num3){
    title.innerHTML=`${square[num1]} Winner`;
    document.getElementById('item'+num1).style.cssText="background-color:#fff;color:rgb(0, 121, 137);"
    document.getElementById('item'+num2).style.cssText="background-color:#fff;color:rgb(0, 121, 137);"
    document.getElementById('item'+num3).style.cssText="background-color:#fff;color:rgb(0, 121, 137);"
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);
}
function restart(){
    location.reload();
}
function winner(){
    for(let i = 1; i < 10 ; i++){
       square[i] = document.getElementById("item"+i).innerHTML;
    }
    if(square[1]==square[2] && square[2] == square[3] && square[3] != ""){
      end(1,2,3);
    }
    else if(square[4]==square[5] && square[5] == square[6] && square[5] != ""){
      end(4,5,6);
    }
    else if(square[7]==square[8] && square[8] == square[9] && square[8] != ""){
      end(7,8,9);
    }
    else if(square[1]==square[4] && square[4] == square[7] && square[4] != ""){
        end(1,4,7);
    }
    else if(square[2]==square[5] && square[5] == square[8] && square[5] != ""){
        end(2,5,8);

    }
    else if(square[3]==square[6] && square[6] == square[9] && square[3] != ""){
        end(3,6,9);

    }
    else if(square[1]==square[5] && square[5] == square[9] && square[5] != ""){
        end(1,5,9);

    }
    else if(square[3]==square[5] && square[5] == square[7] && square[3] != ""){
        end(3,5,7);

    }
}

function game(id){
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML == '' ){
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML ="O Turn";

    }
    else if(turn === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML ="X Turn";
    }
    winner();
}