import React from 'react'
import Quiz from './Quiz'
import { Routes,Route } from 'react-router-dom'
import Area from './Area'
import Hypotenuse from './Hypotenuse'
import Angle from './Angle'
const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/area" element={<Area/>}></Route>
        <Route exact path="/" element={<Quiz/>}></Route>
        <Route exact path="/isTriangle" element={<Angle/>}></Route>
        <Route exact path="/hypotenuse" element={<Hypotenuse/>}></Route>
      </Routes>     
    </main>
  )
}

export default Main