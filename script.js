//your JS code here. If required.

let user1=document.getElementById("player1")
let user2=document.getElementById("player2")
let startBtn=document.querySelector("#submit")
let message=document.querySelector(".message")
let cells=document.querySelectorAll(".cell")
let gameBoard=document.querySelector(".GameStarted")
let entrance=document.querySelector(".entrance")
let restart=document.querySelector("#Restart")

let gameActive=false;


let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

function restartGame(){
    let gameActive=true;
    message.textContent="";
    
    enablesCell();
}

 startBtn.addEventListener("click",()=>{
   
    entrance.style.display="none"
gameBoard.style.display="block"
    if(user1.value.trim()=="" || user2.value.trim()==""){
        alert("Enter the both player name" );
        return;
    }
    let currentPlayer=user1; 
 gameActive=true;

            message.textContent=`${currentPlayer.value} you're up!`
        })
 cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        if(gameActive){
            cell.innerText="X"
            currentPlayer=user2
            message.textContent=`${currentPlayer.value} you're up!`
            gameActive=false;
                
        }
        else{
            currentPlayer=user1
            message.textContent=`${currentPlayer.value} you're up!`
              cell.innerText="O";
            gameActive=true
          
                          
        }
        cell.disabled=true;

        checkWinner()
    })
 })


function disables(){
    for(let cell of cells){
        cell.disabled=true;
    }
}
function enablesCell(){
    for(let cell of cells){
        cell.disabled=false;
        cell.innerText="";
    }
}

let showWinner=(position1)=>{
    
 message.innerText=`${position1} Congratulations you won! `
  disables();
}

function checkWinner(){
    for(let pattern of winPattern){
        let position1=cells[pattern[0]].innerText
        let position2=cells[pattern[1]].innerText
        let position3=cells[pattern[2]].innerText
        console.log(pattern)
        if(position1 !=="" && position2!=="" && position3 !=="")
            if(position1===position2 && position2===position3){
                
                if(position1==="X"){
                   
                    position1=user1.value
                    showWinner(position1)
                    break;

                }
              else{
                
                position1=user2.value;
                showWinner(position1)
                break;
              }
                

    }

    }
  
}

restart.addEventListener("click",restartGame)










