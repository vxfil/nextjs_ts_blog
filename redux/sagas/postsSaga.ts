import { put, call, takeEvery, select } from "redux-saga/effects";

import {
  GET_POSTS,
  GET_POSTS_REQUESTED,
  GET_CURRENT_POST,
  GET_CURRENT_POST_REQUESTED,
  CREATE_COMMENT_REQUESTED,
  SET_COMMENT_RESULT,
  CLEAR_COMMENT
} from "../actions/postsActions";

import { getPosts, getPost, createComment } from "../../api";

function* getPostsGenerator() {
  const response = yield call(getPosts);
  yield put({ type: GET_POSTS, payload: response });
}

function* getCurrentPostGenerator() {
  const postId = yield select((store) => store.postsReducer.currentPostId);
  const response = yield call(getPost, postId);
  yield put({ type: GET_CURRENT_POST, payload: response });
}

function* createCommentGenerator() {
  const postId = yield select((store) => store.postsReducer.currentPostId);
  const body = yield select((store) => store.postsReducer.comment);
  const response = yield call(createComment, { postId: parseInt(postId), body });
  yield put({ type: SET_COMMENT_RESULT, payload: response});
  yield put({ type: CLEAR_COMMENT });
}

export default function* postSaga() {
  yield takeEvery(GET_POSTS_REQUESTED, getPostsGenerator);
  yield takeEvery(GET_CURRENT_POST_REQUESTED, getCurrentPostGenerator);
  yield takeEvery(CREATE_COMMENT_REQUESTED, createCommentGenerator);
}