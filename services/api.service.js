import axios from 'axios';

import { getKey, TOKEN_DICTIONARY } from './storage.service.js';


export async function getWeather() {
  const token = await getKey(TOKEN_DICTIONARY.token);
  const city = process.env.CITY || await getKey(TOKEN_DICTIONARY.city);

  if (!token) {
    throw new Error('Не задан ключ API, задайте его чере команду -t [API_KEY]');
  }

  if (!city) {
    throw new Error('Не задан Город, задайте его чере команду -s [CITY]');
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'metric'
    }
  });

  return data;
}
