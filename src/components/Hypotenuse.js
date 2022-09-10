import React, { useState } from 'react'
const Hypotenuse = () => {
   const [height, setheight] = useState("") ;
   const [base, setbase] = useState("");
   const [result, setresult] = useState("");
   const [color, setcolor] = useState("");
   const calculateHypo=()=>{
     if(height.length<1||base.length<1){
        setcolor("red");
        return setresult("please fill all fields");
     }
     const hypo=Math.sqrt((height*height)+(base*base)).toFixed(2);
     setresult(`The length of Hypotenuse = ${hypo}`);
     setcolor("green")
   }
  return (
    <div className='find'>
      <h2>Calculate Hypotenuse of a Right angled Triangle</h2>
      <input type="number" onChange={(event)=>Number(setheight(event.target.value))}  placeholder='Enter length of height'  />
      <input type="number" onChange={(event)=>Number(setbase(event.target.value))}  placeholder='Enter lenght of base'  />
      <button className='btn' style={{width:"100%"}} onClick={calculateHypo}>CALCULATE HYPOTENUSE</button>
      <p style={{color,marginBottom:"20px"}}>{result}</p>
    </div>
  )
}

export default Hypotenuse