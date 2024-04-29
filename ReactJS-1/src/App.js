import './App.css';
import ChildComponent1 from './components/ChildComponent1';
import ChildComponent2 from './components/ChildComponent2';
import ChildComponent3  from './components/ChildComponent3';
function App() {
  return (
    <div className="App">
      We are learing React
      <br />
      React is Osm !
      <ChildComponent1 />
      <ChildComponent2></ChildComponent2>

      <ChildComponent3 />
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


    XML = Extensible Markup Language 
*/