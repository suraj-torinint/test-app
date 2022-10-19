import React from "react";
import { commentType } from "../App";

const CommentList: React.FC<{ allComments: commentType[] }> = ({ allComments }) => {
    if (allComments.length === 0) {
        return <h6>No Comments</h6>;
    }

    return (
        <div>
            <h2>Comment List</h2>
            <ul>
                {allComments.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;
