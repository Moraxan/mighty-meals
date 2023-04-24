import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


import 'bootstrap/dist/css/bootstrap.min.css';

 const CommentForm = () => {
    const [comment, setComment] = useState("");
    const commentHandler = () => {
        // sent the comment to backend through post api request
    };
    return (
        <div className="Comment-position">
            <div className="p-3 bg-light w-100">
                <h4 className="mb-2 font-weight-bold">Comments</h4>
                <div className="p-3 shadow-sm bg-white">
                    <InputGroup>
                        <Form.Control
                            placeholder="Write your comment"
                            as="textarea"
                            onChange={(value: any) => setComment(value)}
                            style={{ height: "100px" }}
                            aria-label="With textarea"
                        />
                    </InputGroup>
                    <button
                        className="mt-3 border-0 py-2 px-4 text-secondary"
                        onClick={commentHandler}
                        style={{ borderRadius: "20px" }}
                    >
                        Comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentForm;