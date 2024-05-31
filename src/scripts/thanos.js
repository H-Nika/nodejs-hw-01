import { PATH_DB } from '../constants/contacts.js';
import { log } from 'console';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
      const contacts = await getAllContacts();
  const data = [];
  contacts.forEach((contact) => {
    const random = Math.random() >= 0.5;
    if (random) {
      data.push(contact);
    }
  });
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data));
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await thanos();
