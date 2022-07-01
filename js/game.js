"use strict";
var row=[]
//fillment the field 
function fillment (){
    document.getElementsByClassName("win")[0].style.display="none"
    document.getElementsByClassName("winHide")[0].style.display="block"
    let numReserve = [];
	while (numReserve.length < 15) {
  		let randomNumber = Math.ceil(Math.random() * 15);
  		let found = false;
  		for (let i = 0; i < numReserve.length; i++) {
  			if (numReserve[i] === randomNumber){
   				found = true;
   				break;
  			}
  		}
  		if (!found) { numReserve[numReserve.length]=randomNumber; }
	}
    numReserve[15]=0
    for (let i=0;i<numReserve.length;i++){
        if (numReserve[i]) {
            document.getElementsByClassName("box")[i].innerText=numReserve[i]
        }
        else {
            document.getElementsByClassName("box")[i].innerText=" "
        }
    }
    for(let i=0;i<16;i++) {
        row[i]=numReserve[i]
    }
}
//onclick on field
function step (event){
    let numberBox
    let target=event.target;
    let td = event.target.childNodes[0].id;
    if( td ) {
        numberBox=Number(td);
    }
    else {
        numberBox=Number(target.id);
    }    
    //get win
    let steps=0
    function fWin () {
        let win
        for (let i=0;i<15;i++){
            if(row[i]===i++) {
                win++;
            }
        }
        if (win===15){
            return true
        }
        else {
            return false
        }
    }
    const shiftItem = (box1,box2)=> {
        if(box2<0||box2>15) return;
        if(!row[box2]){
            let x=row[box2]
            row[box2]=row[box1]
            row[box1]=x
            document.getElementsByClassName("box")[box2].innerHTML=row[box2]
            document.getElementsByClassName("box")[box1].innerHTML=""
        }
    }    
    const checkPosition = (box) => {
        shiftItem(box,box-1);
        shiftItem(box,box+1);
        shiftItem(box,box-4);
        shiftItem(box,box+4);
    }
    if (fWin()){
        document.getElementsByClassName("win")[0].style.display="block"
        document.getElementsByClassName("winHide")[0].style.display="none"
    } 
    else {
        checkPosition(numberBox);
    }
}

