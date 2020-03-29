import React, { useState, useEffect } from "react";
import axios from "axios";
import Iotd from "./Iotd";

function IotdCard() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=2AMaC9czdra03KX4EyBpSlnoNCWNp22arV7rRhoa`
      )
      .then(response => {
        console.log(response);
        setContent(response.data);
      });
  }, []);
  return (
    <div>
      <Iotd iotd={content} />
    </div>
  );
}

export default IotdCard;
