import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const AnimationList = () => {
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/animations")
      .then(response => {
        setAnimations(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>애니메이션 리스트</h1>
      <ul>
        {animations.map(animation => (
          <li key={animation.id}>
            <h2>{animation.title}</h2>
            <p>{animation.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimationList;
