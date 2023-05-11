import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import './Comment.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

 const CommentForm = () => {
    const [comment, setComment] = useState("");
    const commentHandler = () => {
        // sent the comment to backend through post api request
    };
    return (
        <div className="comment-position">
                <div className="header">
                    <p >comments</p>
                </div>              
                
                    <InputGroup>
                        <Form.Control
                            placeholder="Write your comment"
                            as="textarea"
                            onChange={(value: any) => setComment(value)}
                            style={{ height: "100px" }}
                            aria-label="With textarea"
                        />
                    </InputGroup>
                
                <div className="comment-button">
                <button                        
                        onClick={commentHandler}
                    >
                        comment
                    </button>
                </div>
                    
                
            
        </div>
    );
};

export default CommentForm;