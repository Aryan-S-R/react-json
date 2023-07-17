import React, { useState } from 'react';

const Digital = () => {

    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();

    const [atime,setAtime] = useState();
    const [sdate,setSdate] = useState();

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setAtime(time);
    }

    const UpdateDate = () => {
        date = new Date().toLocaleDateString();
        setSdate(date);
    }

    setInterval(UpdateTime,1000);
    setInterval(UpdateDate);

  return (
    <>
     <h1>{atime}</h1>
     <h2>{sdate}</h2>
     </>
  );
};

export default Digital