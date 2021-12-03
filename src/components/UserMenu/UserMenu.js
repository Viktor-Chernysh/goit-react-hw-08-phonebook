import { useSelector, useDispatch } from 'react-redux';

import { getName, getToken } from 'redux/auth/auth-selectors';
import { useLogOutUserMutation } from 'redux/auth/userSlice';
import { setLogout } from 'redux/slices';
import defaultAvatar from './default-avatar.png';

const s = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
    width: '45px',
    // height: 'auto',
    borderRadius: '25px',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};
export default function UserMenu() {
  const name = useSelector(getName);
  // const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  const avatar = defaultAvatar;

  const handleLogOut = () => {
    logOutUser();
    dispatch(setLogout());
  };
  return (
    <div style={s.container}>
      <img src={avatar} alt="" width="32" style={s.avatar} />
      <span style={s.name}>Welcome, {name}</span>
      <button type="button" onClick={handleLogOut}>
        log out
      </button>
    </div>
  );
}
