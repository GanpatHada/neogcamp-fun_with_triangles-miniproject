import React, { useState } from 'react'
const Angle = () => {
  const [angle1, setangle1] = useState("");
  const [angle2, setangle2] = useState("");
  const [angle3, setangle3] = useState("");
  const [result, setresult] = useState("");
  const [rescolor, setrescolor] = useState("");
  const checkTriangle=()=>{
    if(angle1===""||angle2===""||angle3===""){
      setrescolor("red");
      return setresult("Please fill all fields");
   }
    if(angle1===0||angle2===0||angle3===0){
       setrescolor("red");
       return setresult("angles can't be zero");
    }
     if(angle1<0||angle2<0||angle3<0){
        setrescolor("red");
        return setresult("angles can't be negative");
     }
     if(angle1+angle2+angle3===180)
     {
        setrescolor("green");
        setresult("Yay, the angles form a triangle!");
     }
     else{
        setrescolor("red");
        setresult("Opps, the angles does not form a triangle!");
     }
  }
  return (
    <div className='find'>
      <h2>Angles of Triangle</h2>
      <input type="number" onChange={(event)=>{setangle1(Number(event.target.value))}}  placeholder='Enter angle 1' id="angle1" />
      <input type="number" onChange={(event)=>{setangle2(Number(event.target.value))}} placeholder='Enter angle 2' id="angle2" />
      <input type="number" onChange={(event)=>{setangle3(Number(event.target.value))}} placeholder='Enter angle 3' id="angle3" />
      <button className='btn' style={{width:"100%"}} onClick={checkTriangle}>CHECK</button>
      <span style={{color:rescolor,marginBottom:"20px"}}>{result}</span>
      
    </div>
  )
}

export default Angle