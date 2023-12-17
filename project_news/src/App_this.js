import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState('Gangdong-gu');
  const [dataPost, setDataPost] = useState({
    AVG_TEMP: null,
    AVG_HUMI: null,
    AVG_WIND_SPEED: null,
  });

  const fetchData = async () => {
    try {
      const response1 = await axios.get(
        `http://openapi.seoul.go.kr:8088/7262614b76776c64363379726a594b/json/IotVdata017/1/5/${selectedDistrict}`
      );
      setData(response1.data);
      const rowData = response1.data.IotVdata017.row[2];
      console.log(rowData.AVG_TEMP);
      setDataPost({
        AVG_TEMP: rowData.AVG_TEMP, // 평균 기온
        AVG_HUMI: rowData.AVG_HUMI, // 평균 습도
        AVG_WIND_SPEED: rowData.AVG_WIND_SPEED, // 평균 풍속
      });
      // const response2 = await axios.post('/data', dataPost);
      // const responseData = response2.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedDistrict]);

  const onDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div>
      <div>
        <select name="haengjeongdong" onChange={onDistrictChange} value={selectedDistrict}>
          <option value="Gangdong-gu">강동구</option>
          <option value="Songpa-gu">송파구</option>
        </select>
      </div>
      {data && <textarea rows={30} cols={80} value={JSON.stringify(data, null, 2)} readOnly={true} />}
      {dataPost && <input defaultValue={dataPost['AVG_TEMP'] !== null ? dataPost['AVG_TEMP'] : ''} />}
    </div>
  );
}

export default App;
