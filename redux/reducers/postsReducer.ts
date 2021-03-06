import { GET_POSTS,
    GET_CURRENT_POST, 
    SET_CURRENT_POST_ID, 
    SET_TITLE, SET_BODY, 
    SET_COMMENT, SET_COMMENT_RESULT, 
    CLEAR_COMMENT, 
    CLEAR_UPDATE_FORM_FIELDS
} from '../actions/postsActions';

import { initState } from '../../interfaces'


const initialState: initState = {
    posts: [],
    currentPostId: null,
    currentPost: {},
    title: '',
    body: '',
    comment: '',
    commentResult: {},
}

const postsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_POSTS:
            return { ...state, posts: payload };
        case SET_CURRENT_POST_ID:
            return { ...state, currentPostId: payload };
        case GET_CURRENT_POST:
            return { ...state, currentPost: payload };
        case SET_TITLE:
            return { ...state, title: payload };
        case SET_BODY:
            return { ...state, body: payload };
        case SET_COMMENT:
            return { ...state, comment: payload }; 
        case SET_COMMENT_RESULT:
            return { ...state, commentResult: payload };
        case CLEAR_COMMENT:
            return { ...state, comment: '' };
        case CLEAR_UPDATE_FORM_FIELDS:
            return {...state, title: '', body: ''};
        default: return state
    }
};

export default postsReducer;