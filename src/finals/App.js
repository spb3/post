import Content from "./Content";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";
import Update from "./Update";
import './modal.css'
import { useState } from "react";


function App() {
const [modal, setModal] = useState(false);
const [post, setPost] = useState([]);


console.log(post)
return(
    <div>
    <Header post={post} setPost={setPost}/>
    
    <Main modal={modal} setModal={setModal} post={post} setPost={setPost}/>
    {modal == true ? <Modal modal={modal} setModal={setModal} setPost={setPost} post={post}/> : null}
    
    </div>
    )
}

export default App;