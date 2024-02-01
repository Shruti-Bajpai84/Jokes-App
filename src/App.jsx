import { useEffect, useState } from 'react'
import './App.css'
import './Jokes.css'

function App() {

  const [count, setData] = useState()
  const [joke, setJoke] = useState("")

  function jokes() {
    fetch("https://v2.jokeapi.dev/joke/Any")

      .then((response) => {
        return response.json()

      }).then((data) => {
        if (data.type === "single") {
          return(setData(data.joke), setJoke(""))
        } else {
          return setData(data.delivery), setJoke(data.setup)
        }
        // setData(data.type)
        console.log(data);
      })

  }
  useEffect(() => {
    jokes()

  }, [])

  return (
    <>
      <h1><u>:JOKES:</u></h1>
      <div className='joke'>
      <p>{count}</p>
      <p>{joke}</p>
      </div>

      <button className='joke-button' onClick={jokes}>TELL ME NEXT JOKE</button>
    </>

  )
}
export default App
