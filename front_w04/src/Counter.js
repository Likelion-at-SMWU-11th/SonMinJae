import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  // 0을 초기값으로 하는 state 생성
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("useEffect 실행!");
  }, [state]);

  return (
    <div>
      <h1>State 값: {state}</h1>
      {/*setState를 사용하여 state의 값을 1씩 증가시킴*/}
      <button onClick={() => setState(state + 1)}>1씩 증가</button>
    </div>
  );
};

export default Counter;
