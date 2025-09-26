import React from 'react';

function Avatar(props) {
    <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
    />
}

function UserInfo(props) {
    <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    </div>

}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">  
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;