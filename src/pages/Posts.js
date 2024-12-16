import React, {useState} from 'react' //리액트에서 react와 useState를 가져옴 (react는 생략 가능)
import {Link} from 'react-router-dom';
import postsData from '../data/postsData';


const Posts = () => {
  let [likes, setLikes] = useState(postsData.map(()=>false));
  const toggleLike = (index) => {
    setLikes((prevLikes)=>prevLikes.map((like, i)=>(i===index ? !like : like)))
  }
  return (
    <div className="posts journalLayout">
      <h2>기록 목록</h2>
      <ul>
        {postsData.map((post, index)=>(
          <li key={post.id} className="postItem">
            <div className="postCard">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="postMeta">
                <button 
                  className={
                    likes[index]?"liked" : "likeBtn"
                  } 
                  onClick={()=>toggleLike(index)}
                >
                  {likes[index]?"🤍":"💖"}
                </button>
                <Link to={`/posts/${post.id}`}>더보기</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts