import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: true}

  handleChange = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }))
  }

  changeMode = () => {
    const {darkMode} = this.state
    return (
      <button type="button" className="button" onClick={this.handleChange}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    )
  }

  render() {
    const {darkMode} = this.state
    return (
      <div className={`bg-container ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className={`card-container ${darkMode ? 'dark' : 'light'}`}>
          <h1
            className={`main-heading ${
              darkMode ? 'main-heading-dark' : 'main-heading-light'
            }`}
          >
            Click To Change Mode
          </h1>
          {this.changeMode()}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
