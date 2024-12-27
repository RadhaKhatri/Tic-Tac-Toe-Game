let boxes= document.querySelectorAll(".box");
let resetbut = document.querySelector("#resetB");
let NewB = document.querySelector("#newB");
let Mcontainer = document.querySelector(".M_containner");
let Msg = document.querySelector("#msg");

let turnO = true;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO==true)
        {
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText ="X";
            turnO= true;
        }
        box.disabled = true;

        Checkwinner();
    });    
});

const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner =(pos1Val)=>{
     Msg.innerText = "Congratulation ,winner is "+pos1Val;
     Mcontainer.classList.remove("hide");
     disableBoxes();
}

const Checkwinner= ()=>{
    for(let pattern of winpattern)
    {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val!="")
    {
        if(pos1Val == pos2Val && pos2Val== pos3Val)
        {
            showWinner(pos1Val);
        }
    }
}
};

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    Mcontainer.classList.add("hide");
};
NewB.addEventListener("click",resetGame);
resetbut.addEventListener("click",resetGame);