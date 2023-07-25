import React from "react";
import { useState } from "react";

const Recommend = (props) => {
    const [inputs, setInputs] = useState({
        title: '',
        description: ''
    });

    const {title, description} = inputs;

    const onChange = (e) => {
        // 이벤트를 부른 요소의 value와 name 키의 값 가져오기
        // name은 title이나 description
        // value는 그때의 텍스트
        const {value, name} = e.target;
        
        const nextInputs = {
            ...inputs,   // 기존 값 복사
            [name]: value   // 이 자리에 덮어 씌우기
        };
        // 객체를 새로운 상태로 쓰기
        setInputs(nextInputs);
    }

    return (
        <div>
            <h1>추천 작품</h1>
            <p>내가 봤던 가장 재미있는 {props.genre} 추천하기</p>
            <input 
                type="text"
                name="title"
                value={title}
                placeholder="제목을 입력하세요"
                onChange={onChange} />
            <br />
            <textarea
                name="decription"
                value={description}
                cols={30}
                rows={5}
                onChange={onChange} />
        </div>
    );
};

export default Recommend;