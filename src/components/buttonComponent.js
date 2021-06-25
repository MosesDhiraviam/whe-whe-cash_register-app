import React from 'react'

const buttonComponent = (props) => {
    return (
        <div className="button-component">
            <button name={props.value} onClick={(event)=>{
                    
                   props.onButtonColorChange(event)
                }}>{props.value}</button>
        </div>
    )
}

export default buttonComponent
