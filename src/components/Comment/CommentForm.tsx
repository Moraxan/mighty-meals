import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import './CommentForm.css';

const CommentForm = (props:any) => {
    
    const myId:string = props.recipeId;
    const [comment, setComment] = useState('');
    const saveComment = () => {
        var comments = JSON.parse(localStorage.getItem('comments') || "[]")
        if(comments.length === 0){
            var newComment = {
                id:myId,
                comment:comment
            }
            comments.push(newComment);
            localStorage.setItem('comments', JSON.stringify(comments))
        }
        else {
            const found = comments.find((element: { id: string; }) => element.id === myId)
            if (found) {
                var index = comments.findIndex((comm: { id: string; }) => comm.id === myId)
                comments.splice(index, 1);
                if (comment !== "")
                {
                    var newComment = {
                        id:myId,
                        comment:comment
                    }
                    comments.push(newComment);
                    localStorage.setItem('comments', JSON.stringify(comments))
                    
                }
                else { localStorage.setItem('comments', JSON.stringify(comments))}
                
            }
            else {
                var newComment = {
                    id:myId,
                    comment:comment
                }
                comments.push(newComment);
                localStorage.setItem('comments', JSON.stringify(comments))
            }
        }
        
        props.setshowComments(false)
        props.forceUpdate()
    }
    useEffect(() => {
        var comments = JSON.parse(localStorage.getItem('comments') || "[]")
        const found = comments.find((element: { id: string; }) => element.id === myId)
        if (found) {
            setComment(found.comment)
        }
      }, []);
    return (
        <div className="comment-position">
                <div className="header">
                    <p >comments</p>
                </div>  
                    <InputGroup>
                        <Form.Control
                            placeholder="Write your comment"
                            value={comment}
                            as="textarea"
                            onChange={(e) => {setComment(e.target.value)}}
                            style={{ height: "100px" }}
                            aria-label="With textarea"
                        />
                    </InputGroup>
                
                <div >
                <button  className="comment-button" onClick={saveComment} >save comment</button>
                </div>
        </div>
    );
};

export default CommentForm;