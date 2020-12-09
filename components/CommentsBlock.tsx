import React, { ReactText } from 'react';

import { Comment } from '../styles/CommentBlockStyles';

interface cmnt {
    id: ReactText;
    postId: number;
    body: string;
}

export const CommentsBlock = ({ comments }) => {
    return <>{comments ? comments.map((cmnt: cmnt) => <Comment key={cmnt.id}>{cmnt.body}</Comment>) : null}</>;
};
