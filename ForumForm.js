import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

function ForumForm() {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.topic);

    let addComment = (e) => {
        e.preventDefault();
        let t = new Date();
        let time = t.getTime();
        let ttime = t.toString();
        
        console.log(t.getFullYear());
        console.log(t.getDate());

        let postObj = {
            "user":e.target.user.value,
            "post":e.target.post.value,
            "time":ttime,
            "times":time,
            year: t.getFullYear(),
            month: t.getMonth(),
            date: t.getDate(),
            hours:t.getHours(),
            minutes:t.getMinutes()
        };
        dispatch({type:"addpost",data: postObj});
    }

    return (
        <>
            <form onSubmit={addComment}>
                <textarea placeholder="Enter comment" rows="3" cols="50" name="post" style={{border:"1px solid black"}}></textarea><br />
                <select name="user" style={{width:"300px"}}>
                    <option value="User 1">User 1</option>
                    <option value="User 2">User 2</option>
                    <option value="User 3">User 3</option>
                </select><br /><br />
                <button style={{width: "300px"}}>Add post</button>
            </form>
        </>
    )
}

export default ForumForm;