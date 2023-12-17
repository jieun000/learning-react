import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

const MomentDate  = () => {
  const nowTime = Date.now();
  // interval 30초
  // return <Moment interval = { 30000 }>{nowTime}</Moment>;
  // interval disable
  return <Moment interval = { 60000 } format="YYYY-MM-DD HH:mm">{nowTime}</Moment>;
}

function App() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState('Gangdong-gu');
  const [dataPost, setDataPost] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://openapi.seoul.go.kr:8088/7262614b76776c64363379726a594b/xml/SpotInfo/1/100/`
      ); // http://openapi.seoul.go.kr:8088/7262614b76776c64363379726a594b/xml/VolInfo/1/5/A-02/20231213/09/
      setData(response.data);
      const xmlString = response.data;
      const match = xmlString.match(/<prcs_spd>([\d.]+)<\/prcs_spd>/);
      const spdValue = match ? match[1] : null;
      console.log(spdValue);
    } catch (e) {
      console.error(e);
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
      <div>
        <p>Data Post: <MomentDate /></p>
        <pre>{JSON.stringify(dataPost, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
