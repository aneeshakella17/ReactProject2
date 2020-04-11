import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText : '',
    optionTwoText : ''
  }

  handleChange =  (e) => {
    const text = e.target.value
    e.target.id === "text_1" ?
    this.setState(() => ({
      optionOneText: text
    })) : this.setState(() => ({
      optionTwoText: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch, id } = this.props
    dispatch(handleAddQuestion(optionOneText, optionTwoText))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: ''
    }))
  }


  render(){
    const { optionOneText, optionTwoText } = this.state

    return(<div>
      <h2 align='center'>Would You Rather?</h2>
      <form className='new-question' onSubmit={this.handleSubmit}>
          <h3 className='center'>Option 1</h3>
        <textarea
        placeholder="What's happening?"
        id = "text_1"
        value={optionOneText}
        onChange={this.handleChange}
        className='textarea'
        maxLength={280}
        />
        <h3 className='center'>Option 2</h3>
      <textarea
        placeholder="What's happening?"
        id = "text_2"
        value={optionTwoText}
        onChange={this.handleChange}
        className='textarea'
        maxLength={280}
      />

      <button
      className='btn'
      type='submit'
      disabled={optionOneText === '' && optionTwoText === ''}>
        Submit
    </button>

    </form>


    </div>)

   }
}




export default connect()(NewQuestion)
