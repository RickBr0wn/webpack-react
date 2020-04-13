import React from 'react'
import styled from 'styled-components'

const StyledApp = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #c2bbf0;
  color: #f1e3f3;

  h1 {
    font-size: 64px;
  }
`

const App = () => {
  return (
    <StyledApp data-testid="app">
      <h1>Webpack & React</h1>
      <h2>a minimal boilerplate.</h2>
      <h3>by Rick Brown</h3>
    </StyledApp>
  )
}

export default App
