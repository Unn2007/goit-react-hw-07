import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchField = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(searchField.toLowerCase())
  );
  const contactItems = visibleContacts.map((item) => {
    return (
      <li key={item.id}>
        <Contact data={item} />
      </li>
    );
  });
  return <ul className={css.contactList}>{contactItems}</ul>;
}

export default ContactList;
