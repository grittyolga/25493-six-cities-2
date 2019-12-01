import React from "react";
import {createAPI} from "../../api";
import {ActionCreator} from "../../reducer/auth/auth";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      pass: ``
    };
  }
  handleSignIn(event) {
    event.preventDefault();
    const {email, pass} = this.state;
    createAPI().post(`/login`, {
      email,
      password: pass
    })
      .then((response) => {
        this.props.saveAuth(response.data);
      });
  }


  render() {
    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a
                      className="header__nav-link header__nav-link--profile"
                      href="#"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" onSubmit={this.handleSignIn.bind(this)} method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required={true}
                    onChange={(e)=>this.setState({email: e.target.value})}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    onChange={(e)=>this.setState({pass: e.target.value})}
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">
                  Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

SignIn.propTypes = {
  saveAuth: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
});


const mapDispatchToProps = (dispatch) => ({
  saveAuth: (data) => dispatch(ActionCreator.saveAuth(data))
});

export {SignIn};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
