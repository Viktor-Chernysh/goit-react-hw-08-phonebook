import { useSelector, useDispatch } from 'react-redux';
import ClockLoader from 'react-spinners/ClockLoader';
import { css } from '@emotion/react';

import { getName } from 'redux/auth/auth-selectors';
import { useLogOutUserMutation } from 'redux/auth/userSlice';
import { setLogout } from 'redux/slices';
import defaultAvatar from './default-avatar.png';

import s from './UserMenu.module.css';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

export default function UserMenu() {
  const name = useSelector(getName);
  // const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [logOutUser, { isLoading }] = useLogOutUserMutation();
  const avatar = defaultAvatar;

  const handleLogOut = () => {
    logOutUser();
    dispatch(setLogout());
  };
  return (
    <div className={s.container}>
      <div className={s.user}>
        <img src={avatar} alt="" width="32" className={s.avatar} />
        <span className={s.name}>Welcome, {name}!</span>
      </div>
      <button className={s.button} type="button" onClick={handleLogOut}>
        Log out
        <ClockLoader
          color="#ffffff"
          loading={isLoading}
          // loading={false}
          size={25}
          css={override}
        />
      </button>
    </div>
  );
}
