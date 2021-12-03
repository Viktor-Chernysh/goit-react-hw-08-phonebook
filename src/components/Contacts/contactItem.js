import { useDeleteContactMutation } from '../../redux/auth/userSlice';
import s from './Contacts.module.css';

export default function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li className={s.contact_item}>
      {name}:<span>{number}</span>
      <button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
}
