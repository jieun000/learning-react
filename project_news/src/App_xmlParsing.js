import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const response = await fetch('http://openapi.seoul.go.kr:8088/4b4f4d464369736a35384a41445252/xml/SpotInfo/1/1000/');
        const xmlData = await response.text();

        // XML 파싱
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        const rows = xmlDoc.querySelectorAll('row');

        // 딕셔너리 생성
        const newData = {};
        rows.forEach((row, index) => {
          const spotNum = row.querySelector('spot_num').textContent;
          const spotNm = row.querySelector('spot_nm').textContent;
          const grs80tmX = row.querySelector('grs80tm_x').textContent;
          const grs80tmY = row.querySelector('grs80tm_y').textContent;

          newData[index + 1] = {
            spot_num: spotNum,
            spot_nm: spotNm,
            grs80tm_x: grs80tmX,
            grs80tm_y: grs80tmY,
          };
        });

        // 딕셔너리 상태 업데이트
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
