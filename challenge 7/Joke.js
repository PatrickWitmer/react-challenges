import React from 'react'

function Joke(props) {

  const question = props.joke.question;

  if(question) {
  return (
    <section>
      <p>Question: {props.joke.question}</p>
      <p>Punch Line: {props.joke.punchLine}</p>
    </section>
  )  
  } else {
    return (
    <section>
      <p>Punch Line: {props.joke.punchLine}</p>
    </section>
    )
  }    
}

export default Joke
