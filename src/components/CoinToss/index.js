import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossResults: 0,
    heads: 0,
    tails: 0,
    value: false,
  }

  onClicking = () => {
    const valueForValidate = Math.floor(Math.random() * 2)
    console.log(valueForValidate)
    if (valueForValidate === 0) {
      this.setState(previous => ({
        heads: previous.heads + 1,
        value: false,
      }))
    } else {
      this.setState(previous => ({
        tails: previous.tails + 1,
        value: true,
      }))
    }
    this.setState(previous => ({tossResults: previous.tossResults + 1}))
  }

  render() {
    const {tossResults, heads, tails, value} = this.state
    let Auth
    if (value) {
      Auth = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          className="forImage"
          alt=" toss result"
        />
      )
    } else {
      Auth = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          className="forImage"
          alt=" toss result"
        />
      )
    }

    return (
      <div className="forOuter">
        <div className="forInner">
          <h1 className="forHeader">Coin Toss Game</h1>
          <p className="forPara">Heads (or) Tails</p>
          {Auth}
          <button className="forButton" type="button" onClick={this.onClicking}>
            Toss coin
          </button>
          <div className="forDiv">
            <p className="forParaRes">Total: {tossResults}</p>
            <p className="forParaRes">Heads: {heads}</p>
            <p className="forParaRes">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
