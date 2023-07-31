import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const StyledButton = styled.button`
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.5;
    margin: 5px;
    color: black;
    border: none;
    box-shadow: 1px 1px 1px 1px #c7c7c7 inset;
    background-color: white;
    &:hover {
        background-color: orange;
    }
`

const LikeButton = () => {
    const [like, setLike] = useState(0);
    
    useEffect(() => {
        console.log('좋아요 1 증가');
    }, [like])
    

    return (
        <div>
            <StyledButton onClick={() => setLike(like + 1)}>👍 {like}</StyledButton>
        </div>
    );
};

export default LikeButton;