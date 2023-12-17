import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <div style={{griColumn: '1 / 2', border: '5px solid pink',  borderRadius: '15px'}}>1번째 영역을 잡아준 div
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      <div style={{textAlign: 'center'}}>첫 번째 공간</div>
      </div>
      <div style={{griColumn: '1 / 2', border: '5px solid green',  borderRadius: '15px'}}>2번째 영역을 잡아준 div
        <div style={{textAlign: 'center'}}>두 번째 공간</div>
      </div>
    </div>
  );
}

export default App;
