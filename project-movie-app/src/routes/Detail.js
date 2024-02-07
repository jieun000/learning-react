import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('location:', location);
    if (location.state === undefined) {
      navigate('/');
    }
  }, [location, navigate]);

  return location.state ? <div style={{textAlign: 'center'}}><span>{location.state.title}</span></div> : null;
};

export default Detail;
