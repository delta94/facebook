import { put, takeLatest, all,call, takeEvery } from 'redux-saga/effects';
function* fetchNews() {
  console.log('fetch news')
  try {
    const json = fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  .then(response => {
    response.json();
    console.log(response.json())}, );
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
  } catch (e) {
    console.log(e)
  }
  
}
// function* actionWatcher() {
//   yield takeLatest('GET_NEWS', fetchNews)
// }
// export default function* rootSaga() {
//   yield all([
//     actionWatcher(),
//   ]);
// }
export const actionWatcher = [takeEvery('GET_NEWS', fetchNews)];