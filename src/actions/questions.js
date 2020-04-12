import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ADD_QUESTION'


function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function answerQuestion (info) {
  console.log(info)
  return {
    type: ANSWER_QUESTION,
    info
  }
}


export function handleAddQuestion (optionOneText, optionTwoText) {
 return (dispatch, getState) => {
   const { authedUser } = getState()
   dispatch(showLoading())
   return saveQuestion({
     optionOneText,
     optionTwoText,
     author: authedUser,
   }).then((question) => {
     dispatch(answerQuestion(question))
   })
   .then(() => dispatch(hideLoading()))
 }
}


export function handleAnswerQuestion(qid, answer) {
 return (dispatch, getState) => {
   const { authedUser } = getState()
   dispatch(showLoading())
   return saveQuestionAnswer({
     qid,
     answer,
     author: authedUser,
   }).then((answer) => {
     dispatch(answerQuestion(answer))
   })
   .then(() => dispatch(hideLoading()))
 }
}


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
