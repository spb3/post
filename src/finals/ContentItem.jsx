import React, { useState } from "react";
import './style.css'
import './contentItem.css'
import Content from "./Content";
import Update from "./Update";



function ContentItem(props) {
  const [contentModal, setContentModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const copyPost = [...props.post];

  updateModal || contentModal ? props.setVisible("write-btn visible") : props.setVisible("write-btn");
  function deletePost() {
    const updatePost = [...props.post];
    updatePost.splice(props.i, 1);
    props.setPost(updatePost);
  }
  console.log(props)
  return(
      <tbody>
        <tr className="content-list">
          <td>{props.i + 1}</td>
          <td onClick={() => {
            setContentModal(!contentModal);
            copyPost[props.i].count += 1;
            props.setPost(copyPost)
          }}>{props.post[props.i].title}</td>
          <td>이름</td>
          <td>{new Date(props.post[props.i].createDate).toLocaleDateString()}</td>
          <td>{props.post[props.i].count}</td>
          <td><button className="update-btn" onClick={() => {setUpdateModal(!updateModal)}}>수정</button>/<button className="delete-btn" onClick={deletePost}>삭제</button></td>
        </tr>
        <>
          {contentModal == true ? <Content contentModal={contentModal} setContentModal={setContentModal} title={props.post[props.i].title} content={props.post[props.i].content}/> : null}
          {updateModal == true ? <Update title={props.post[props.i].title} content={props.post[props.i].content} updateModal={updateModal} setUpdateModal={setUpdateModal} post={props.post} setPost={props.setPost} i={props.i}/> : null}
        </>
      </tbody>
  )
}

export default ContentItem;