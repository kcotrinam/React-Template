import {useState} from 'react';

const App = () => {
  const [state, setState] = useState(0)

  const incrementHandler = () => {
    setState(prev => prev + 1)
  }
  return(
    <>
      <h1>Welcome to React Template!!!</h1>
      <div>{state}</div>
      <button onClick={incrementHandler}>increment</button>
    </>
  )
}

export default App;