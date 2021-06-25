import React from 'react'
import "../assets/css/App.css"
import Header from "./header"
import NumberList from "./numberlist"
import ResultOutput from "./resultOutput"
import CashComponent from "./cashComponent"

import {useState} from "react";

const App = () => {



  const [marks,setMarks] = useState([]);
  const addMark = (markValue)=>{

    let newMarks = [...marks,markValue];
    setMarks(newMarks);

  }

  const clearMarks = ()=>{
    setMarks([]);
  }
  const randomValues = (randValues)=>{
    setMarks(randValues);
  }

  const removeMarks = (id)=>{
    const newMarks = marks.filter((mark)=>{
      return mark !==id;
    })

    setMarks(newMarks);
  }

  return (
    <div>
      <Header/>
      <ResultOutput marks={marks}/>
      <NumberList marks={marks} onAddmarks={addMark} onClearMarks={clearMarks} onAddRandom={randomValues} onRemoveMarks= {removeMarks}/> 
      <br/>
      <CashComponent/>
    </div>
  )
}

export default App
