import { spawn } from "redux-saga/effects";

import postsSaga from "./postsSaga";

export default function* rootSaga() {
  yield spawn(postsSaga);
}