import {useState} from "react"



const ClickCounter = ({value, onUpdate}) => {


  return <button onClick={onUpdate}> Текущее: {value} </button>;
};

export default ClickCounter