import React from 'react'

const Number = () => {
    let count = 0;
    const plus = ()=> {
        count = count + 1;
        console.log(count);
    }
    const minus = ()=> {
        count = count - 1;
        console.log(count);
    }
  return (
    <div className='container'>
        <h2 className='int'>{count}</h2>
        <button className='plus' onClick={plus}>+</button>
        <button className='minus' onClick={minus}>-</button>
    </div>
  );
};

export default Number