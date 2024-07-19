import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { Contact } from "../type.ts";
import Agenda from "./Agenda.tsx";

const AgendaManager: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string>("");
  const addContact = async (contact: Contact, contacts: Contact[]) => {
    setContacts([...contacts, contact]);
    
  };

  return (
    <body>
      <Agenda contacts={contacts} />
      <div class="main-container">
        <div class="contacts-container">
          <h1>Contactos de 29564788N</h1>
          <ul></ul>
          <div class="add-contact-container">
            <h1>Añadir contacto</h1>
            <form method="post">
              <label for="name">Nombre:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onInput={(e) => {
                  setError(""), setName(e.currentTarget.value);
                }}
              />
              <label for="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onInput={(e) => {
                  setError(""), setEmail(e.currentTarget.value);
                }}
              />
              <button
                onClick={() => {
                  addContact({ name, email }, contacts);
                }}
              >
                Añadir
              </button>
              {error && <p class="error">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default AgendaManager;
