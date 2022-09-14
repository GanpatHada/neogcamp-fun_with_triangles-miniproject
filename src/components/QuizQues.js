import React, { useState} from 'react'
import { ques } from './QuizMaterials'
import { answerlist } from './QuizMaterials'
import { youranswers } from './QuizMaterials'
const QuizQues = () => {
    const answers=new Array(10).fill(null);
    const[border, setborder] = useState(false)
    const[result,setresult]=useState('');
    const[color,setcolor]=useState('');
    const[btnstate,setbtnstate]=useState('block');
    const getAnswers=(e)=>{
        e.preventDefault();
        let count=0;
        for(let i=0;i<answerlist.length;i++)
        {
            if(answerlist[i]===answers[i])
              {   youranswers.push(i+1);
                  count++;

              }
           
               
        }
        setresult(`Marks Obtained ${count} out of 10`);
        setbtnstate('none');
        if(count<3)
           setcolor("crimson");
        else setcolor("#6bd606");
        setborder(true);     
         
    }
    const get=(mainindex)=>{
           if(youranswers.includes(mainindex+1))
             return "#6bd606"
           return "crimson"  
    }
    return (
        <>
        <div>
            {ques.map((el, mainindex) => {
                return (

                    <div className="questions" style={{border:`${(border?`1px solid ${get(mainindex)}`:'none')}` }} key={mainindex}>
                        
                        <p><span>{mainindex + 1}. </span>{el.ques}</p>
                        <form>
                        {el.answer.map((el, index) => {
                            return (
                                <div key={index}>
                                    <input type="radio" style={{accentColor:`${border?get(mainindex):'#6bd606'}`}} onClick={event=>answers[mainindex]=event.target.value}
                                        name="name" value={el} />&nbsp;&nbsp;
                                    <label>{el}</label>
                                </div>
                            )
                        }
                        )
                        }
                        </form>
                        <p style={{color:"#6bd606",paddingTop:"20px",display:(get(mainindex)==="crimson"?'block':"none")}}>{(get(mainindex)==="crimson"&&border)&&`Correct answer is "${answerlist[mainindex]}"`}</p>
                        <div style={{display:`${(border?'block':'none')}`}} id="wrapper">

                        </div>
                    </div>
                    
                )
            })

            }
        </div>
        <div>
           <button className='btn' style={{display:btnstate}} onClick={getAnswers}>SUBMIT</button>
        </div>
        <div style={{display:"flex"}}>
            <p style={{color,fontWeight:"bold"}}>{`${result}`}</p>&nbsp;
            {
                border&&<span><a id="retake" href="/">Retake Test</a></span>
            }
        </div>
      </>
    )
}

export default QuizQues