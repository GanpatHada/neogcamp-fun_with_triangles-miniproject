import React, { useState } from 'react'
const Area = () => {
  const [side1, setside1] = useState("");
  const [side2, setside2] = useState("");
  const [side3, setside3] = useState("");
  const [result, setresult] = useState("");
  const [rescolor, setrescolor] = useState("");
  const calculateArea=()=>{
    if(side1===""||side2===""||side3===""){
      setrescolor("red");
      return setresult("Please fill all fields");
    }
    if(side1===0||side2===0||side3===0){
      setrescolor("red");
      return setresult("length can't be zero");
    }
    if(side1<0||side2<0||side3<0){
      setrescolor("red");
      return setresult("length can't be negative");
    }
    if (
      side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2  
    ){
     const s=((side1+side2+side3)/2).toFixed(2);
     const area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3))).toFixed(2);
     setresult(`Area of Triangle = ${area} sq. unit `); 
     setrescolor("lightgreen")
    }
    else{
      setresult("sum of two sides must be greater then third side");
      setrescolor("red");
    }
  }
  return (
    <div className='find'>
      <h2>Calculate Area of Triangle</h2>
      <input type="number" onChange={(event)=>{setside1(Number(event.target.value))}} placeholder='Enter length of first side' id="side1" />
      <input type="number" onChange={(event)=>{setside2(Number(event.target.value))}} placeholder='Enter lenght of second side' id="side2" />
      <input type="number" onChange={(event)=>{setside3(Number(event.target.value))}} placeholder='Enter lenght of third side' id="side3" />
      <button className='btn' style={{width:"100%"}} onClick={calculateArea}>CALCULATE AREA</button>
      <span style={{color:rescolor,marginBottom:"20px"}}>{result}</span>
      
    </div>
  )
}

export default Area