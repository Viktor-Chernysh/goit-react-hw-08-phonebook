import { useSelector } from 'react-redux';
import ClockLoader from 'react-spinners/ClockLoader';
import { css } from '@emotion/react';

import Filter from 'components/Filter/Filter';
import ContactItem from 'components/Contacts/contactItem';
import s from 'components/Contacts/Contacts.module.css';
import { useGetContactsQuery } from '../../redux/auth/userSlice';
import { contactsSelectors } from 'redux/contacts';
// import { contactsSlice } from 'redux/contacts';
import Section from 'components/Section/Section';
// import { getFilter } from '../../redux/contacts/contacts-selectors';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: rgb(187, 187, 187);
`;

function Contacts() {
  const filter = useSelector(contactsSelectors.getFilter);
  const { data, isFetching } = useGetContactsQuery();

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    if (filter === '') {
      return data;
    }
    return data.filter(el => el.name.toLowerCase().includes(normalizeFilter));
  };

  return data?.length === 0 ? (
    <h1>There is no contacts</h1>
  ) : (
    <Section>
      <h2>Contacts</h2>
      <Filter />
      <ul className={s.contact_list}>
        {isFetching ? (
          <ClockLoader loading={isFetching} size={120} css={override} />
        ) : (
          filteredContacts()?.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))
        )}
      </ul>
    </Section>
  );
}

export default Contacts;
