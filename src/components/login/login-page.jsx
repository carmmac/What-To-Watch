import React, {useRef, useState} from 'react';
import {Redirect} from 'react-router';
import Logo from '../logo/logo';
import {login} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import Loading from '../loading/loading';

const LoginPage = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInValidPassword, setIsInvalidPassword] = useState(false);

  const emailValidation = () => {
    if (!loginRef.current.validity.valid) {
      setIsInvalidEmail(true);
      return false;
    }
    setIsInvalidEmail(false);
    return true;
  };

  const passwordValidation = () => {
    if (!passwordRef.current.validity.valid) {
      setIsInvalidPassword(true);
      return false;
    }
    setIsInvalidPassword(false);
    return true;
  };

  const checkFormValidity = () => {
    return emailValidation() && passwordValidation();
  };

  const renderValidationErrorMessage = () => {
    return (
      <div className="sign-in__message">
        {
          (isInvalidEmail && <p>Please enter a valid email address</p>)
          ||
          (isInValidPassword && <p>Please enter a password</p>)
        }
      </div>
    );
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isFormValid = checkFormValidity();
    if (isFormValid) {
      dispatch(login({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    authorizationStatus === AuthorizationStatus.WAITING_AUTH &&
    <Loading /> ||
    authorizationStatus === AuthorizationStatus.AUTH &&
    <Redirect to={AppRoute.ROOT} /> ||
    authorizationStatus === AuthorizationStatus.NO_AUTH &&
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleSubmit} noValidate>
            {renderValidationErrorMessage()}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="userEmail"
                  id="user-email"
                  ref={loginRef}
                  required
                />
                <label className="sign-in__label visually-hidden" htmlFor="userEmail">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="userPassword"
                  id="user-password"
                  ref={passwordRef}
                  required
                />
                <label className="sign-in__label visually-hidden" htmlFor="userPassword">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
  );
};

export default LoginPage;
