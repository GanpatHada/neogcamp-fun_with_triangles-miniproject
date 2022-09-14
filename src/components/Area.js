import React, { useState } from 'react'
const Area = () => {
  const [angle1, setangle1] = useState("");
  const [angle2, setangle2] = useState("");
  const [angle3, setangle3] = useState("");
  const [result, setresult] = useState("");
  const [rescolor, setrescolor] = useState("");
  const calculateArea=()=>{
    if(angle1.length<1||angle2.length<1||angle3.length<1){
      setrescolor("red");
      return setresult("please fill all fields");
   }
    if (
      angle1 + angle2 > angle3 && angle2 + angle3 > angle1 && angle1 + angle3 > angle2  
    ){
     const s=((angle1+angle2+angle3)/2).toFixed(2);
     const area=Math.sqrt(s*((s-angle1)*(s-angle2)*(s-angle3))).toFixed(2);
     setresult(`Area of Triangle = ${area} sq. unit `); 
     setrescolor("lightgreen")
    }
    else{
      setresult("!Enter valid values");
      setrescolor("red");
    }
  }
  return (
    <div className='find'>
      <h2>Calculate Area of Triangle</h2>
      <input type="number" onChange={(event)=>{setangle1(Number(event.target.value))}} placeholder='Enter length of first side' id="angle1" />
      <input type="number" onChange={(event)=>{setangle2(Number(event.target.value))}} placeholder='Enter lenght of second side' id="angle2" />
      <input type="number" onChange={(event)=>{setangle3(Number(event.target.value))}} placeholder='Enter lenght of third side' id="angle3" />
      <button className='btn' style={{width:"100%"}} onClick={calculateArea}>CALCULATE AREA</button>
      <span style={{color:rescolor,marginBottom:"20px"}}>{result}</span>
      
    </div>
  )
}

export default Area