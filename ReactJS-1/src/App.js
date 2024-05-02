import './App.css';
// import ChildCompoent1 from './components/ChildComponent1/ChildComponent1';
// import ChildCompoent2 from './components/ChildComponent2';
// import ChildComponent3 from './components/ChildComponent3';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1> App </h1>
      {/* <ChildCompoent1 />
      <ChildCompoent2> </ChildCompoent2>
      <ChildComponent3 /> */}
      <Counter />
    </div>

  );
}


export default App;

/*
    Components - 
    types :-
    1. Class Based Components
    2. Function Based Componets

    - Components can be considered as sub-sections (small UI Pieces) inside the entire application
    - Return JSX (JavaScript + XML)
    - Can be Nested
    - Can be Re-Used

    Fragments :-Empty JSX tags (used for nesting multiple elements inside a single parent to be returned by the component)

    React follow 'one-way binding'

    A component re-renders whenever there is a change in
    1. props (Relate this with parameters in function based components)

    -  Data which passed from the parent component down to the child component.
    - Relate this with parameters in function based components.

    XML = Extensible Markup Language 
*/