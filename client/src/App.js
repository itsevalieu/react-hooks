import React from 'react';
import './App.css';
import ClassCounter from './components/UseStateExamples/ClassCounter';
import HookCounter from './components/UseStateExamples/HookCounter';
import HookCounterTwo from './components/UseStateExamples/HookCounterTwo';
import HookCounterThree from './components/UseStateExamples/HookCounterThree';
import HookCounterFour from './components/UseStateExamples/HookCounterFour';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      <HookCounterFour />
    </div>
  );
}

export default App;
