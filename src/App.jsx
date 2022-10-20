import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TokenCard from './TokenCard'

function App() {
  const [tokenList, setTokenList] = useState({})
  const [filtered, setFiltered] = useState("")

  useEffect(() => {
    fetch('https://api.1inch.io/v4.0/1/tokens').then((response) => response.json())
      .then((data) => {
        setTokenList(data.tokens)
        // console.log(data.tokens)
      });
  })

  const filterTokens = (arr, input) => {
    return arr.filter(token => token.includes(input))
  }


  return (
    <div className="App">
      <input type="text" name="search" id="search" onChange={e => {
        setFiltered(e.target.value)
        console.log(Object.entries(tokenList))
      }}/>
      {
        Object.entries(tokenList).map(([key, value]) => {
          return (
            <TokenCard
              key={key}
              value={value}
            />
          )
        })
      }
    </div>
  )
}

export default App
