import './App.css';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass.jsx'
import Counter from './components/Counter.jsx';
function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {/* <Hello student1="Siddhath" student2="Priyanka"/>
      <Hello student1="Preeti" /> */}
      {/* <HelloClass student1="Siddhath" /> */}

<Counter />
    </div>
  );
}

export default App;

/*
Components have 2  types:
1. Function based components
2. Class based components

    Class based components 
      - Previously - state and props 
      - addtional syntax 
      - overhead of 'this' keyword

    Function based components 
      - Previously - props (couldn't have its own state, with the coming of 'Hooks' -> create state in function based component. ) 
      - simple syntax
      - No 'this' keyword dependency

    
    Component re-render whenever there is a change in either
    1. state (Data which is private/specific to a single component)
    2. props (Data sent from parent component to child componenet)

 */