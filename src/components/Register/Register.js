import { useState } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import { css } from '@emotion/react';
import shortid from 'shortid';

import s from './Register.module.css';
import { useCreateUserMutation } from 'redux/auth/userSlice';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const nameInputId = shortid();
const passwordInputId = shortid();
const emailInputId = shortid();

export default function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [createUser] = useCreateUserMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const contactObject = {
      name,
      email,
      password,
    };

    createUser(contactObject);

    resetForm();
  };

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        return;
    }
  }

  function resetForm() {
    setName('');
    setPassword('');
    setEmail('');
  }

  return (
    <>
      <h2>Register</h2>
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
        <label className={s.label} htmlFor={emailInputId}>
          Enter you mail
          <input
            className={s.input}
            id={emailInputId}
            value={email}
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={handleChange}
            required
          />
        </label>
        <button className={s.button} type="submit">
          Registration
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
