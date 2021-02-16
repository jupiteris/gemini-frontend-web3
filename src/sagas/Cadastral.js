import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  showMessage,
  hideLoader,
  userSignOut,
  fetchCadastrals,
  fetchCadastralsSuccess,
} from "../actions";
import {
  DELETE_CADASTRAL,
  FETCH_ALL_CADASTRAL,
  NEW_CADASTRAL,
  UPDATE_CADASTRAL,
} from "../constants/ActionTypes";
import { CadastralAPI } from "../apis";

const cadastralAPI = new CadastralAPI();
const fetchAllRequest = async (payload) =>
  await cadastralAPI
    .fetchAll(payload)
    .then((resp) => resp)
    .catch((error) => error);
const createRequest = async (body) =>
  await cadastralAPI
    .register(body)
    .then((resp) => resp)
    .catch((error) => error);
const updateRequest = async (payload) =>
  await cadastralAPI
    .updateItem(payload.id, payload.body)
    .then((resp) => resp)
    .catch((error) => error);
const deleteRequest = async (payload) =>
  await cadastralAPI
    .deleteItem(payload)
    .then((resp) => resp)
    .catch((error) => error);
function* fetchAll({ payload }) {
  try {
    const res = yield call(fetchAllRequest, payload);
    yield put(hideLoader());
    if (res.status !== 200) {
      switch (res.response.status) {
        case 401:
          yield put(showMessage(res["response"]["data"]["errors"][0]));
          yield put(userSignOut());
          return;
        case 500:
          yield put(
            showMessage("There is the problem in server. Please try later")
          );
          return;
        default:
          yield put(showMessage(res.message));
          return;
      }
    } else {
      yield put(fetchCadastralsSuccess(res.data.cadastrals));
    }
  } catch (error) {
    yield put(showMessage(error));
  }
}
function* create({ payload }) {
  try {
    const res = yield call(createRequest, payload);
    yield put(hideLoader());
    if (res.status !== 200) {
      switch (res.response.status) {
        case 401:
          yield put(showMessage(res["response"]["data"]["errors"][0]));
          yield put(userSignOut());
          return;
        case 500:
          yield put(
            showMessage("There is the problem in server. Please try later")
          );
          return;
        default:
          yield put(showMessage(res.message));
          return;
      }
    } else {
      yield put(fetchCadastrals(res.data.cadastral.body_id));
    }
  } catch (error) {
    yield put(showMessage(error));
  }
}
function* update({ payload }) {
  try {
    const res = yield call(updateRequest, payload);
    yield put(hideLoader());
    if (res.status !== 200) {
      switch (res.response.status) {
        case 401:
          yield put(showMessage(res["response"]["data"]["errors"][0]));
          yield put(userSignOut());
          return;
        case 500:
          yield put(
            showMessage("There is the problem in server. Please try later")
          );
          return;
        default:
          yield put(showMessage(res.message));
          return;
      }
    } else {
      yield put(fetchCadastrals(res.data.cadastral.body_id));
    }
  } catch (error) {
    yield put(showMessage(error));
  }
}
function* deleteItem({ payload }) {
  try {
    const res = yield call(deleteRequest, payload);
    yield put(hideLoader());
    if (res.status !== 200) {
      switch (res.response.status) {
        case 401:
          yield put(showMessage(res["response"]["data"]["errors"][0]));
          yield put(userSignOut());
          return;
        case 500:
          yield put(
            showMessage("There is the problem in server. Please try later")
          );
          return;
        default:
          yield put(showMessage(res.message));
          return;
      }
    } else {
      yield put(fetchCadastrals(res.data.cadastral.body_id));
    }
  } catch (error) {
    yield put(showMessage(error));
  }
}
export function* fetchAllSaga() {
  yield takeEvery(FETCH_ALL_CADASTRAL, fetchAll);
}
export function* createSaga() {
  yield takeEvery(NEW_CADASTRAL, create);
}
export function* updateSaga() {
  yield takeEvery(UPDATE_CADASTRAL, update);
}
export function* deleteSaga() {
  yield takeEvery(DELETE_CADASTRAL, deleteItem);
}
export default function* rootSaga() {
  yield all([
    fork(fetchAllSaga),
    fork(createSaga),
    fork(updateSaga),
    fork(deleteSaga),
  ]);
}
