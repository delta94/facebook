import React, { Component } from 'react'

import {actionWatcher} from './App/Screens/homeTab/HomeTabSaga';
import { put, takeLatest, all, takeEvery } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    actionWatcher,
  ])
}