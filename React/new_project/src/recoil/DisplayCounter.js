import React, { useState, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { countState } from './Atom';

const DisplayCounter = () => {
    console.log("DisplayCounter 컴포넌트")
    const [count, setCount] = useRecoilState(countState);// atom의 변수명
    return (<>{count}</>)
}

export default DisplayCounter