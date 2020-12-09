import React, { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Layout } from '../../components/Layout';
import { CommentsBlock } from '../../components/CommentsBlock';
import { CommentCreator } from '../../components/CommentCreator';
import { SET_CURRENT_POST_ID, GET_CURRENT_POST_REQUESTED, SET_TITLE, SET_BODY } from '../../redux/actions/postsActions';
import { deletePost, updatePost } from '../../api';
import {
    Wrapper,
    ButtonsWrapper,
    Button,
    EditTitle,
    Title,
    EditBody,
    Body,
    CommentsWrapper,
} from '../../styles/[postId]Styles';

export default function PostIdPage() {
    const router = useRouter();

    const dispatch = useDispatch();

    const { postId } = router.query;

    const [updateIsClicked, setUpdateIsClicked] = useState<boolean>(false);

    const commentResult = useSelector((store) => store.postsReducer.commentResult);

    useEffect(() => {
        dispatch({ type: SET_CURRENT_POST_ID, payload: postId });
        dispatch({ type: GET_CURRENT_POST_REQUESTED });
    }, [dispatch, updateIsClicked, commentResult]);

    const currentPost = useSelector((store) => store.postsReducer.currentPost);

    const deleteHandler = async () => {
        const response = await deletePost(postId);
        if (response) {
            router.push('/');
        } else {
            return;
        }
    };

    const title = useSelector((store) => store.postsReducer.title);
    const body = useSelector((store) => store.postsReducer.body);

    const updateHandler = () => {
        setUpdateIsClicked((prevState) => !prevState);
    };

    const saveHandler = async () => {
        const response = await updatePost(postId, { title, body });
        if (response) {
            setUpdateIsClicked(false);
        } else {
            return;
        }
    };

    const titleIsValid = title || currentPost.title;
    const bodyIsValid = body || currentPost.body;

    return (
        <Layout>
            <Wrapper>
                <ButtonsWrapper>
                    <Button onClick={updateHandler}>{updateIsClicked ? 'Back' : 'Update'}</Button>
                    <Button delete onClick={deleteHandler}>
                        Delete
                    </Button>
                </ButtonsWrapper>
                {updateIsClicked ? (
                    <EditTitle
                        defaultValue={currentPost && currentPost.title}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            dispatch({ type: SET_TITLE, payload: event.target.value })
                        }
                        placeholder="Title"
                    />
                ) : (
                    <Title>{currentPost && currentPost.title}</Title>
                )}

                {updateIsClicked ? (
                    <EditBody
                        defaultValue={currentPost && currentPost.body}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            dispatch({ type: SET_BODY, payload: event.target.value })
                        }
                        placeholder="Body"
                    />
                ) : (
                    <Body>{currentPost && currentPost.body}</Body>
                )}
                {updateIsClicked ? (
                    <Button
                        save
                        disabled={
                            titleIsValid.length < 3 ||
                            titleIsValid.length > 50 ||
                            bodyIsValid.length < 3 ||
                            bodyIsValid.length > 500
                        }
                        onClick={saveHandler}
                    >
                        Save
                    </Button>
                ) : null}

                <CommentsWrapper>
                    {updateIsClicked ? null : <CommentsBlock comments={currentPost.comments}></CommentsBlock>}
                    {updateIsClicked ? null : <CommentCreator></CommentCreator>}
                </CommentsWrapper>
            </Wrapper>
        </Layout>
    );
}
