import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  let list = '강북 미세먼지';
  let [제목, 제목변경] = useState(['경기 미세먼지', '대구 미세먼지', '경북 미세먼지']);
  let [좋아요, 좋아요변경] = useState(0);
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color: 'white', fontSize: '25px'}} className={list}>미세먼지 알림이</div>
      </div>
      <div className='list'>
        <h3> {제목[0]} <span onClick={()=> {좋아요변경(좋아요 + 1)}}>👍</span>{좋아요} </h3>
        <p>12월 2일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[1]} </h3>
        <p>12월 2일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[2]} </h3>
        <p>12월 2일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
