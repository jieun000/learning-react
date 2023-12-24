import React from 'react';
import { Imports } from './Imports';

const App = () => {

  // 1. 템플릿 문자열 (Template literals)
  // 따옴표와 달리 백틱 안에서는 줄바꿈이 반영. 
  // 문자열 사이에 변수나 연산을 넣을 때는 ${} 사이에 표현식을 삽입
  var templateLiterals = "템플릿 문자열";
  console.log(`1번 문제 ${templateLiterals}입니다.`);

  // 2. 클래스 
  class ClassName {
    constructor(number) {
      this.number = number;
    }
    numberPlus() {  // 메서드 생성
      return this.number + 1;
    }
  }
  var classInstance = new ClassName(2);
  console.log(`2번 문제 ${classInstance.numberPlus()}입니다.`);

  // 3. 화살표 함수
  // 함수 표현식을 보다 단순하고 간결한 작성하는 문법
  // 기본 함수 형식
  // 화살표 함수 형식
  let arrowFunc = (a, b, c) => a + b - c;
  console.log(`3번 문제 ${arrowFunc(1, 2, 10)}입니다.`);

  // 4. 구조분해할당 (destructing)
  const destructing = {one: 'oneValue', two: 5, three: 3.12};
  const { one, two, three } = destructing;
  console.log(`4번 문제 ${one} & ${two} & ${three}입니다.`);

  // 5. 배열 함수 (map, forEach, reduce)
  const arr = [1, 2, 3, 4, 5]; // 요소, 인덱스, 배열
  // map
  var mapFunc = arr.map((e, index, arr) => `${index}: ${e + 1}`);
  console.log('기존 arr: ' + arr);
  console.log('map 함수: ' + mapFunc);
  // forEach
  arr.forEach((e, index) => console.log(`forEach Index ${index}: ${e}`));
  arr.forEach((e, index, array) => array[index] = e * 2);
  console.log('forEach로 초기 arr 변경', arr); 
  // reduce
  const reduceFunc = arr.reduce((prev, curr, index, element) => prev + curr , 0);
  console.log('reduce 함수:', reduceFunc);
  const defaultArr = []
  arr.reduce((prev, curr, index, element) => defaultArr.push(curr + index), defaultArr);
  console.log('reduce 함수 응용:', defaultArr);

  // 6. 라이브러리 의존성 관리
  console.log(Imports(25, 75));
  
  // 7. 가변(let, var) vs 불변(const) 변수
  const a = 1; // 블럭 범위, 범위 내에서만 사용
  let b = 2; // 블럭 범위, 범위 내에서만 사용
  b = 3;
  var c = 4;
  c = 5
  var c = 6;

  return (<>
    <div>ES6 문법</div>
  </>);
};

export default App;
