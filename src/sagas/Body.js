import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  FETCH_ALL_BODY,
  NEW_BODY,
  UPDATE_BODY,
  DELETE_BODY,
} from "../constants/ActionTypes";
import {
  showMessage,
  hideLoader,
  userSignOut,
  fetchBodiesSuccess,
  fetchBodies,
} from "../actions";
import { BodyAPI } from "../apis";

const bodyAPI = new BodyAPI();
const fetchAllRequest = async (id) =>
  await bodyAPI
    .fetchAll(id)
    .then((resp) => resp)
    .catch((error) => error);
const createRequest = async (body) =>
  await bodyAPI
    .register(body)
    .then((resp) => resp)
    .catch((error) => error);
const updateRequest = async (payload) =>
  await bodyAPI
    .updateItem(payload.id, payload.body)
    .then((resp) => resp)
    .catch((error) => error);
const deleteRequest = async (payload) =>
  await bodyAPI
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
      yield put(fetchBodiesSuccess(res.data.bodies));
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
      yield put(fetchBodies(res.data.body.building_id));
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
      yield put(fetchBodies(res.data.body.building_id));
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
      yield put(fetchBodies(payload.building_id));
    }
  } catch (error) {
    yield put(showMessage(error));
  }
}
export function* fetchAllSaga() {
  yield takeEvery(FETCH_ALL_BODY, fetchAll);
}
export function* createSaga() {
  yield takeEvery(NEW_BODY, create);
}
export function* updateSaga() {
  yield takeEvery(UPDATE_BODY, update);
}
export function* deleteSaga() {
  yield takeEvery(DELETE_BODY, deleteItem);
}
export default function* rootSaga() {
  yield all([
    fork(fetchAllSaga),
    fork(createSaga),
    fork(updateSaga),
    fork(deleteSaga),
  ]);
}
