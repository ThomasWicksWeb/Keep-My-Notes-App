import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ErrorMessage from '../Misc/Error';

import firebase from 'firebase';

import 'bulma/css/bulma.css';
import styles from './CreateAccount.module.scss';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState({
    IsError: false,
    ErrorMessage: '',
  });

  let history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        history.push('/home');
      })
      .catch(function (error) {
        setError({
          IsError: true,
          ErrorMessage: error.message,
        });
        CheckForError();
      });
  };

  const CheckForError = () => {
    if (error.IsError) {
      return <ErrorMessage ErrorBody={error.ErrorMessage} />;
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h3 className="has-text-weight-bold has-text-centered is-size-3">
          Create Account
        </h3>

        {CheckForError()}

        <form onSubmit={handleOnSubmit} className={styles.formContainer}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={handleEmail}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePassword}
              />
            </div>
          </div>

          <button className="button is-info has-text-weight-bold" type="submit">
            Create Account
          </button>

          <p className="has-text-centered">
            Already have an account? <Link to="/login">Login</Link>
          </p>

          <p className="has-text-centered">
            Having trouble logging in?{' '}
            <Link to="/resetpassword">Reset your password</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default CreateAccount;
