import postsData from '../data/postsData';
import {useParams} from 'react-router-dom';
import CommentSection from '../components/CommentSection';

const PostDetail = () => {
  const {id} = useParams();
  const post = postsData.find((p)=>p.id === parseInt(id, 10));
  if(!post) return(
    <div className="journalLayout">
      게시글을 찾을 수 없습니다.
    </div>
  );
  return (
    <div>
      <h2>{post.title}</h2>
      <div>
        작성자: {post.author} | 
        <span>{post.date}</span>
      </div>
      <p>
        <h2>본문</h2>
        <p>{post.body}</p>
      </p>
      <CommentSection/>
    </div>
  )
}

export default PostDetail