let player_score=0;
let comp_score=0;
let round=0;

const arr=["Rock","Paper","Scissor"];

function comp()
{
let a=Math.floor(Math.random()*3);
let b=arr[a];
return b;
}

function play(player_choice)
{
let computer_choice=comp();

if(player_choice==computer_choice)
{

    document.getElementById("one").innerHTML="Draw";
    document.getElementById("one").style.color="white";

}
else if(player_choice=="Rock" && computer_choice=="Paper")
{

    document.getElementById("one").innerHTML="Computer won";
    document.getElementById("one").style.color="white";
    document.getElementById("Computer").innerHTML=++comp_score;

}
else if(player_choice=="Rock" && computer_choice=="Scissor")
{

    document.getElementById("one").innerHTML="You won";
    document.getElementById("one").style.color="white";
    document.getElementById("player").innerHTML=++player_score;

}
else if(player_choice=="Paper" && computer_choice=="Rock")
{

    document.getElementById("one").innerHTML="You won";
    document.getElementById("one").style.color="white";
    document.getElementById("player").innerHTML=++player_score;

}
else if(player_choice=="Paper" && computer_choice=="Scissor")
{

    document.getElementById("one").innerHTML="Computer won";
    document.getElementById("one").style.color="white";
    document.getElementById("Computer").innerHTML=++comp_score;

}
else if(player_choice=="Scissor" && computer_choice=="Rock")
{

    document.getElementById("one").innerHTML="Computer won";
    document.getElementById("one").style.color="white";
    document.getElementById("Computer").innerHTML=++comp_score;

}
else if(player_choice=="Scissor" && computer_choice=="Paper")
{

    document.getElementById("one").innerHTML="You won";
    document.getElementById("one").style.color="white";
    document.getElementById("player").innerHTML=++player_score;

}

document.getElementById("round").innerHTML=++round;

if(round>5)
{
    var div=document.createElement("div");
    div.className="alert alert-warning alert-dismissible mb-2"
    div.innerHTML=
    `<button class="btn-close" data-bs-dismiss="alert"></button>
     Rounds Completed!`
     document.getElementById("three").appendChild(div);

    round=0;
    player_score=0;
    comp_score=0;
    document.getElementById("round").innerHTML=0;
    document.getElementById("player").innerHTML=0;
    document.getElementById("Computer").innerHTML=0;
    document.getElementById("one").innerHTML=" ";

}

if(round==5)
{
    if(player_score == comp_score)
    {
       document.getElementById("draw").style.display="block"
    }

    else if(player_score > comp_score)
    {    
      document.getElementById("success").style.display="block"
    }

    else if(player_score < comp_score)
    { 
      document.getElementById("fail").style.display="block"
    }
}

if(round==0)
{

    document.getElementById("draw").style.display="none"
    document.getElementById("success").style.display="none"
    document.getElementById("fail").style.display="none"

}

}



