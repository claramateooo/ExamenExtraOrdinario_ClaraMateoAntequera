import { FunctionComponent } from "preact";
import { Contact } from "../type.ts";



type AgendaProps = {
  contacts: Contact[];
};

const Agenda: FunctionComponent<AgendaProps> = ({ contacts }) => {
  return (
    <>
      {contacts.length > 0 && (
        <div class="contacts-container">
          <h2>Contactos de </h2>
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <span>{contact.name}</span>
                <span>{contact.email}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Agenda;
