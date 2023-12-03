import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  let [제목, 제목변경] = useState(['서울 미세먼지', '부산 미세먼지', '인천 미세먼지', '대구 미세먼지', '대전 미세먼지', '광주시 미세먼지', '울산시 미세먼지', '세종시 미세먼지', '경기도 미세먼지', '강원도 미세먼지', '충청도 미세먼지', '전라도 미세먼지', '경상도 미세먼지'])
  let [좋아요, 좋아요변경] = useState(0);
  let [싫어요, 싫어요변경] = useState(0);
  let listDust = '서울 미세먼지';
  let city = ['0_seoul.svg', '1_Busan.svg', '2_Incheon.svg', '3_Daegu.svg', '4_Daejeon.svg', '5_Gwangju.svg', '6_Ulsan.svg', '7_Sejong.svg', '8_Gyeonggi.svg', '9_Gangwon.svg', '10_Chungcheongbuk-do.svg', '10_Chungcheongnam-do.svg', '11_Jeollabuk-do.svg', '11_Jeollanam-do.svg', '12_Gyeongsangbuk-do.svg', '13_Gyeongsangnam-do.svg']
  let [변수, 교체용] = useState(' 숫자가 옆으로 늘어나기를 ');
  const fun = ()=> {return('useEffect 눌림')};
  useEffect(()=> {
    alert(fun());
  }, [변수]);
  
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={{color : 'white', fontSize : '25px'}}>미세먼지 알림이<span onClick={()=> {교체용(변수 + '1')}}>{변수}</span></div>
      </div>
      <div className='list'>
        <h3> {제목[0]} <span onClick={()=> {좋아요변경(좋아요 + 1)}}>👍</span>{좋아요} <span onClick={()=> {싫어요변경(싫어요 - 1)}}>👎</span>{싫어요}  </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[0]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[1]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[1]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[2]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[2]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[3]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[3]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[4]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[4]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[5]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[5]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[6]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[6]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[7]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[7]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[8]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[8]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[9]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[9]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[10]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[10]} style={{width: '25px'}} ></img><img src={city[11]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[11]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[12]} ></img><img src={city[13]} ></img></div>
        <hr />
      </div>
      <div className='list'>
        <h3> {제목[12]} </h3>
        <p>12월 3일 발행</p>
        <div><img src={city[14]} ></img><img src={city[15]} ></img></div>
        <hr />
      </div>
    </div>
  );
}


export default App;