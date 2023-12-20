import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  onClickLoginButton = () => {
    Cookies.set('jwt_token', 'JWT Token', {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={this.onClickLoginButton}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
