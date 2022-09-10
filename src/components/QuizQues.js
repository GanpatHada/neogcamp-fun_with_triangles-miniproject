import React, { useState} from 'react'
import { ques } from './QuizMaterials'
import { answerlist } from './QuizMaterials'
const QuizQues = () => {
    const answers=new Array(10).fill(null);
    const[result,setresult]=useState('');
    const[color,setcolor]=useState('');
    const[btnstate,setbtnstate]=useState('block');
    const getAnswers=(e)=>{
        e.preventDefault();
        let count=0;
        for(let i=0;i<10;i++)
        {
            if(answerlist[i]===answers[i])
               count++
               
        }
        setresult(`Marks Obtained ${count} out of 10`);
        setbtnstate('none');
        if(count<3)
           setcolor("red");
        else setcolor("green");   
         
    }
    return (
        <>
        <div>
            {ques.map((el, mainindex) => {
                return (

                    <div className="questions" key={mainindex}>
                        
                        <p><span>{mainindex + 1}. </span>{el.ques}</p>
                        <form>
                        {el.answer.map((el, index) => {
                            return (
                                <div key={index}>
                                    <input type="radio" onClick={event=>answers[mainindex]=event.target.value}
                                        name="name" value={el} />&nbsp;&nbsp;
                                    <label>{el}</label>
                                </div>
                            )
                        }
                        )
                        }
                        </form>
                    </div>
                    
                )
            })

            }
        </div>
        <div>
           <button className='btn' style={{display:btnstate}} onClick={getAnswers}>submit</button>
        </div>
        <div>
            <p style={{color}}>{result}</p>
        </div>
      </>
    )
}

export default QuizQues