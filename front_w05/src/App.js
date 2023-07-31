import './App.css';
import CommentButton from './CommentButton';
import LikeButton from './LikeButton';
import Logo from './Logo';
import styled from 'styled-components';

const Contents = styled.div`
  margin-left: 30px;
  margin-top: 30px;
`

function App() {
  return (
    <div>
      <Logo />
      <Contents>
        <h3>프론트 5주차 과제 공지</h3>
        <p>Styled Components 활용하여 나만의 게시판 만들기!</p>
        <ol>
          <li>Styled Components를 활용한 button  요소를 두 개 이상 만들어보기</li>
          <li>Styled Components를 버튼이 아닌 다른 요소에도 적용해보기</li>
          <li>Github에 담당 운영진 태그 후 Push하기</li>
          <li>TECHIT 'React 애플스토어 클론' 강의 챕터 1-3 수강 후 인증하기</li>
        </ol>
      
        <LikeButton />
        <hr />
        <CommentButton />
      </Contents>
    </div>
  );
}

export default App;
