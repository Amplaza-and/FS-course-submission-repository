import {useState} from 'react'

const StatisticLine = (props) => {
  if (props.text === 'Positive'){
    return(
      <tr>
      <th scope="row">{props.text}</th>
      <td>{props.value} %</td>
      </tr>
    )
  }
  return(
    <tr>
    <th scope="row">{props.text}</th>
    <td>{props.value}</td>
    </tr>
  )

}
const Statistics = (props) => {
  if (props.allClicks.length === 0){
    return(
      <div>No feedback given</div>
    )
  }
  console.log(props)

  return (
    <div>
      <h1>Statistics</h1>
          <StatisticLine text= 'Good' value={props.good} />
          <StatisticLine text= 'Neutral' value={props.neutral} />
          <StatisticLine text= 'Bad' value={props.bad} />
          <StatisticLine text= 'All' value={props.allClicks.length} />
          <StatisticLine text= 'Average' value={props.average} />
          <StatisticLine text= 'Positive' value={props.good*100/props.allClicks.length} />
    </div>
  )
}
const History = (props) => {
  if (props.allClicks.lenght === 0){
    return(
      <div>the app is used by pressing the buttons</div>
    )
  }
return(
  <div>button press history:{props.allClicks.join(' ')}</div>
)
}
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)
const App =() => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
    const updatedGood = good +1
    const length = allClicks.length +1
    console.log(updatedGood)
    console.log(bad)
    console.log(length)
    setAverage((updatedGood - bad)/length)
  }
  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
    const updatedBad = bad +1
    const length = allClicks.length +1
    setAverage((good - updatedBad)/length)
  }

  return(
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <p>
      <Statistics good = {good} bad ={bad} neutral={neutral} average={average} allClicks={allClicks} />
      </p>
      <h1>History</h1>
      <History allClicks={allClicks} />
    </div>
  )

}
export default App
