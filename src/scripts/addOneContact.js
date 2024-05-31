import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const addOneContact = async () => {  const contacts = await getAllContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await addOneContact();
