import './App.css';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass.jsx'
function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Hello />
      <HelloClass />
    </div>
  );
}

export default App;

/*
Components have 2  types:
1. Function based components
2. Class based components

    Class based components - state and props
    Function based components - props (couldn't have its own state)
    with the coming of 'Hooks' -> create state in function based component 
 */