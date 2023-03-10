import {Component} from 'react'
import './index.css'

class Input extends Component {
  state = {inputBar: '', showButtonTxt: true, showInputBar: true}

  onChangeInput = event => {
    this.setState({inputBar: event.target.value})
  }

  onClickBtn = () => {
    this.setState(prevState => ({showButtonTxt: !prevState.showButtonTxt}))
    this.setState(prevState => ({showInputBar: !prevState.showInputBar}))
  }

  render() {
    const {inputBar, showButtonTxt, showInputBar} = this.state
    return (
      <div className="background">
        <div className="white">
          <h1>Editable Text Input</h1>
          <div className="input-container">
            {showInputBar ? (
              <input
                type="text"
                className="input"
                onChange={this.onChangeInput}
                value={inputBar}
              />
            ) : (
              <p className="para">{inputBar}</p>
            )}

            <button type="button" className="btn" onClick={this.onClickBtn}>
              {showButtonTxt ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Input
