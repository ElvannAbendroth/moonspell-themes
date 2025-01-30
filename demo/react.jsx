import React from 'react'
import './App.css'

const gemstones = [
  { name: 'Diamond', color: 'White' },
  { name: 'Ruby', color: 'Red' },
  { name: 'Sapphire', color: 'Blue' },
  { name: 'Emerald', color: 'Green' },
]

class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <h1>Gemstones</h1>
        <ul>
          {gemstones.map((gemstone, index) => (
            <li key={index}>
              {gemstone.name} - {gemstone.color}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
