import React, { useState } from 'react'
const Hypotenuse = () => {
   const [height, setheight] = useState("") ;
   const [base, setbase] = useState("");
   const [result, setresult] = useState("");
   const [color, setcolor] = useState("");
   const calculateHypo=()=>{
     if(height===""||base==="")
     {
      setcolor("red");
      return setresult("Please fill all fields");
     }
     if(height===0||base===0){
        setcolor("red");
        return setresult("length can't be zero");
     }
     if(height<0||base<0){
        setcolor("red");
        return setresult("length can't be negative");
     }
     const hypo=Math.sqrt((height*height)+(base*base)).toFixed(2);
     setresult(`The length of Hypotenuse = ${hypo} unit`);
     setcolor("green")
   }
  return (
    <div className='find'>
      <h2>Calculate Hypotenuse of a Right angled Triangle</h2>
      <input type="number" onChange={(event)=>setheight(Number(event.target.value))}  placeholder='Enter length of height'  />
      <input type="number" onChange={(event)=>setbase(Number(event.target.value))}  placeholder='Enter lenght of base'  />
      <button className='btn' style={{width:"100%"}} onClick={calculateHypo}>CALCULATE HYPOTENUSE</button>
      <span style={{color,marginBottom:"20px"}}>{result}</span>
      
    </div>
  )
}

export default Hypotenuse