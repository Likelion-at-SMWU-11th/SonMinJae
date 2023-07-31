import React from 'react';
import styled from 'styled-components';

const User = styled.p`
    margin-left: 10px;
`

const Comment = styled.div`
    margin-left: 10px;
    margin-top: -5px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;
    width: 700px;
`

const Comments = () => {

    return (
        <div>
            <User>🦁 11기 아기사자 손민재</User>
            <Comment>전 이번에 다양한 요소에 Styled Component를 적용해보았어요!
                버튼을 제외하고는 div와 p에 적용을 해보았고, 지난 세미나 때 배웠던 useState와 useEffect도 한 번 사용해봤어요!
                '댓글 보기' 버튼을 누르면 댓글창 컴포넌트가 보이는 이벤트도 추가해보았어요^__^
            </Comment>
        </div>
    );
};

export default Comments;