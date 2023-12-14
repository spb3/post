import React, { useState } from "react";
import ContentItem from "./ContentItem";
import './style.css';
import './main.css';


function Main(props) {
  const [visible, setVisible] = useState("write-btn");
  return(
    <main>
      <article>
        <table className="content-table">
            <thead>
              <tr className="content-title-list">
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
                <th></th>
              </tr>
            </thead>
            
              {props.post.map((post, i) => {
                return(
                    <ContentItem post={props.post} setPost={props.setPost} i={i} modal={props.modal}
                    setModal={props.setModal} updateModal={props.updateModal} 
                    setUpdateModal={props.setUpdateModal} contentModal={props.contentModal} setContentModal={props.setContentModal} visible={visible} setVisible={setVisible}/>
                )
              })}
          </table>
          <>
            <div className="btn">
              <button onClick={() => {props.setModal(!props.modal)}} className={visible}>글 작성</button>
            </div>
          </>
      </article>
      


    </main>
  )
}

export default Main;