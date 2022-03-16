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
function step (numberBox){
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
    if (fWin()){
        document.getElementsByClassName("win")[0].style.display="block"
        document.getElementsByClassName("winHide")[0].style.display="none"
    } 
    else {
        let x
        switch(numberBox) {
            case 0:  
                if (!row[1]){
                    x=row[1]
                    row[1]=row[0]
                    row[0]=x
                    document.getElementsByClassName("box")[1].innerText=row[1]
                    document.getElementsByClassName("box")[0].innerText=" "
                }
                if (!row[4]){
                    x=row[4]
                    row[4]=row[0]
                    row[0]=x
                    document.getElementsByClassName("box")[4].innerText=row[4]
                    document.getElementsByClassName("box")[0].innerText=" "
                }
                break;
            case 1:  
                if (!row[0]){
                    x=row[0]
                    row[0]=row[1]
                    row[1]=x
                    document.getElementsByClassName("box")[0].innerText=row[0]
                    document.getElementsByClassName("box")[1].innerText=" "
                }
                if (!row[2]){
                    x=row[2]
                    row[2]=row[1]
                    row[1]=x
                    document.getElementsByClassName("box")[2].innerText=row[2]
                    document.getElementsByClassName("box")[1].innerText=" "
                }
                if (!row[5]){
                    x=row[5]
                    row[5]=row[1]
                    row[1]=x
                    document.getElementsByClassName("box")[5].innerText=row[5]
                    document.getElementsByClassName("box")[1].innerText=" "
                }
                break;
            case 2:  
                if (!row[1]){
                    x=row[1]
                    row[1]=row[2]
                    row[2]=x
                    document.getElementsByClassName("box")[1].innerText=row[1]
                    document.getElementsByClassName("box")[2].innerText=" "
                }
                if (!row[3]){
                    x=row[3]
                    row[3]=row[2]
                    row[2]=x
                    document.getElementsByClassName("box")[3].innerText=row[3]
                    document.getElementsByClassName("box")[2].innerText=" "
                }
                if (!row[6]){
                    x=row[6]
                    row[6]=row[2]
                    row[2]=x
                    document.getElementsByClassName("box")[6].innerText=row[6]
                    document.getElementsByClassName("box")[2].innerText=" "
                }
                break;
            case 3:  
                if (!row[2]){
                    x=row[2]
                    row[2]=row[3]
                    row[3]=x
                    document.getElementsByClassName("box")[2].innerText=row[2]
                    document.getElementsByClassName("box")[3].innerText=" "
                }
                if (!row[7]){
                    x=row[7]
                    row[7]=row[3]
                    row[3]=x
                    document.getElementsByClassName("box")[7].innerText=row[7]
                    document.getElementsByClassName("box")[3].innerText=" "
                }
                break;
            case 4:  
                if (!row[0]){
                    x=row[0]
                    row[0]=row[4]
                    row[4]=x
                    document.getElementsByClassName("box")[0].innerText=row[0]
                    document.getElementsByClassName("box")[4].innerText=" "
                }
                if (!row[5]){
                    x=row[5]
                    row[5]=row[4]
                    row[4]=x
                    document.getElementsByClassName("box")[5].innerText=row[5]
                    document.getElementsByClassName("box")[4].innerText=" "
                }
                if (!row[8]){
                    x=row[8]
                    row[8]=row[4]
                    row[4]=x
                    document.getElementsByClassName("box")[8].innerText=row[8]
                    document.getElementsByClassName("box")[4].innerText=" "
                }
                break;
            case 5:  
                if (!row[4]){
                    x=row[4]
                    row[4]=row[5]
                    row[5]=x
                    document.getElementsByClassName("box")[4].innerText=row[4]
                    document.getElementsByClassName("box")[5].innerText=" "
                }
                if (!row[6]){
                    x=row[6]
                    row[6]=row[5]
                    row[5]=x
                    document.getElementsByClassName("box")[6].innerText=row[6]
                    document.getElementsByClassName("box")[5].innerText=" "
                }
                if (!row[1]){
                    x=row[1]
                    row[1]=row[5]
                    row[5]=x
                    document.getElementsByClassName("box")[1].innerText=row[1]
                    document.getElementsByClassName("box")[5].innerText=" "
                }
                if (!row[9]){
                    x=row[9]
                    row[9]=row[5]
                    row[5]=x
                    document.getElementsByClassName("box")[9].innerText=row[9]
                    document.getElementsByClassName("box")[5].innerText=" "
                }
                break;
            case 6:  
                if (!row[5]){
                    x=row[5]
                    row[5]=row[6]
                    row[6]=x
                    document.getElementsByClassName("box")[5].innerText=row[5]
                    document.getElementsByClassName("box")[6].innerText=" "
                }
                if (!row[7]){
                    x=row[7]
                    row[7]=row[6]
                    row[6]=x
                    document.getElementsByClassName("box")[7].innerText=row[7]
                    document.getElementsByClassName("box")[6].innerText=" "
                }
                if (!row[2]){
                    x=row[2]
                    row[2]=row[6]
                    row[6]=x
                    document.getElementsByClassName("box")[2].innerText=row[2]
                    document.getElementsByClassName("box")[6].innerText=" "
                }
                if (!row[10]){
                    x=row[10]
                    row[10]=row[6]
                    row[6]=x
                    document.getElementsByClassName("box")[10].innerText=row[10]
                    document.getElementsByClassName("box")[6].innerText=" "
                }
                break;
            case 7:  
                if (!row[6]){
                    x=row[6]
                    row[6]=row[7]
                    row[7]=x
                    document.getElementsByClassName("box")[6].innerText=row[6]
                    document.getElementsByClassName("box")[7].innerText=" "
                }
                if (!row[3]){
                    x=row[3]
                    row[3]=row[7]
                    row[7]=x
                    document.getElementsByClassName("box")[3].innerText=row[3]
                    document.getElementsByClassName("box")[7].innerText=" "
                }
                if (!row[11]){
                    x=row[11]
                    row[11]=row[7]
                    row[7]=x
                    document.getElementsByClassName("box")[11].innerText=row[11]
                    document.getElementsByClassName("box")[7].innerText=" "
                }
                break;
            case 8:  
                if (!row[9]){
                    x=row[9]
                    row[9]=row[8]
                    row[8]=x
                    document.getElementsByClassName("box")[9].innerText=row[9]
                    document.getElementsByClassName("box")[8].innerText=" "
                }
                if (!row[12]){
                    x=row[12]
                    row[12]=row[8]
                    row[8]=x
                    document.getElementsByClassName("box")[12].innerText=row[12]
                    document.getElementsByClassName("box")[8].innerText=" "
                }
                if (!row[4]){
                    x=row[4]
                    row[4]=row[8]
                    row[8]=x
                    document.getElementsByClassName("box")[4].innerText=row[4]
                    document.getElementsByClassName("box")[8].innerText=" "
                }
                break;
            case 9:  
                if (!row[8]){
                    x=row[8]
                    row[8]=row[9]
                    row[9]=x
                    document.getElementsByClassName("box")[8].innerText=row[8]
                    document.getElementsByClassName("box")[9].innerText=" "
                }
                if (!row[10]){
                    x=row[10]
                    row[10]=row[9]
                    row[9]=x
                    document.getElementsByClassName("box")[10].innerText=row[10]
                    document.getElementsByClassName("box")[9].innerText=" "
                }
                if (!row[13]){
                    x=row[13]
                    row[13]=row[9]
                    row[9]=x
                    document.getElementsByClassName("box")[13].innerText=row[13]
                    document.getElementsByClassName("box")[9].innerText=" "
                }
                if (!row[5]){
                    x=row[5]
                    row[5]=row[9]
                    row[9]=x
                    document.getElementsByClassName("box")[5].innerText=row[5]
                    document.getElementsByClassName("box")[9].innerText=" "
                }
                break;
            case 10:  
                if (!row[9]){
                    x=row[9]
                    row[9]=row[10]
                    row[10]=x
                    document.getElementsByClassName("box")[9].innerText=row[9]
                    document.getElementsByClassName("box")[10].innerText=" "
                }
                if (!row[11]){
                    x=row[11]
                    row[11]=row[10]
                    row[10]=x
                    document.getElementsByClassName("box")[11].innerText=row[11]
                    document.getElementsByClassName("box")[10].innerText=" "
                }
                if (!row[14]){
                    x=row[14]
                    row[14]=row[10]
                    row[10]=x
                    document.getElementsByClassName("box")[14].innerText=row[14]
                    document.getElementsByClassName("box")[10].innerText=" "
                }
                if (!row[6]){
                    x=row[6]
                    row[6]=row[10]
                    row[10]=x
                    document.getElementsByClassName("box")[6].innerText=row[6]
                    document.getElementsByClassName("box")[10].innerText=" "
                }
                break;
            case 11:  
                if (!row[15]){
                    x=row[15]
                    row[15]=row[11]
                    row[11]=x
                    document.getElementsByClassName("box")[15].innerText=row[15]
                    document.getElementsByClassName("box")[11].innerText=" "
                }
                if (!row[10]){
                    x=row[10]
                    row[10]=row[11]
                    row[11]=x
                    document.getElementsByClassName("box")[10].innerText=row[10]
                    document.getElementsByClassName("box")[11].innerText=" "
                }
                if (!row[7]){
                    x=row[7]
                    row[7]=row[11]
                    row[11]=x
                    document.getElementsByClassName("box")[7].innerText=row[7]
                    document.getElementsByClassName("box")[11].innerText=" "
                }
                break;
            case 12:  
                if (!row[13]){
                    x=row[13]
                    row[13]=row[12]
                    row[12]=x
                    document.getElementsByClassName("box")[13].innerText=row[13]
                    document.getElementsByClassName("box")[12].innerText=" "
                }
                if (!row[8]){
                    x=row[8]
                    row[8]=row[12]
                    row[12]=x
                    document.getElementsByClassName("box")[8].innerText=row[8]
                    document.getElementsByClassName("box")[12].innerText=" "
                }
                break;
            case 13:  
                if (!row[12]){
                    x=row[12]
                    row[12]=row[13]
                    row[13]=x
                    document.getElementsByClassName("box")[12].innerText=row[12]
                    document.getElementsByClassName("box")[13].innerText=" "
                }
                if (!row[14]){
                    x=row[14]
                    row[14]=row[13]
                    row[13]=x
                    document.getElementsByClassName("box")[14].innerText=row[14]
                    document.getElementsByClassName("box")[13].innerText=" "
                }
                if (!row[9]){
                    x=row[9]
                    row[9]=row[13]
                    row[13]=x
                    document.getElementsByClassName("box")[9].innerText=row[9]
                    document.getElementsByClassName("box")[13].innerText=" "
                }
                break;
            case 14:  
                if (!row[15]){
                    x=row[15]
                    row[15]=row[14]
                    row[14]=x
                    document.getElementsByClassName("box")[15].innerText=row[15]
                    document.getElementsByClassName("box")[14].innerText=" "
                }
                if (!row[13]){
                    x=row[13]
                    row[13]=row[14]
                    row[14]=x
                    document.getElementsByClassName("box")[13].innerText=row[13]
                    document.getElementsByClassName("box")[14].innerText=" "
                }
                if (!row[10]){
                    x=row[10]
                    row[10]=row[14]
                    row[14]=x
                    document.getElementsByClassName("box")[10].innerText=row[10]
                    document.getElementsByClassName("box")[14].innerText=" "
                }
                break;
            case 15:  
                if (!row[14]){
                    x=row[14]
                    row[14]=row[15]
                    row[15]=x
                    document.getElementsByClassName("box")[14].innerText=row[14]
                    document.getElementsByClassName("box")[15].innerText=" "
                }
                if (!row[11]){
                    x=row[11]
                    row[11]=row[15]
                    row[15]=x
                    document.getElementsByClassName("box")[11].innerText=row[11]
                    document.getElementsByClassName("box")[15].innerText=" "
                }
                break;
          }
    }
}

