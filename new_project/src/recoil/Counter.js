import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { countState } from './Atom';

const Counter = () => {
  console.log("Counter 컴포넌트");

  const [count, setCount] = useRecoilState(countState);

  useEffect(() => {
    console.log("Counter 컴포넌트 useEffect");
    // 여기에 원하는 작업을 추가하십시오.
    // 버튼 클릭에 의한 상태 변경에만 반응하도록 하기 위해 count를 의존성 배열에 추가합니다.
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => { setCount(count + 1) }}>+</button>
      {count}
    </div>
  );
}

export default Counter;
