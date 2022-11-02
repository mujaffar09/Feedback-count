import React from 'react'
import { useState } from 'react'

const StatisticLine =({text,value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const Statistics =({good, neutral, bad})=>{
    const add = good + bad + neutral 
    const average = (good-bad)/add
    const positive =`${(good/add)*100}%`
    return(
        add>0?(
    <div>
        <h2>statistics</h2>
        <table>
          <tbody>
      <StatisticLine text ="good" value={good}/>
      <StatisticLine text ="neutral" value={neutral}/>
      <StatisticLine text ="bad" value={bad}/>
      <StatisticLine text ="add" value={add}/>
      <StatisticLine text ="average" value={average}/>
      <StatisticLine text ="positive" value={positive}/>
      </tbody>
      </table>
      </div>
        ) :<p>No feedback given</p>

)}

function Unicafe() {
    const [good,setGood] = useState(0)
    const[neutral,setNeutral]=useState(0)
    const[bad,setBad] = useState(0)
    const increment = (state,setState)=> ()=>setState(state+1)
    
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {increment(good,setGood)}>good</button>
      <button onClick = {increment(neutral,setNeutral)}>neutral</button>
      <button onClick = {increment(bad,setBad)}>bad</button>
      <Statistics good = {good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default Unicafe
