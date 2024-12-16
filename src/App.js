import './styles/global.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommentSection from './components/CommentSection';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  /* 
    1. 홈페이지(Home): 사이트 소개
    2. 게시글 목록(Posts): 게시글 나열, 클릭하면 상세 페이지로 이동, 게시글 좋아요 기능
    3. 게시글 상세(PostDetail): 글쓴이, 본문, 날짜, 댓글 추가기능 제공
    4. 404페이지(NotFound): 사용자가 경로를 잘못 입력했을 때
    5. 댓글 기능(CommentSection): 상세페이지에서 댓글 추가할 수 있음, 추가됐을 때 목록에 나타남, 버튼은 토글 기능
  */
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pages" element={<Posts />}/>
          <Route path="/posts/:id" element={<PostDetail />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="*" element={<NotFound />}/>
          {/* 
            Route path=""
            path 라우딩 경로 설정 쓸 때: 특정 URL경로와 컴포넌트 매칭
            NavLink to "" 라우터에서 내비게이션
            css 수정 가능, 삼항연산자 사용 가능
            Link to = "" a태그와 동일하지만 새로고침 X
            a새로고침 외부로 이동
          */}
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
