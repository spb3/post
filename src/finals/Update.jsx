import React, { useRef, useState } from "react";
import './update.css';

function Update(props) {
  const [updateContent, setUpdateContent] = useState(props.content);
  const [updateTitle, setUpdateTitle] = useState(props.title);
  const [idx, setIndex] = useState(props.i)
  const contentRef = useRef();
  const titleRef = useRef();
  
  console.log(idx)
  const copyPost = [...props.post];
  
  function updateCheck() {
    if(titleRef.current.value == "" || contentRef.current.value == "") {
      alert("수정할 제목과 내용을 확인해 주세요");
    }else {
      props.setUpdateModal(!props.updateModal);
      copyPost[idx].title = titleRef.current.value;
      copyPost[idx].content = contentRef.current.value;
      props.setPost(copyPost);
    }
  }
  return(
    <div className="update-container">
      <div className="update-add-content">
        <div className="update-header">
          <div>제목:</div>
          <input type="text" value={updateTitle} ref={titleRef} onChange={(e) => {setUpdateTitle(e.target.value)}}/>
          <button className="x-btn" onClick={(e) => {
            props.setUpdateModal(!props.updateModal);
          }}>x</button>
        </div>
        <div className="update-content">
          <h3>내용 수정</h3>
        </div>
        <div className="update-textarea">
          <textarea value={updateContent} ref={contentRef} onChange={(e) => {setUpdateContent(e.target.value)}}></textarea>
        </div>
        <div className="update-btns">
          <button className="success-update-btn" onClick={updateCheck}>수정 완료</button>
        </div>
      </div>
    </div>
  )
}

export default Update;