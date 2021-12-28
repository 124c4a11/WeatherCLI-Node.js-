import axios from 'axios';

import { getKey, TOKEN_DICTIONARY } from './storage.service.js';


export async function getWeather(city) {
  const token = await getKey(TOKEN_DICTIONARY.token);

  if (!token) {
    throw new Error('Не задан ключ API, задайте его чере команду -t [API_KEY]');
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
