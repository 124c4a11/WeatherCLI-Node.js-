import { promises } from 'fs';
import { join, resolve } from 'path';


const filePath = join(resolve(), 'weather-data.json');


export const TOKEN_DICTIONARY = {
  token: 'token',
  city: 'city'
};


async function isExist(path) {
  try {
    await promises.stat(path);
    return true;
  } catch (err) {
    return false;
  }
}


export async function saveKeyValue(key, value) {
  let data = {};

  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);

    data = JSON.parse(file);
  }

  data[key] = value;

  await promises.writeFile(filePath, JSON.stringify(data));
}


export async function getKey(key) {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);

    return data[key]
  }

  return undefined;
}
