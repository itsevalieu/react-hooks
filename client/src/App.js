import React from 'react';
import './App.css';

// useState component examples
// import ClassCounter from './components/UseStateExamples/ClassCounter';
// import HookCounter from './components/UseStateExamples/HookCounter';
// import HookCounterTwo from './components/UseStateExamples/HookCounterTwo';
// import HookCounterThree from './components/UseStateExamples/HookCounterThree';
// import HookCounterFour from './components/UseStateExamples/HookCounterFour';

// useEffect component examples
// import ClassCounterOne from './components/UseEffectExamples/ClassCounterOne';
// import EffectHookCounterOne from './components/UseEffectExamples/EffectHookCounterOne';
// import ClassMouse from './components/UseEffectExamples/ClassMouse';
// import HookMous from './components/UseEffectExamples/HookMouse';
// import MouseContainer from './components/UseEffectExamples/MouseContainer';
// import IntervalHookCounter from './components/UseEffectExamples/IntervalHookCounter';
// import IntervalClassCounter from './components/UseEffectExamples/IntervalClassCounter';
// import DataFetching from './components/DataFetching';

//useContext component examples
// import ComponentC from './components/UseContextExamples/ComponentC';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

//useReducer component examples
import CounterOne from './components/UseReducerExamples/CounterOne';
import CounterTwo from './components/UseReducerExamples/CounterTwo';

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
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}
      <CounterTwo />
    </div>
  );
}

export default App;