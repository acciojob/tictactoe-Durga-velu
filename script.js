//your JS code here. If required.
let user1=document.getElementById("player-1")
let user2=document.getElementById("player-2")
let startBtn=document.querySelector("#submit")
let message=document.querySelector(".message")
let cells=document.querySelectorAll(".cell")
let gameBoard=document.querySelector(".GameStarted")
let entrance=document.querySelector(".entrance")
let restart=document.querySelector("#Restart")

let gameActive=false;

let count=0;

let currentPlayer=user1; 
function restartGame(){
   currentPlayer=user1
     gameActive=true;
       message.textContent=`${currentPlayer.value} you're up!`
    
    enablesCell();
  
}

 startBtn.addEventListener("click",()=>{
   
    entrance.style.display="none"
gameBoard.style.display="block"
    if(user1.value.trim()=="" || user2.value.trim()==""){
        alert("Enter the both player name" );
        return;
    }
 gameActive=true;

            message.textContent=`${currentPlayer.value} you're up!`
        })
 cells.forEach((cell)=>{
        cell.addEventListener("click",(event)=>{
         count=count+1;
         console.log(count);
         
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
       if(checkWinner()){
        disables();
       }
        else if(!checkWinner() && count===9){
            message.textContent=`Match is Draw!`
            return ;
        }
        
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

function checkWinner(){
    

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

    for(let pattern of winPattern){
        let position1=cells[pattern[0]].innerText
        let position2=cells[pattern[1]].innerText
        let position3=cells[pattern[2]].innerText
        
      
        if(position1 !=="" && position2!=="" && position3 !==""){
            if(position1===position2 && position2===position3){
                
                if(position1==="X"){
                    position1=user1.value
                    message.innerText=`${position1} Congratulations you won!`
                 
                    return true; 

                }
              else{
                position2=user2.value;
                message.innerText=`${position1} Congratulations you won!`
                return true; 
                
              }
            
    }
   
    }

 
    }
    return false

    }
   



restart.addEventListener("click",restartGame)













