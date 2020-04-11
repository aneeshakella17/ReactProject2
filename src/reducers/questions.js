import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'

export default function users(state={}, action) {
  switch(action.type){
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
       state[action.question.id] = action.question
       return state
    default:
      return state
  }


}
