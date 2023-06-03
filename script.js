'use strict';


let btn_roll_dice=document.querySelector('.btn--roll')
let btn_hold_dice=document.querySelector('.btn--hold')
let score=document.querySelectorAll('.score')
let current_score=document.querySelectorAll('.current-score')
let i=0;
let player=document.querySelectorAll('.player')
let btnnewgame=document.querySelector('.btn--new')
let t;
let h;
let randomNumber;

function reset()
{
    score[0].innerHTML=0;
    score[1].innerHTML=0;
    current_score[0].innerHTML=0;
    current_score[1].innerHTML=0;

}


let showDice=function()
{
    randomNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src='dice-'+randomNumber+'.png'
    h=parseInt(current_score[i].innerHTML)
    if(randomNumber!=1)
    {
        current_score[i].innerHTML=randomNumber+h

    }else{
        current_score[i].innerHTML=0;
        player[i].classList.remove('player--active')
        i=i==0?1:0
        player[i].classList.add('player--active')
    }

}




let add=function()
{
    score[i].innerHTML=parseInt(score[i].innerHTML)+parseInt(current_score[i].innerHTML)
    if((parseInt(score[i].innerHTML)+parseInt(current_score[i].innerHTML)>=100))
    reset()
    current_score[i].innerHTML=0;
    player[i].classList.remove('player--active')
    i=i==0?1:0
    player[i].classList.add('player--active')
}


btn_roll_dice.addEventListener('click',showDice)
btn_hold_dice.addEventListener('click',add)
btnnewgame.addEventListener('click',reset)