import React from 'react'


let btnClick=0;
const numberlist = (props) => {
      
    
    const buttonColorChange = (e, BtnClick)=>{
        
     if(BtnClick%2===0){
         e.target.style.backgroundColor='white';
         props.onRemoveMarks(e.target.name);
        
     }else{
        e.target.style.backgroundColor='red';
        props.onAddmarks(e.target.name);
     }
    }
    
   const generateRandomNumbers = ()=> {
        let randArray=[];
        for(let i=0; i<5;i++){
        randArray.push(Math.floor(Math.random() * 20) + 1);
        }
        props.onAddRandom(randArray);
        }
   
        const markSizeCheck = ()=>{
            if(props.marks.length >4){
                return true;
            }
            else{
                return false;
            }
        }

    return (
        
        <div className="button">
             
                <button name="1" onClick={(event)=>{
                    btnClick++;
                    if(markSizeCheck){
                    buttonColorChange(event, btnClick);}
                    else{ alert("you cant select more than 5 numbers");
                    }
                }}>1</button>
                <button name="2" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>2</button>
                <button name="3" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>3</button>
                <button name="4" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>4</button>
                <button name="5" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>5</button>
                <button name="6" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>6</button> 
                <button name="7" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>7</button>
                <button name="8" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>8</button>
                <button name="9" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>9</button>
                <button name="10" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>10</button>
                <button name="11" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>11</button>
                <button name="12" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>12</button>
                <button name="13" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>13</button>
                <button name="14" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>14</button>
                <button name="15" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>15</button>
                <button name="16" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>16</button>
                <button name="17" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>17</button>
                <button name="18" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>18</button>
                <button name="19" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>19</button>
                <button name="20" onClick={(event)=>{
                    btnClick++;
                    buttonColorChange(event, btnClick);
                }}>20</button>
                <button name="cash" className="cashButton">CASH</button>
                <button name="clear" className="clearButton" onClick={()=>{
                    props.onClearMarks();
                }}>CLEAR</button>
                <button name="random" className="randomButton" onClick={()=>{
                    generateRandomNumbers();
                }}>RANDOM</button>
               
            </div>
    )
}

export default numberlist
