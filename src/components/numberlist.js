import React from 'react'
import ButtonComponent from './ButtonComponent'



const numberlist = (props) => {
      
    
    const buttonColorChange = (e, isClicked)=>{
    if(props.marks.length<=4){    
     if(isClicked===true){
         e.target.style.backgroundColor='white';
         props.onRemoveMarks(e.target.name);
        
     }else{
        e.target.style.backgroundColor='red';
        props.onAddmarks(e.target.name);
     }
    }else{
        alert("you cant select more than 5 numbers!!")
    }
    }

    const clearButtonColor = (e)=>{
        
           
     
    }

    
   const generateRandomNumbers = ()=> {
        let randArray=[];
        for(let i=0; i<5;i++){
        randArray.push(Math.floor(Math.random() * 20) + 1);
        }
        props.onAddRandom(randArray);
        }
   

    return (
        <>
        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4 button">
                <ButtonComponent value="1" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="2" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="3" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="4" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="5" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="6" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="7" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="8" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="9" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="10" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="11" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="12" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="13" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="14" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="15" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="16" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="17" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="18" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="19" onButtonColorChange={buttonColorChange}/>
                <ButtonComponent value="20" onButtonColorChange={buttonColorChange}/>
                
               
            </div>
            <button name="cash" className="cashButton"  onClick={()=>{
                props.onCashButton();
            }}>CASH</button>
                <button name="clear" className="clearButton" onClick={(event)=>{
                    props.onClearMarks();
                    clearButtonColor(event);
                }}>CLEAR</button>
                <button name="random" className="randomButton" onClick={()=>{
                    generateRandomNumbers();
                }}>RANDOM</button>
            </>
    )
}

export default numberlist
