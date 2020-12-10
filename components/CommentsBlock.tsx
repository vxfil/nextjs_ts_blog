import React from 'react';

import { Comment } from '../styles/CommentBlockStyles';
import { cmnt } from '../interfaces';

export const CommentsBlock = ({ comments }) => {
    return <>{comments ? comments.map((cmnt: cmnt) => <Comment key={cmnt.id}>{cmnt.body}</Comment>) : null}</>;
};
