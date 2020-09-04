import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

export default function App() {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h1> Warning! </h1>
                Are you sure you want to do this?
            </div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                content="Nice blog post!"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00PM"
                content="I like the subject"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 5:00PM"
                content="I like the writing"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
