import './App.css';

import Form from './components/Form';
import Contacts from './components/Contacts/Contacts';
import Navigation from 'components/Navigation/Navigation';

export default function App() {
  const isAuth = true;
  return (
    <>
      <Navigation />

      {isAuth && (
        <>
          <Form />
          <Contacts />
        </>
      )}
    </>
  );
}

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });
// export default connect(mapStateToProps, null)(App);
