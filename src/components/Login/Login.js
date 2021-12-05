import { useState } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import { css } from '@emotion/react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';

import s from './Login.module.css';
import { useLogInUserMutation } from 'redux/auth/userSlice';
import { setUserData } from 'redux/slices';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const emailInputId = shortid();
const passwordInputId = shortid();

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { isLoading }] = useLogInUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const contactObject = {
      email,
      password,
    };
    try {
      const response = await loginUser(contactObject);

      dispatch(setUserData(response));
    } catch (error) {
      alert('mail or password is not right');
    }

    resetForm();
  };

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value.trim());
        break;
      case 'password':
        setPassword(value.trim());
        break;
      default:
        return;
    }
  }

  function resetForm() {
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={emailInputId}>
          Enter you mail
          <input
            className={s.input}
            id={emailInputId}
            value={email}
            type="email"
            name="email"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.label} htmlFor={passwordInputId}>
          Enter you password
          <input
            className={s.input}
            id={passwordInputId}
            value={password}
            type="password"
            name="password"
            // pattern="(?=.*\d)(?=.*[a-z]).{6,}"
            title="Должен содержать не менее одной цифры, одной прописной и строчной буквы и не менее 8  символов"
            onChange={handleChange}
            required
          />
        </label>
        <button className={s.button} type="submit">
          Login
          <ClockLoader
            color="#ffffff"
            loading={isLoading}
            // loading={false}
            size={25}
            css={override}
          />
        </button>
      </form>
    </>
  );
}
