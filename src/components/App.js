import React from 'react'
import "../assets/css/App.css"
import Header from "./header"
import NumberList from "./numberlist"
import ResultOutput from "./resultOutput"
import CashComponent from "./CashComponent"
import Modal from "./modal"

import {useState} from "react";

const App = () => {



  const [marks,setMarks] = useState([]);
  const [addedValue,setAddedValue] = useState(0);
  const [modal, setModal] = useState({
    msg :'',
    visible: false
});

const hideModal = ()=>{

  setModal({
      msg:"",
      visible:false
  })
}

  const addMark = (markValue)=>{

    let newMarks = [...marks,markValue];
    setMarks(newMarks);

  }

  const clearMarks = ()=>{
    setMarks([]);
    setAddedValue(0);
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
  const pushedAmount = (value)=> {   
    setAddedValue(addedValue+value);
    }

    const cashButton = ()=>{
      setModal({
        msg:`The numbers you have selected was ${marks} And the cash amount you assigned to it was $${addedValue}`,
        visible:true
    })
    }

  return (
    <div>
      <Header/>
      <Modal onHide={hideModal}   modalState={modal}/>
      <ResultOutput marks={marks} CashValue ={addedValue}/>
      <NumberList marks={marks} onAddmarks={addMark} onClearMarks={clearMarks} onAddRandom={randomValues} onRemoveMarks= {removeMarks} onCashButton= {cashButton}/> 
      <br/>
      <CashComponent onPushedAmount= {pushedAmount} marks={marks}/>
    </div>
  )
}

export default App
