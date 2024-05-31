import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
      const data = [];
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data));
  } catch (err) {
    console.error('Помилка видалення контактів:', err);
  }
};

await removeAllContacts();
