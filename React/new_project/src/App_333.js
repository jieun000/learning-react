import React, { useState, useEffect } from 'react';

const App = () => {
  const [temp, setTemp] = useState(0);

  // 컴포넌트가 렌더링되고 나서 이벤트 핸들러, useEffect, 비동기 함수 등 내에서 호출해야 합니다.
  // 여기서는 예시로 useEffect를 사용합니다.
  useEffect(() => {
    setTemp(2);
  }, []);

  console.log(temp);

  return (
    <>
      {/* 화면에 렌더링할 내용 */}
    </>
  );
};

export default App;
