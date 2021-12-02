import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import s from './Filter.module.css';
import { getFilter } from 'redux/slices';

function Filter() {
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      <div>Find contact by name</div>
      <input
        className={s.input}
        type="text"
        id={uuidv4()}
        name="filter"
        onChange={e => dispatch(getFilter(e.target.value))}
      />
    </label>
  );
}

export default Filter;
