let boxes = document.querySelectorAll(".box");
let resrtbtn = document.querySelector(".reset-btn");
let newbtnn = document.querySelector(".new-btnn");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");



let turnO = true; //playero , playerx

let winpatterns= [
[ 0 ,1,2],
[0, 3, 6],
[0 ,4, 8],
[0, 4, 8],
[1,4,7 ],
[2,5,8],
[2,4,6],
[3,4,5 ],
[6,7,8 ],
];

const resetgame = () => {
    let turnO = true;
    enabledbox();
    msgcontainer.classList.add("hide");

};

boxes.forEach((box) => {
 box.addEventListener("click" , () =>{
    console.log("box was clicked");
            if(turnO){
                box.innerText = "O";
                box.style.color = "red"
                turnO = false;
            }
            else{
            box.innerText = "X";
            box.style.color = "green"
            turnO = true;
            }
         
    box.disabled = true;
    checkwiner();
 })

});

const disabledbox = () => {
 for(let box of boxes){
    box.disabled = true;
 }

};
const enabledbox = () => {
    for(let box of boxes){
       box.disabled = false;
   
       box.innerText = "";
    }
   
   };
const showwinner = (winner) => {
msg.innerText = `congratulation , winner is ${winner}`
msgcontainer.classList.remove("hide");

};

const checkwiner = () => {
  for(let pattern of winpatterns){
    
    // console.log(boxes[pattern[0]].innerText ,
    //      boxes[pattern[1]].innerText ,
    //      boxes[pattern[2]].innerText);
         let pos1val = boxes[pattern[0]].innerText;
         let pos2val = boxes[pattern[1]].innerText;
         let pos3val = boxes[pattern[2]].innerText;
         if(pos1val !="" && pos2val !="" && pos3val !=""){

            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showwinner(pos1val);
                disabledbox();
            }
         }

  }
};

newbtnn.addEventListener("click" , resetgame);
resrtbtn.addEventListener("click" , resetgame);