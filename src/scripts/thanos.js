import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
      const contacts = await getAllContacts();
  const data = contacts.filter(() => Math.random() >= 0.5);

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data));
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await thanos();
