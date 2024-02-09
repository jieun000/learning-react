import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookProps from './practice02/BookProps';
import Number from './practice03/Number';
import StateNumber from './practice03/StateNumber';
import Logo from './practice03/Logo';
import Style from './practice03/Style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateNumber />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// 리액트 업데이트 되는 것들을 빠르게 적용 가능하게 해줄게요. (성능 코드)

// export default App;가 없음: 할아버지.
// export로 내보내면 import가 받음. 