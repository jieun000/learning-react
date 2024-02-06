import React from 'react';
import Counter from './recoil/Counter';
import DisplayCounter from './recoil/DisplayCounter';

const App = () => {
  console.log("App 컴포넌트")
  
  return (
    <>
     <Counter />
     <DisplayCounter />
    </>
  );
};

export default App;
