import React from 'react'

const resultOutput = (props) => {
    return (
        <div className="form-control-container">
        <textarea className="form-control" id="result" value={props.marks}/>

        
    
    </div>
    )
}

export default resultOutput
