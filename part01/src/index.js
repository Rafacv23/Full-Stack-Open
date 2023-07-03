import React from 'react'
import ReactDOM from 'react-dom'
import Header from './containers/header'
import Content from './containers/content'
import Total from './containers/total'

const App = () => {
  const course = 'Half Stack application development'
  
  return (
    <div>
      <Header name={course}></Header>
      <Content></Content>
      <Total></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))