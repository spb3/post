import React, { useRef, useState } from "react";
import './modal.css'

function Modal(props) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("")
  const contentRef = useRef()
  const titleRef = useRef();
  const postRef = useRef(0);

  function onCreate(title, content) {
    const post = {
      postNum: postRef.current,
      title: title,
      content: content,
      createDate: new Date().toLocaleDateString(),
      count: 0
    }
    postRef.current += 1;
    props.setPost([post, ...props.post]);
  }

  function checkTitleAndContent() {
    if(contentRef.current.value == "" && titleRef.current.value == "") {
      alert("제목과 내용을 입력해 주세요");
    }else if(contentRef.current.value == "" || titleRef.current.value == "") {
      alert("내용 또는 제목을 입력해 주세요");
    }else {
      setTitle(title);
      setContent(content);
      props.setModal(!props.modal);
      onCreate(title, content);
    }
  }

  return(
    <div className="modal-container">
      <div className="modal-add-content">
        <div className="modal-header">
          <div>제목:</div>
          <input type="text" value={title} ref={titleRef} onChange={(e) => {
            setTitle(e.target.value);
          }}/>
          <button className="x-btn" onClick={() => {
            props.setModal(!props.modal)
          }}>x</button>
        </div>
        <h3 className="content">내용</h3>
        <div className="modal-textarea">
          <textarea ref={contentRef} value={content} onChange={(e) => {
            setContent(e.target.value);
          }}></textarea>
        </div>
        <div className="modal-btn">
          <button className="success-btn" onClick={checkTitleAndContent}>작성 완료</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;