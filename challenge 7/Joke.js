import React from 'react'

function Joke(props) {

  const question = props.joke.question;

  return (
    <section>
      {question.length > 0 && <p>Question: {props.joke.question}</p>}
      <p>Punch Line: {props.joke.punchLine}</p>
    </section>
  )  
}  


export default Joke
