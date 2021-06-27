import React from 'react'


const CashComponent = (props) => {
   

   
    return (
        <div className="cash-component">
             <button className="dollarButton" name ="1" onClick={(event)=>{
                 if(props.marks.length>4){
                 props.onPushedAmount(parseInt(event.target.name));
                 }else{
                     alert("you cant assign cash untill select 5 numbers");
                 }
             }}>$1</button>
                <button className="dollarButton" name="5" onClick={(event)=>{
                if(props.marks.length>4){
                    props.onPushedAmount(parseInt(event.target.name));
                    }else{
                        alert("you cant assign cash untill select 5 numbers");
                    }
             }}>$5</button>
                <button className="dollarButton" name="10" onClick={(event)=>{
                 if(props.marks.length>4){
                    props.onPushedAmount(parseInt(event.target.name));
                    }else{
                        alert("you cant assign cash untill select 5 numbers");
                    }
             }}>$10</button>
                <button className="dollarButton" name="20" onClick={(event)=>{
                 if(props.marks.length>4){
                    props.onPushedAmount(parseInt(event.target.name));
                    }else{
                        alert("you cant assign cash untill select 5 numbers");
                    }
             }}>$20</button>
        </div>
    )
}

export default CashComponent
