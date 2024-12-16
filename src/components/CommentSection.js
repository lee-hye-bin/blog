import React, {useState} from 'react'

const CommentSection = () => {
  /* 
    useState
    댓글 배열
    새 댓글 텍스트
    댓글 보이기, 숨기기
    수정 댓글 인덱스
    수정된 댓글 텍스트
  */
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showComment, setShowComment] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [like, setLike] = useState(0);

  /* 
    함수
    댓글 추가, 보이기, 숨기기, 댓글 수정, 수정된 댓글 저장, 삭제
  */

  /* handle */
  //댓글 추가
  const handdleAddComments = () => {
    //댓글 추가
    if(newComment.trim()){ //댓글이 비어있지 않으면
      setComments([...comments, {text: newComment, id:Date.now()}]); //댓글 추가
      setNewComment(""); //새 댓글로 텍스트 초기화
    }
  };
  const ToggleComments = () => {
    //댓글 보이기 숨기기
    setShowComment(!showComment);
  };
  const handdleEditComments = (index) => {
    //댓글 수정
    setEditIndex(index); //수정할 댓글 인덱스를 저장
    setEditText(comments[index].text);
  };
  const handdleSaveEdit = () => {
    //수정된 댓글 저장
    if(editText.trim()){ //텍스트가 비어있지 않으면
      setComments((prevComments)=>{
        const updatedComments = [...prevComments];
        updatedComments[editIndex].text = editIndex;
        return updatedComments
      }); //수정된 댓글 배열로 저장
      setEditIndex(null); //index 초기화
      setEditText(''); //text초기화
    }
  };
  const handdleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="commentWrap">
      <button className="commentToggleBtn" onClick={ToggleComments}>
        {showComment ? "댓글 숨기기" : "댓글 보기"}
      </button>
      {showComment && (
        <div>
          <ul className="commentList">
            {comments.map((comment, index)=>(
                            <li key={comment.id}>
                            <div className="commentContent">
                              {editIndex === index ? 
                              (
                                <div>
                                  <input //수정중인 댓글 입력 필드로
                                    type="text" 
                                    value={editText}
                                    onChange={(e)=>setEditText(e.target.value)} //수정된 텍스트 상태 업데이트
                                    placeholder="댓글을 입력하세요.
                                  "/>
                                  <button className="commentAddBtn" onClick={handdleSaveEdit}>저장</button>
                                </div>
                              ) : 
                              (
                                <p>{comment.text}</p>
                              )}
                            </div>
                            <div>
                              <button onClick={() => setLike(like+1)}>👍</button>
                              <span>0</span>
                            </div>
                            <div>
                              <span 
                                className="editBtn"
                                onClick={()=>handdleEditComments(index)}
                              >
                                수정
                              </span>
                              <span 
                                className="deleteBtn"
                                onClick={()=>handdleDeleteComment(index)}
                              >
                                삭제
                              </span>
                            </div>
                          </li>
            ))
          }
          </ul>
          <div>
            <div className="reple">
              <input 
                type="text"
                value={newComment}
                onChange={(e)=>setNewComment(e.target.value)}
                placeholder="댓글을 입력하세요."
              />
              <button className="commentAddBtn" onClick={handdleAddComments}>댓글 추가</button>
            </div>
          </div>
      </div>
      )}
    </div>
  )
}

export default CommentSection