import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ForumList() {

    const posts = useSelector(state => state.topic);
    const dispatch = useDispatch();

    let DeleteOutlined = (indexToDelete) => {
        let cnfrm = window.confirm("Are you sure you want to delete?");
        if(cnfrm) {
            let temp = posts.filter( (value,index) => {
                if(index === indexToDelete)
                return false;
                else
                return true;
            });
            dispatch({type:"deletepost",data: temp});
        }
    }


    let delete5minutes = () => {
        // let temp = JSON.parse(localStorage.getItem("posts"));
        let temp = posts;
        let afterDeletion = temp.filter( (val,index) => {
            let time = new Date();
            let currentMinutes = time.getMinutes();
            let currentHours = time.getHours();
            if (time.getFullYear() > val.year) {
                return false;
            } else {
                if (time.getMonth() > val.month) {
                    return false;
                } else {
                    if(time.getDate() > val.date) {
                        return false;
                    } else {
                        if (time.getHours() > val.hours) {
                            return false;
                        } else {
                            if (time.getMinutes() > val.minutes) {
                                if( (time.getMinutes() - val.minutes) > 5) {
                                   return false; 
                                } else {
                                    return true;
                                }
                            } else {
                                return true; // not possible
                            }
                        }
                    }
                }
            }
        });
        dispatch({type:"delete5mins",data: afterDeletion});
    }
    
    return (
        <>    
            <table border="2">
                <tr>
                    <th>Post</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
                {posts.map( (value,index) => {
                    return (
                        <tr>
                            <td>{value.post}</td>
                            <td>{value.user}</td>
                            <td>{value.time}</td>
                            <td><button onClick={() => DeleteOutlined(index)}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
            <button onClick={delete5minutes}>Delete 5 minutes</button>
        </>
    )
}

export default ForumList;