import React from 'react'
import Joke from './Joke'

function App() {
  return (
    <main>
      <Joke 
        joke={{
          question: 'Why did the chicken cross the road?', 
          punchLine: 'To get to the other side'}}
      />
      <Joke
        joke={{
          question: '',
          punchLine: 'It’s hard to explain puns to kleptomaniacs because they always take things literally.'
        }}
      />
      <Joke />
      <Joke />
      <Joke />
    </main>
  )
}


export default App