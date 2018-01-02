import React, { Component } from 'react'
import data from './data.txt'

function reduceFile( input ) {
  let output = input
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce(( customers, line ) => {
      
      // if (!customers[line[0]]) {
      //   customers[line[0]] = []
      // }
      
      customers[line[0]] = customers[line[0]] || []
      customers[line[0]].push({ name: line[1], price: line[2], count: line[3] })
      return customers
    }, {})
  
  return output
}

class Script extends Component {
  
  runScriptHandler() {
    
    fetch(data)
      .then(d => {
        
        d.text().then(t => {
          
          console.log('output', JSON.stringify(reduceFile(t), null, 2))
        })
        
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