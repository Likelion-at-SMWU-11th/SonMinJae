import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Comments from './Comments';

const StyledButton = styled.button`
    background-color: white;
    border: none;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`

const CommentButton = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <StyledButton
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? "댓글 숨기기" : "댓글 보기"}
            </StyledButton>
            {visible && <Comments />}
        </div>
    );
};

export default CommentButton;