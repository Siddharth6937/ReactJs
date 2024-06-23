/*
    Redux-Thunk - Async Redux state updates
    - Access to getState
    - Access to dispatch
    - Make async API calls.
 */

import axois from "axios";

export const FETCH_NEWS_REQUESTED = "FETCH_NEWS_REQUESTED";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";

const fetchNewsRequested = () => ({
    type: FETCH_NEWS_REQUESTED

})

const fetchNewsSuccess = (newsList) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: newsList
})

const fetchNewsError = (errorMessage) => ({
    type: FETCH_NEWS_ERROR,
    payload: errorMessage
})

export const fetchNews = () => {
    return async (dispatch, getState) => {
        try {
            let res = await axois.get('https://newsapi.org/v2/top-headlines?apiKey=f4f08702ff3f487fb62ee4cf6eb1760e&country=in')
            dispatch(fetchNewsSuccess(res.data.articles));

        }
        catch (err) {
            dispatch(fetchNewsError(err.message))
        }
    }
}
