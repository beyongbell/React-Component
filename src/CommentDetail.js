import React from 'react'

export default function CommentDetail(props) {
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={props.avatar} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date"> {props.timeAgo} </span>
                    </div>
                    <div className="text"> {props.content} </div>
                </div>
            </div>
        </div>
    )
}
