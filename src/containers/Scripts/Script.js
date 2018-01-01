import React, { Component } from 'react'
import data from './data.txt'


function reduceFile (input) {
  console.log(input)
}

class Script extends Component {
  
  runScriptHandler() {
    
    fetch(data).then(d => {
      
      d.text().then(t => reduceFile(t))
  
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.runScriptHandler}>Run Script</button>
      </div>
    )
  }
}

export default Script