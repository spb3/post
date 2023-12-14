import React from "react";
import './content.css'
function Content(props) {
  return(
    
    <div className="contentContainer">
      <div className="contentModal">
        <div className="contentModalTitle">제목: {props.title}</div>
        <button className="xBtn" onClick={() => {
          props.setContentModal(!props.contentModal);
        }}>x</button>
        <div className="contentModalBody">
          <h3>내용</h3>
          <div className="contentBody">{props.content}</div>
        </div>
      </div>
    </div>
  )
}

export default Content;