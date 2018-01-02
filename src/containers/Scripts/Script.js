import React, { Component } from 'react'
import data from './data.txt'
import categories from './animal_categories'

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

let dragon = (name, size, element) =>
  name + ' is a ' +
  size + ' dragon that breathes ' +
  element + '!'

let carryDragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

let countDownFrom = (n) => {
  
  if (n === 0) return
  
  console.log(n)
  
  countDownFrom(n - 1)
}

let makeTree = (categories, parent) => {
  
  let node = {}
  
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id))
  
  return node
}

class Script extends Component {
  
  runReduceHandler() {
    
    fetch(data)
      .then(d => {
        
        d.text().then(t => {
          
          console.log('output', JSON.stringify(reduceFile(t), null, 2))
        })
        
      })
  }
  
  runCurryingHandler() {
    console.log(dragon('Pet', 'Huge', 'Fireballs'))
    console.log(carryDragon('Vasia')('Small')('Snakes'))
  }
  
  runRecursionHandler() {
    // countDownFrom(10)
    console.log(makeTree(categories, null))
  }
  
  render() {
    return (
      <div>
        <button onClick={this.runReduceHandler}>Run Reduce</button>
        <button onClick={this.runCurryingHandler}>Run Currying</button>
        <button onClick={this.runRecursionHandler}>Run Recursion</button>
      </div>
    )
  }
}

export default Script