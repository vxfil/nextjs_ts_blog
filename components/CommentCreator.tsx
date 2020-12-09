import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SET_COMMENT, CREATE_COMMENT_REQUESTED } from '../redux/actions/postsActions';

import { CommentInput, CommentButton } from '../styles/CommentCreatorStyles';

export const CommentCreator = () => {
    const dispatch = useDispatch();
    const commentBody = useSelector((store) => store.postsReducer.comment);

    return (
        <>
            <CommentInput
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    dispatch({ type: SET_COMMENT, payload: event.target.value })
                }
                value={commentBody}
            />
            <CommentButton
                disabled={
                    commentBody.length < 3 ||
                    commentBody.trim() === '' ||
                    commentBody.length > 300 ||
                    commentBody.trim() === ''
                }
                onClick={() => dispatch({ type: CREATE_COMMENT_REQUESTED })}
            >
                Send
            </CommentButton>
        </>
    );
};
