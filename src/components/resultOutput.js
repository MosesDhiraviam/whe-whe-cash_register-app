import React from 'react'

const resultOutput = (props) => {
    return (
        <div className="form-control-container">
            <label htmlFor="result"> The Numbers You have Selected are:</label>
        <textarea className="form-control" id="result" value={props.marks}/>
        <label htmlFor="cashoutput"> The cash you have assigned for the above five numbers are:</label>
        <textarea className="form-control" id="cashoutput" value={props.CashValue}/>

        
    
    </div>
    )
}

export default resultOutput
