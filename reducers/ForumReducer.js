const initialState = {topic: []};

function ForumReducer(state = initialState, action) {
    
    let ls = localStorage.getItem("posts") ? JSON.parse(localStorage.getItem("posts")) : [];

    switch(action.type) {
        case "addpost": {
            ls.push(action.data);
            localStorage.setItem("posts",JSON.stringify(ls));
            return {topic: ls}
        }
        case "deletepost": {
            localStorage.setItem("posts",JSON.stringify(action.data));
            return {topic: action.data};
        }
        case "delete5mins": {
            localStorage.setItem("posts",JSON.stringify(action.data));
            return {topic: action.data};
        }
        default : {
            return {topic: [...ls]};
        }
    }
}

export default ForumReducer;