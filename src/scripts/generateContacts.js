import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
      const contacts = await getAllContacts();

  for (let index = 0; index < number; index++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }

  await fs.writeFile(PATH_DB, JSON.stringify(contacts));
};

await generateContacts(5);
