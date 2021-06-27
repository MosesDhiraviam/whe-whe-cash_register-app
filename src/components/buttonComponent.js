import React from 'react'
import {useState} from 'react'

const ButtonComponent = (props) => {


    const [isClicked,setisClicked] = useState([false]);

    return (
        <div className="button-component">
            <button className="numberbutton number-element" name={props.value} onClick={(event)=>{
                     if(isClicked === true){
                    setisClicked(false);
                }else{
                    setisClicked(true);
                }
                   props.onButtonColorChange(event,isClicked)
                }}>{props.value}</button>
        </div>
    )
}

export default ButtonComponent
