import './App.css';
import Section from './components/Section/Section';
import Form from './components/Form';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <Form />
      </Section>
      {/* {contacts.length > 0 && ( */}
      <Section>
        <Contacts />
      </Section>
      {/* )} */}
    </>
  );
}

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });
// export default connect(mapStateToProps, null)(App);
export default App;
