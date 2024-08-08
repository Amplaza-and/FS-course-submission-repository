import {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const getRandomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

const votes = Array(7).fill(0)

const AnecdoteMostVoted = (props) => {
  if (props.votes[props.mostVoted] === 0){
    return(
      <p>None of the anecdotes have been voted</p>
    )
  }
  return(
    <div>
      <h1>Anecdote with more votes</h1>
      <p>{props.anecdotes[props.mostVoted]} has {props.votes[props.mostVoted]} votes</p>
    </div>
  )   

}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [maxVotes, setMaxVotes] = useState(0)

  const handleNextClick = () => {
    const randomInteger = getRandomInteger(0,7)
    console.log(randomInteger)
    setSelected(randomInteger)
  }
  const handleVoteClick = () => {
    votes[selected] +=1
    const updatedVotes = votes
    setMostVoted(updatedVotes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0))
    setMaxVotes(votes[mostVoted])
    console.log(updatedVotes)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>
        <Button handleClick= {handleVoteClick} text='Vote' />
        <Button handleClick= {handleNextClick} text='Next anecdote' />
      </p>
      <AnecdoteMostVoted anecdotes= {anecdotes} votes = {votes} mostVoted= {mostVoted} />
    </div>
  )
}

export default App
