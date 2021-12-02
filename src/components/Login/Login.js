import { useState } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import { css } from '@emotion/react';
import shortid from 'shortid';

import s from './Login.module.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const nameInputId = shortid();
const passwordInputId = shortid();

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    resetForm();
  };

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'password':
        setPassword(value.trim());
        break;
      default:
        return;
    }
  }

  function resetForm() {
    setName('');
    setPassword('');
  }

  return (
    <>
      <h2>Login</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={nameInputId}>
          Enter you name
          <input
            className={s.input}
            id={nameInputId}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
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
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Должен содержать не менее одной цифры, одной прописной и строчной буквы и не менее 8  символов"
            onChange={handleChange}
            required
          />
        </label>
        <button className={s.button} type="submit">
          Login
          <ClockLoader
            color="#ffffff"
            // loading={isLoading}
            loading={false}
            size={25}
            css={override}
          />
        </button>
      </form>
    </>
  );
}
