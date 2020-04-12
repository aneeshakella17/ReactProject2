import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


function addQuestion (question, authedUser) {
  return {
    type: ADD_QUESTION,
    question,
    authedUser
  }
}

function answerQuestion (qid, answer, authedUser) {
  return {
    type: ANSWER_QUESTION,
    qid,
    answer,
    authedUser,
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
     dispatch(addQuestion(question, authedUser))
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
     authedUser,
   }).then(() => {
     dispatch(answerQuestion(qid, answer, authedUser))
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
