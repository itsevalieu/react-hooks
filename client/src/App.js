import React from 'react';
import './App.css';
// useState component examples
import ClassCounter from './components/UseStateExamples/ClassCounter';
import HookCounter from './components/UseStateExamples/HookCounter';
import HookCounterTwo from './components/UseStateExamples/HookCounterTwo';
import HookCounterThree from './components/UseStateExamples/HookCounterThree';
import HookCounterFour from './components/UseStateExamples/HookCounterFour';
// useEffect component examples
import ClassCounterOne from './components/UseEffectExamples/ClassCounterOne';
import EffectHookCounterOne from './components/UseEffectExamples/EffectHookCounterOne';
import ClassMouse from './components/UseEffectExamples/ClassMouse';
import HookMouse from './components/UseEffectExamples/HookMouse';


function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}

      {/* <ClassCounterOne /> */}
      {/* <EffectHookCounterOne /> */}
      {/* <ClassMouse />*/}
      <HookMouse />

    </div>
  );
}

export default App;
